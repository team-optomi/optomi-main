import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import StartQuote from '../../images/quote-start.png'
import EndQuote from '../../images/quote-end.png'

class SectionSix extends Component {

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
            <SectionSixMain className={active ? "lightbox-active" : ""}>
                <div
                class="section-grid"
                >
                    {data.wordpressWpCustomPage.acf.cv2_s6_gallery.map((imgSrc, i) => {
                        return(
                        <GalleryImage id={"GalleryS6Image_" + i} onClick={() => this.handleClick(i)}>
                            <Img sizes={imgSrc.localFile.childImageSharp.sizes} alt={imgSrc.title} />
                        </GalleryImage>
                        )
                    })}
                    <div class="section-content">
                        <div dangerouslySetInnerHTML={{ __html: data.wordpressWpCustomPage.acf.cv2_s6_testimonial }} />
                        <Img fluid={data.reviewLogo.childImageSharp.fixed} />
                    </div>
                    <div class="main-lightbox">
                        <button class="close-lightbox" onClick={this.closeLightbox}/>
                        {data.wordpressWpCustomPage.acf.cv2_s6_gallery.map((imgSrc, i) => {
                            return(
                            <LightboxImage id={"LightboxS6Image_" + i} className= {i === this.state.activeImage ? "active-image" : "inactive-image"}>
                                <Img sizes={imgSrc.localFile.childImageSharp.sizes} alt={imgSrc.title} />
                            </LightboxImage>
                            )
                        })}
                    </div>
                </div>
            </SectionSixMain>
        )
    }
}


const SectionSixMain = styled.section`
    padding-top: 0px;
    > div.section-grid {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        transition-duration: .3s;
        .section-content {
            grid-area: 1 / 1 / 3 / 4;
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
                font-size: 24px;
                line-height: 1.3;
                max-width: 580px;
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
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
            .section-content {
                grid-area: 2 / 4 / 3 / 8;
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
                order: 7;
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
    &#GalleryS6Image_0 {
        grid-area: 1 / 4 / 5 / 6;
    }
    &#GalleryS6Image_1 {
        grid-area: 1 / 6 / 7 / 8;
    }
    &#GalleryS6Image_2 {
        grid-area: 5 / 4 / 8 / 6;
    }
    &#GalleryS6Image_3 {
        grid-area: 3 / 1 / 7 / 4;
    }
    &#GalleryS6Image_4 {
        grid-area: 7 / 1 / 10 / 4;
    }
    &#GalleryS6Image_5 {
        grid-area: 8 / 4 / 11 / 6;
    }
    &#GalleryS6Image_6 {
        grid-area: 7 / 6 / 12 / 8;
    }
    &#GalleryS6Image_7 {
        grid-area: 12 / 6 / 16 / 8;
    }
    &#GalleryS6Image_8 {
        grid-area: 11 / 4 / 16 / 6;
    }
    &#GalleryS6Image_9 {
        grid-area: 10 / 1 / 14 / 4;
    }
    &#GalleryS6Image_10 {
        grid-area: 14 / 1 / 16 / 4;
    }
    &:hover {
        cursor: pointer;
        filter: grayscale(0);
    }
    @media(max-width:900px) {
        &#GalleryS6Image_0 {
            grid-area: 1 / 1 / 2 / 4;
        }
        &#GalleryS6Image_1 {
            grid-area: 1 / 6 / 2 / 8;
        }
        &#GalleryS6Image_2 {
            grid-area: 2 / 1 / 3 / 4;
        }
        &#GalleryS6Image_3 {
            grid-area: 1 / 4 / 2 / 6;
        }
        &#GalleryS6Image_4 {
            grid-area: 3 / 1 / 4 / 5;
        }
        &#GalleryS6Image_5 {
            grid-area: 3 / 5 / 4 / 8;
        }
        &#GalleryS6Image_6 {
            grid-area: 4 / 1 / 5 / 3;
        }
        &#GalleryS6Image_7 {
            grid-area: 4 / 6 / 5 / 8;
        }
        &#GalleryS6Image_8 {
            grid-area: 4 / 3 / 5 / 6;
        }
        &#GalleryS6Image_9 {
            grid-area: 5 / 1 / 6 / 4;
        }
        &#GalleryS6Image_10 {
            grid-area: 5 / 4 / 6 / 8;
        }
    }
    @media(max-width:767px) {
        height: 200px;
        &#GalleryS6Image_0 {
            width: 50%;
            order: 1;
        }
        &#GalleryS6Image_1 {
            width: 50%;
            order: 2;
        }
        &#GalleryS6Image_2 {
            width: 50%;
            order: 3;
        }
        &#GalleryS6Image_3 {
            width: 50%;
            order: 4;
        }
        &#GalleryS6Image_4 {
            width: 50%;
            order: 5;
        }
        &#GalleryS6Image_5 {
            width: 50%;
            order: 6;
        }
        &#GalleryS6Image_6 {
            width: 50%;
            order: 8;
        }
        &#GalleryS6Image_7 {
            width: 50%;
            order: 9;
        }
        &#GalleryS6Image_8 {
            width: 50%;
            order: 10;
        }
        &#GalleryS6Image_9 {
            width: 50%;
            order: 11;
        }
        &#GalleryS6Image_10 {
            width: 100%;
            order: 12;
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
            reviewLogo: file(relativePath: { eq: "optomi-review.png" }) {
                childImageSharp {
                  fixed(width: 600, height: 70) {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
            wordpressWpCustomPage(wordpress_id: {eq: 2088}) {
                acf {
                  cv2_s6_gallery {
                    title
                    localFile {
                      childImageSharp {
                        sizes(maxWidth: 1200) {
                            ...GatsbyImageSharpSizes
                        }
                      }
                    }
                  }
                  cv2_s6_testimonial
                }
              }
        }
      `}
      render={data => <SectionSix data={data} {...props} />}
    />
  );