import React, { Component } from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'
import Modal from 'react-modal'

import BlogLayout from "../../components/blog-layout"
import SEO from "../../components/seo"

Modal.setAppElement(`#___gatsby`);

class ExploreAtlantaPage extends Component {

  constructor(props) {
    super(props);
    this.state = { activeModal:99 };
  }

  handleOpenModal (index) {
    let num = index;
    this.setState({ activeModal: num });
  }

  prevModal (index) {
    let num = (index - 1);
    this.setState({ activeModal: num });
    console.log(num);
  }

  nextModal (index) {
    let num = (index + 1);
    this.setState({ activeModal: num });
    console.log(num);
  }

  handleCloseModal () {
      this.setState({ activeModal: 99 });
  }

  render () {
    const { data } = this.props; 

    return (
      <BlogLayout>
        {data.allWordpressWpCustomPage.edges.map(post => (
        <SEO 
        title={post.node.acf.meta_title} 
        description={post.node.acf.meta_description}
        image={post.node.featured_media.localFile.childImageSharp.sizes}
        />
        ))}
        <BlogGrid>
          {data.allWordpressWpCustomPage.edges.map(post => (
              <div class="top-content">
                  <h1><span>Explore the Space</span></h1>
                  <Img sizes={post.node.acf.location_tag_image.localFile.childImageSharp.sizes} alt={post.node.acf.location_tag_image.title} />
              </div>
          ))}
          <div class="top-menu">
            <ul>
              <li><Link to={"/explore-the-space/atlanta/"}>Atlanta</Link></li>
              <li><Link to={"/explore-the-space/charlotte/"}>Charlotte</Link></li>
              <li><Link to={"/explore-the-space/chicago/"}>Chicago</Link></li>
              <li><Link to={"/explore-the-space/dallas/"}>Dallas</Link></li>
              <li><Link to={"/explore-the-space/detroit/"}>Detroit</Link></li>
              <li><Link to={"/explore-the-space/mid-atlantic/"}>Mid-Atlantic</Link></li>
            </ul>
          </div>
          {data.allWordpressWpSpaceImage.edges.map((post, i) => (
            <div class="column">
              <div class="space-overlay">
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                  <button 
                    id={"selector_" + i}
                    onClick={() => this.handleOpenModal(i)}
                    aria-label="Open"
                    >
                      Zoom
                    </button>
                </div>
              </div>
              <Img class="hover-shadow" sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.featured_media.title} />
            </div>
          ))}
        </BlogGrid>
        {data.allWordpressWpSpaceImage.edges.map((post, i) => (
          <CustomModal 
            id={"modal_" + i}
            className= {i === this.state.activeModal ? "active" : "inactive"}
            isOpen={i === this.state.activeModal ? true : false}
            data-sal="zoom-in"
            data-sal-duration="1000"
            data-sal-easing="ease"
            >
            <ModalContent>
              <button onClick={() => this.handleCloseModal()} class={"close"} aria-label="Close">×</button>
              <button onClick={() => this.prevModal(i)} class={"prev-arrow"} aria-label="Prev"></button>
              <button onClick={() => this.nextModal(i)} class={"next-arrow"} aria-label="Next"></button>
              <Img class="modal-image" sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.featured_media.title} />
            </ModalContent>
          </CustomModal>
        ))}
      </BlogLayout>
    );
  }
}

  const BlogGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #000;
    .top-content {
        width: 100%;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        h1 {
            font-family: "Helvetica Thin";
            z-index: 1;
            font-size: 40px;
            letter-spacing: 2px;
            font-weight: 100;
            color: rgb(255,255,255);
            line-height: 1.3;
            margin-bottom: 0px;
            margin-right: -70px;
            padding: 0 20px;
            text-align: center;
            span {
              font-family: BonVivant;
              font-weight: 100;
              font-size: 80px;
              position: relative;
              left: 0px;
              top: 0px;
            }
          }
        .gatsby-image-wrapper {
            max-width: 150px;
            width: 100%;
        }
    }
    .top-menu {
      width: 100%;
      padding: 0 20px;
      margin-bottom: 30px;
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 0;
        li {
          padding: 0 20px;
          a {
            font-family: "Helvetica Thin";
            color: rgb(41, 143, 194);
            font-size: 24px;
            letter-spacing: 3px;
            line-height: 1.3;
            text-align: center;
            text-transform: uppercase;
            text-decoration: none;
          }
        }
      }
    }
    .column {
      width: 20%;
      height: 300px;
      position: relative;
      .space-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgb(0 86 140 / 70%);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition-duration: .3s;
        z-index: 1;
        h3 {
          width: 100%;
          text-align: center;
          font-family: 'Helvetica Thin';
          font-weight: 300;
          font-size: 28px;
          color: #fff;
          text-transform: uppercase;
          line-height: 1.2;
        }
        button {
          display: block;
          margin: 0 auto;
          font-family: 'BonVivant';
          font-size: 24px;
          line-height: 1.5;
          padding: 8px 20px;
          padding-top: 0;
          border: 1px solid #fff;
          border-radius: 5px;
          background: rgb(104 123 160 / 80%);
          color: #fff;
          &:hover {
            cursor: pointer;
          }
        }
      }
      .gatsby-image-wrapper {
        height: 300px;
        width: 100%;
        img {
          height: 300px;
          width: 100%;
          object-fit: cover;
        }
      }
      &:hover {
        .space-overlay {
          opacity: 1;
        }
      }
    }
    @media(max-width:1200px) {
      .column {
        width: 25%;
      }
    }
    @media(max-width:960px) {
      .top-content {
        h1 {
          span {
            font-size: 60px;
          }
        }
        .gatsby-image-wrapper {
          max-width: 100px;
        }
      }
      .column {
        width: 33.33%;
      }
    }
    @media(max-width:767px) {
      .column {
        width: 50%;
      }
    }
    @media(max-width:500px) {
      .top-content {
        h1 {
          span {
            font-size: 40px;
          }
        }
        .gatsby-image-wrapper {
          max-width: 80px;
        }
      }
      .top-menu {
        ul {
          li {
            a {
              font-size: 16px;
            }
          }
        }
      }
      .column {
        width: 100%;
      }
    }
  `

  const CustomModal = styled(Modal)`
    position: fixed;
    z-index: 1;
    padding: 20px;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.8);
