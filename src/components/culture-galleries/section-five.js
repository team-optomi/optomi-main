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
                    </div>
                    <div class="section-video">
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
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px;
            .gatsby-image-wrapper {
                max-width: 500px;
                width: 100%;
            }
            p {
                color: #fff;
                font-family: "Helvetica Thin";
                font-size: 14px;
                line-height: 1.3;
            }
        }
        .section-video {
            grid-area: 1 / 4 / 6 / 5;
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
    @media(max-width:767px) {
        > div {
            .main-lightbox {
                padding: 100px 20px;
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
    @media(max-width:767px) {
        width: 50%;
    }
    @media(max-width:500px) {
        width: 100%;
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