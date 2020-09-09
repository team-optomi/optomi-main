import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import Modal from 'react-modal'

class LocationsSection extends Component {

    constructor(props) {
      super(props);
      this.state = { activeModal:99 };
    }
    
    handleOpenModal (index) {
        let num = index;
        this.setState({ activeModal: num });
    }
    
    handleCloseModal () {
        this.setState({ activeModal: 99 });
    }
    
    render () {
        const { data } = this.props; 

      return (
          <LocationsMain>
            {data.allWordpressWpLocation.edges.map((post, i) => (
            <div>

                <LocBackground
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >
                    <LocImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title}/>
                </LocBackground>

                <Location
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="600"
                data-sal-easing="ease"
                >
                    <div>
                      <button 
                      id={"selector_" + i}
                      onClick={() => this.handleOpenModal(i)}
                      aria-label="Open"
                      >
                          <h3>{post.node.title}</h3>
                          <div dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                      </button>
                    </div>
                </Location>
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
                    <iframe title="location map" src={post.node.acf.map_embed} width={"100%"} height={"650"} frameborder={"0"} style={{ border: "0" }} allowfullscreen={""} aria-hidden={"false"}></iframe>
                    </ModalContent>
                </CustomModal>
            </div>
            ))}
          </LocationsMain>
      );
    }
  }

const LocationsMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
      width: 100%;
      position: relative;
      &:first-child {
        h3, p {
          color: #000;
        }
      }
      &:nth-child(2) {
        button {
          margin-left: auto;
        }
      }
      &:nth-child(3) {
        button {
          margin-left: auto;
          margin-right: auto;
        }
      }
      &:nth-child(5) {
        h3, p {
          color: #000;
        }
        button {
          margin-left: auto;
        }
      }
      &:nth-child(7) {
        button {
          margin-left: auto;
        }
      }
  }
`

const LocBackground = styled.div`
    position: relative;
`

const LocImg = styled(Img)`
`

const Location = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  > div {
    max-width: 1340px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    display: flex;
  }
  button {
      background: transparent;
      border: none;
      outline: 0;
      text-align: left;
      margin-top: 100px;
      max-width: 350px;
      width: 100%;
      h3 {
        font-family: "Helvetica Thin";
        font-size: 50px;
        color: #fff;
        letter-spacing: 5px;
        line-height: 28px;
        transition-duration: .3s;
        margin-bottom: 10px;
      }
      p {
        font-family: "Helvetica Thin";
        font-size: 14px;
        color: #fff;
        letter-spacing: 1px;
        line-height: 1.2;
        transition-duration: .3s;
        margin-bottom: 0;
      }
      &:hover {
        cursor: pointer;
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
    background-color: rgba(0,0,0,0.4);
`

const ModalContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    padding-bottom: 40px;
    border: 1px solid #888;
    max-width: 1440px;
    width: 100%;
    position: relative;
    border-radius: 20px;
    .close {
        font-family: "Raleway Bold";
            line-height: 28px;
            color: #aaaaaa;
            font-size: 28px;
            font-weight: bold;
            position: absolute;
            bottom: 20px;
            right: 20px;
            background: transparent;
            border: none;
            outline: 0;
            padding: 0;
            &:hover {
                cursor: pointer;
                color: #000;
            }
    }
    @media(max-width:767px) {
      iframe {
        height: 400px;
      }
    }
`
  
  export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpLocation {
                edges {
                    node {
                        title
                        content
                        featured_media {
                          localFile {
                              childImageSharp {
                                  sizes(maxWidth: 2800) {
                                      ...GatsbyImageSharpSizes
                                  }
                              }
                          }
                      }
                        acf {
                            map_embed
                        }
                    }
                }
            }
        }
      `}
      render={data => <LocationsSection data={data} {...props} />}
    />
  );