`

const ModalContent = styled.div`
    position: relative;
    background-color: #000;
    margin: auto;
    padding: 0px;
    width: 70%;
    max-width: 800px;
    .close {
      font-family: "Helvetica Thin";
      line-height: 28px;
      color: #fff;
      font-size: 28px;
      font-weight: bold;
      position: absolute;
      top: 0px;
      right: 10px;
      background: transparent;
      border: none;
      outline: 0;
      padding: 0;
      z-index: 1;
      &:hover {
        cursor: pointer;
        color: #000;
      }
    }
    .prev-arrow {
      position: absolute;
      top: calc(50% - 25px);
      left: 15px;
      height: 50px;
      width: 50px;
      z-index: 1;
      padding: 0;
      background-color: transparent;
      border: none;
      border-top: 2px solid #fff;
      border-left: 2px solid #fff;
      transform: rotate(-45deg);
      &:hover {
        cursor: pointer;
        border-color: #000;
      }
    }
    .next-arrow {
      position: absolute;
      top: calc(50% - 25px);
      right: 15px;
      height: 50px;
      width: 50px;
      z-index: 1;
      padding: 0;
      background-color: transparent;
      border: none;
      border-top: 2px solid #fff;
      border-right: 2px solid #fff;
      transform: rotate(45deg);
      &:hover {
        cursor: pointer;
        border-color: #000;
      }
    }
    @media(max-width:767px) {
      width: 100%;
      .prev-arrow {
        top: calc(50% - 15px);
        height: 30px;
        width: 30px;
      }
      .next-arrow {
        top: calc(50% - 15px);
        height: 30px;
        width: 30px;
      }
    }
`
 
  export default props => (
    <StaticQuery
      query={graphql`
        query {
          allWordpressWpSpaceImage(filter: {categories: {elemMatch: {wordpress_id: {eq: 98}}}}) {
            edges {
              node {
                title
                featured_media {
                  localFile {
                    childImageSharp {
                      sizes(maxWidth: 1200) {
                          ...GatsbyImageSharpSizes
                        }
                    }
                  }
                }
              }
            }
          }
          allWordpressWpCustomPage(filter: {wordpress_id: {eq: 1713}}) {
            edges {
              node {
                featured_media {
                  localFile {
                      childImageSharp {
                          sizes(maxWidth: 2000) {
                              ...GatsbyImageSharpSizes
                          }
                      }
                  }
                }
                acf {
                  meta_title
                  meta_description
                  location_tag_image {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 600) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => <ExploreAtlantaPage data={data} {...props} />}
    />
  );