import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

class SectionOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
          active: false,
          activeImage: -1
        };
      }

    handleClick(index) {
        let num = index;
        this.setState({ 
            active: true,
            activeImage: num 
        });
    };

    closeLightbox = () => {
        this.setState({ 
            active: false,
            activeImage: -1
        });
    };

    render() {

        const { active } = this.state;
        const { data } = this.props; 

        return(
            <SectionOneMain className={active ? "lightbox-active" : ""}>
                <div
                class="section-grid"
                >
                    {data.wordpressWpCustomPage.acf.cv2_s1_gallery.map((imgSrc, i) => {
                        return(
                        <GalleryImage id={"GalleryImage_" + i} onClick={() => this.handleClick(i)}>
                            <Img sizes={imgSrc.localFile.childImageSharp.sizes} alt={imgSrc.title} />
                        </GalleryImage>
                        )
                    })}
                    <div class="section-content">
                        <Img sizes={data.wordpressWpCustomPage.acf.be_the_best.localFile.childImageSharp.sizes} alt={data.wordpressWpCustomPage.acf.be_the_best.title} />
                        <div dangerouslySetInnerHTML={{ __html: data.wordpressWpCustomPage.acf.cv2_s1_content }} />
                    </div>
                    <div class="main-lightbox">
                        <button class="close-lightbox" onClick={this.closeLightbox}/>
                        {data.wordpressWpCustomPage.acf.cv2_s1_gallery.map((imgSrc, i) => {
                            return(
                            <LightboxImage id={"LightboxImage_" + i} className= {i === this.state.activeImage ? "active-image" : "inactive-image"}>
                                <Img sizes={imgSrc.localFile.childImageSharp.sizes} alt={imgSrc.title} />
                            </LightboxImage>
                            )
                        })}
                    </div>
                </div>
            </SectionOneMain>
        )
    }
}


const SectionOneMain = styled.section`
    padding-top: 250px;
    > div.section-grid {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        transition-duration: .3s;
        .section-content {
            grid-area: 2 / 3 / 3 / 6;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px;
            .gatsby-image-wrapper {
                max-width: 500px;
                width: 100%;
                img {
                    object-fit: contain !important;
                }
            }
            > div:last-child {
                width: 50%;
            }
            p {
                color: #fff;
                font-family: "Helvetica Thin";
                font-size: 14px;
                line-height: 1.3;
            }
        }
        .main-lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: -1;
            overflow-y: scroll;
            background-color: rgba(0,0,0,.0);
            transition-duration: .3s;
            visibility: hidden;
            opacity: 0;
            display: flex;
            justify-content: center;
            padding: 100px;
        }
        button.close-lightbox {
            position: absolute;
            top: 30px;
            right: 30px;
            visibility: hidden;
            opacity: 0;
            height: 40px;
            width: 40px;
            background-color: transparent;
            border: none;
            transition-duration: .3s;
            &:hover {
                cursor: pointer;
            }
            &:before {
                content: '';
                position: absolute;
                top: 15px;
                right: 0;
                width: 45px;
                height: 5px;
                background-color: #fff;
                transform: rotate(45deg);
            }
            &:after {
                content: '';
                position: absolute;
                top: 15px;
                right: 0;
                width: 45px;
                height: 5px;
                background-color: #fff;
                transform: rotate(-45deg);
            }
        }
    }
    &.lightbox-active {
        > div { 
            .main-lightbox {
                z-index: 1001;
                background-color: rgba(0,0,0,.7);
                visibility: visible;
                opacity: 1;
            }
            button.close-lightbox {
                visibility: visible;
                opacity: .6;
                z-index: 1010;
                &:hover {
                    opacity: .9;
                }
            }
        }
    }
    @media(max-width:1100px) {
        > div.section-grid {
            grid-template-rows: 1fr 1fr 1fr;
            .section-content {
                grid-area: 3 / 1 / 4 / 6;
            }
        }
    }
    @media(max-width:850px) {
        padding-top: 0px;
    }
    @media(max-width:767px) {
        > div {
            .main-lightbox {
                padding: 100px 20px !important;
            }
        }
        > div.section-grid {
            display: flex;
            flex-wrap: wrap;
            .section-content {
                display: flex;
                flex-wrap: wrap;
                > div:last-child {
                    width: 100%;
                }
            }
        }
    }
`

const GalleryImage = styled.div`
    height: 100%;
    transition-duration: .3s;
    position: relative;
    filter: grayscale(1);
    .gatsby-image-wrapper {
        height: 100%;
    }
    &#GalleryImage_0 {
        grid-area: 1 / 1 / 2 / 2;
    }
    &#GalleryImage_1 {
        grid-area: 1 / 2 / 2 / 3;
    }
    &#GalleryImage_2 {
        grid-area: 1 / 3 / 2 / 5;
    }
    &#GalleryImage_3 {
        grid-area: 1 / 5 / 2 / 6;
    }
    &#GalleryImage_4 {
        grid-area: 2 / 1 / 3 / 3;
    }
    &:hover {
        cursor: pointer;
        filter: grayscale(0);
    }
    @media(max-width:1100px) {
        &#GalleryImage_0 {
            grid-area: 1 / 1 / 2 / 3;
        }
        &#GalleryImage_1 {
            grid-area: 1 / 3 / 2 / 5;
        }
        &#GalleryImage_2 {
            grid-area: 2 / 1 / 3 / 4;
        }
        &#GalleryImage_3 {
            grid-area: 1 / 5 / 2 / 6;
        }
        &#GalleryImage_4 {
            grid-area: 2 / 4 / 3 / 6;
        }
    }
    @media(max-width:767px) {
        height: 200px;
        &#GalleryImage_0 {
            width: 50%;
        }
        &#GalleryImage_1 {
            width: 50%;
        }
        &#GalleryImage_2 {
            width: 50%;
        }
        &#GalleryImage_3 {
            width: 50%;
        }
        &#GalleryImage_4 {
            width: 100%;
        }
    }
`

const LightboxImage = styled.div`
    display: none;
    visibility: hidden;
    opacity: 0;
    height: 0;
    width: 0;
    z-index: -1;
    transition-duration: .3s;
    &.active-image {
        display: block;
        height: 100vh;
        width: 1000px;
        z-index: 1010;
        visibility: visible;
        opacity: 1;
    }
`


export default props => (
    <StaticQuery
      query={graphql`
        query {
            wordpressWpCustomPage(wordpress_id: {eq: 2088}) {
                acf {
                  cv2_s1_gallery {
                    title
                    localFile {
                      childImageSharp {
                        sizes(maxWidth: 1200) {
                            ...GatsbyImageSharpSizes
                        }
                      }
                    }
                  }
                  be_the_best {
                    title
                    localFile {
                      childImageSharp {
                        sizes(maxWidth: 1740) {
                            ...GatsbyImageSharpSizes
                        }
                      }
                    }
                  }
                  cv2_s1_content
                }
              }
        }
      `}
      render={data => <SectionOne data={data} {...props} />}
    />
  );