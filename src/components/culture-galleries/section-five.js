import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

class SectionFive extends Component {

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
            <SectionFiveMain className={active ? "lightbox-active" : ""}>
                <div
                class="section-grid"
                >
                    {data.wordpressWpCustomPage.acf.cv2_s5_gallery.map((imgSrc, i) => {
                        return(
                        <GalleryImage id={"GalleryS5Image_" + i} onClick={() => this.handleClick(i)}>
                            <Img sizes={imgSrc.localFile.childImageSharp.sizes} alt={imgSrc.title} />
                        </GalleryImage>
                        )
                    })}
                    <div class="section-content">
                        <div dangerouslySetInnerHTML={{ __html: data.wordpressWpCustomPage.acf.cv2_s5_testimonial }} />
                        <Img fluid={data.reviewLogo.childImageSharp.fixed} />
                    </div>
                    <div class="section-video" onClick={() => this.handleClick(99)}>
                        <Img sizes={data.wordpressWpCustomPage.acf.cv2_s5_video_thumb.localFile.childImageSharp.sizes} alt={data.wordpressWpCustomPage.acf.cv2_s5_video_thumb.title} />
                    </div>
                    <div class="main-lightbox">
                        <button class="close-lightbox" onClick={this.closeLightbox}/>
                        {data.wordpressWpCustomPage.acf.cv2_s5_gallery.map((imgSrc, i) => {
                            return(
                            <LightboxImage id={"LightboxS5Image_" + i} className= {i === this.state.activeImage ? "active-image" : "inactive-image"}>
                                <Img sizes={imgSrc.localFile.childImageSharp.sizes} alt={imgSrc.title} />
                            </LightboxImage>
                            )
                        })}
                        <VideoLightbox className= {99 === this.state.activeImage ? "active-image" : "inactive-image"}>
                            <div dangerouslySetInnerHTML={{ __html: data.wordpressWpCustomPage.acf.cv2_s5_video }} />
                        </VideoLightbox>
                    </div>
                </div>
            </SectionFiveMain>
        )
    }
}


const SectionFiveMain = styled.section`
    padding-top: 0px;
    > div.section-grid {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        transition-duration: .3s;
        .section-content {
            grid-area: 6 / 4 / 9 / 5;
            padding: 30px;
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
                font-size: 20px;
                line-height: 1.3;
                width: 100%;
                text-align: center;
            }
        }
        .section-video {
            grid-area: 1 / 4 / 6 / 5;
            filter: grayscale(1);
            transition-duration: .3s;
            &:hover {
                filter: grayscale(0);
                cursor: pointer;
            }
            .gatsby-image-wrapper {
                height: 100%;
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
    @media(max-width:900px) {
        > div.section-grid {
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
            .section-content {
                grid-area: 5 / 1 / 7 / 3
            }
            .section-video {
                grid-area: 1 / 4 / 3 / 5;
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
                order: 9;
            }
            .section-video {
                height: 250px;
                width: 50%;
                order: 2;
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
    &#GalleryS5Image_0 {
        grid-area: 1 / 2 / 5 / 4;
    }
    &#GalleryS5Image_1 {
        grid-area: 1 / 1 / 6 / 2;
    }
    &#GalleryS5Image_2 {
        grid-area: 5 / 2 / 8 / 3;
    }
    &#GalleryS5Image_3 {
        grid-area: 6 / 1 / 11 / 2;
    }
    &#GalleryS5Image_4 {
        grid-area: 8 / 2 / 11 / 3;
    }
    &#GalleryS5Image_5 {
        grid-area: 5 / 3 / 11 / 4;
    }
    &#GalleryS5Image_6 {
        grid-area: 9 / 4 / 11 / 5;
    }
    &:hover {
        cursor: pointer;
        filter: grayscale(0);
    }
    @media(max-width:900px) {
        &#GalleryS5Image_0 {
            grid-area: 1 / 1 / 3 / 3;
        }
        &#GalleryS5Image_1 {
            grid-area: 1 / 3 / 4 / 4;
        }
        &#GalleryS5Image_2 {
            grid-area: 3 / 1 / 5 / 3;
        }
        &#GalleryS5Image_3 {
            grid-area: 4 / 3 / 6 / 4;
        }
        &#GalleryS5Image_4 {
            grid-area: 5 / 4 / 7 / 5;
        }
        &#GalleryS5Image_5 {
            grid-area: 3 / 4 / 5 / 5;
        }
        &#GalleryS5Image_6 {
            grid-area: 6 / 3 / 7 / 4;
        }
    }
    @media(max-width:767px) {
        height: 250px;
        &#GalleryS5Image_0 {
            width: 50%;
            order: 1;
        }
        &#GalleryS5Image_1 {
            width: 50%;
            order: 3;
        }
        &#GalleryS5Image_2 {
            width: 50%;
            order: 4;
        }
        &#GalleryS5Image_3 {
            width: 50%;
            order: 5;
        }
        &#GalleryS5Image_4 {
            width: 50%;
            order: 6;
        }
        &#GalleryS5Image_5 {
            width: 50%;
            order: 7;
        }
        &#GalleryS5Image_6 {
            width: 50%;
            order: 8;
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
                  cv2_s5_gallery {
                    title
                    localFile {
                      childImageSharp {
                        sizes(maxWidth: 1200) {
                            ...GatsbyImageSharpSizes
                        }
                      }
                    }
                  }
                  cv2_s5_testimonial
                  cv2_s5_video
                  cv2_s5_video_thumb {
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
      render={data => <SectionFive data={data} {...props} />}
    />
  );