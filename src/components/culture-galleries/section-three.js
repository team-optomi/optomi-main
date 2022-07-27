import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import StartQuote from '../../images/quote-start.png'
import EndQuote from '../../images/quote-end.png'

class SectionThree extends Component {

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
            <SectionThreeMain className={active ? "lightbox-active" : ""}>
                <div
                class="section-grid"
                >
                    {data.wordpressWpCustomPage.acf.cv2_s3_gallery.map((imgSrc, i) => {
                        return(
                        <GalleryImage id={"GalleryS3Image_" + i} onClick={() => this.handleClick(i)}>
                            <Img sizes={imgSrc.localFile.childImageSharp.sizes} alt={imgSrc.title} />
                        </GalleryImage>
                        )
                    })}
                    <div class="section-content">
                        <div dangerouslySetInnerHTML={{ __html: data.wordpressWpCustomPage.acf.cv2_s3_testimonial }} />
                        <Img fluid={data.reviewLogo.childImageSharp.fixed} />
                    </div>
                    <div class="video-thumbnail" onClick={() => this.handleClick(99)}>
                        <Img sizes={data.wordpressWpCustomPage.acf.cv2_s3_video_thumb.localFile.childImageSharp.sizes} alt={data.wordpressWpCustomPage.acf.cv2_s3_video_thumb.title} />
                    </div>
                    <div class="main-lightbox">
                        <button class="close-lightbox" onClick={this.closeLightbox}/>
                        {data.wordpressWpCustomPage.acf.cv2_s3_gallery.map((imgSrc, i) => {
                            return(
                            <LightboxImage id={"LightboxS3Image_" + i} className= {i === this.state.activeImage ? "active-image" : "inactive-image"}>
                                <Img sizes={imgSrc.localFile.childImageSharp.sizes} alt={imgSrc.title} />
                            </LightboxImage>
                            )
                        })}
                        <VideoLightbox className= {99 === this.state.activeImage ? "active-image" : "inactive-image"}>
                            <div dangerouslySetInnerHTML={{ __html: data.wordpressWpCustomPage.acf.cv2_s3_video }} />
                        </VideoLightbox>
                    </div>
                </div>
            </SectionThreeMain>
        )
    }
}


const SectionThreeMain = styled.section`
    padding-top: 0px;
    > div.section-grid {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        transition-duration: .3s;
        .section-content {
            grid-area: 2 / 5 / 3 / 8;
            padding: 30px;
            padding-bottom: 130px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .gatsby-image-wrapper {
                max-width: 400px;
                width: 100%;
                height: 47px;
                margin: 0 auto;
                img {
                    object-fit: contain !important;
                }
            }
            p {
                color: #fff;
                font-family: "Helvetica Thin";
                font-size: 24px;
                line-height: 1.3;
                max-width: 440px;
                width: 100%;
                margin-left: auto;
                margin-right: auto;
                text-align: center;
                position: relative;
                span.fancy {
                    font-family: BonVivant;
                    color: rgb(41, 143, 194);
                    font-weight: 100;
                    font-size: 32px;
                    line-height: 0;
                    position: relative;
                    bottom: 2px;
                }
                &:before {
                    content: '';
                    position: absolute;
                    width: 18px;
                    height: 13px;
                    top: 0;
                    left: -15px;
                    background-image: url(${StartQuote});
                }
                &:after {
                    content: '';
                    position: absolute;
                    width: 18px;
                    height: 13px;
                    top: 0;
                    right: -15px;
                    background-image: url(${EndQuote});
                }
            }
        }
        .video-thumbnail {
            grid-area: 1 / 1 / 3 / 3;
            filter: grayscale(1);
            transition-duration: .3s;
            .gatsby-image-wrapper {
                height: 100%;
            }
            &:hover {
                filter: grayscale(0);
                cursor: pointer;
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
                width: 100%;
                order: 5;
            }
            .video-thumbnail {
                width: 50%;
                height: 200px;
                order: 4;
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
    &#GalleryS3Image_0 {
        grid-area: 1 / 5 / 2 / 8;
    }
    &#GalleryS3Image_1 {
        grid-area: 1 / 3 / 2 / 5;
    }
    &#GalleryS3Image_2 {
        grid-area: 2 / 3 / 3 / 5;
    }
    &:hover {
        cursor: pointer;
        filter: grayscale(0);
    }
    @media(max-width:767px) {
        height: 200px;
        &#GalleryS3Image_0 {
            width: 50%;
            order: 1;
        }
        &#GalleryS3Image_1 {
            width: 50%;
            order: 2;
        }
        &#GalleryS3Image_2 {
            width: 50%;
            order: 3;
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

const VideoLightbox = styled.div`
    display: none;
    visibility: hidden;
    opacity: 0;
    height: 0;
    width: 0;
    z-index: -1;
    transition-duration: .3s;
    .wp-video {
        max-width: 1000px;
        width: 100% !important;
        background-color: #000;
        video {
            width: 100%;
            height: 420px;
        }
    }
    &.active-image {
        display: block;
        height: 100vh;
        width: 1000px;
        z-index: 1010;
        visibility: visible;
        opacity: 1;
    }
    @media(max-width:767px) {

    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            reviewLogo: file(relativePath: { eq: "optomi-review.png" }) {
                childImageSharp {
                  fixed(width: 600, height: 70) {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
            wordpressWpCustomPage(wordpress_id: {eq: 2088}) {
                acf {
                  cv2_s3_gallery {
                    title
                    localFile {
                      childImageSharp {
                        sizes(maxWidth: 1200) {
                            ...GatsbyImageSharpSizes
                        }
                      }
                    }
                  }
                  cv2_s3_testimonial
                  cv2_s3_video
                  cv2_s3_video_thumb {
                    title
                    localFile {
                      childImageSharp {
                        sizes(maxWidth: 500) {
                            ...GatsbyImageSharpSizes
                        }
                      }
                    }
                  }
                }
              }
        }
      `}
      render={data => <SectionThree data={data} {...props} />}
    />
  );