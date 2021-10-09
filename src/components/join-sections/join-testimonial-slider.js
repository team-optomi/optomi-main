import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import Slider from "react-slick"

const JoinTestimonialSlider = () => {

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    };

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpJoinTestimonial {
                edges {
                    node {
                        content
                        featured_media {
                            title
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 2000) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    return(
        
        <MainSection>

            <h2>WHAT PEOPLE ARE SAYING ABOUT <span>Optomi</span></h2>

            <SliderContainer className={"our-work-slider"}>
                <Slider {...settings}>
                    {data.allWordpressWpJoinTestimonial.edges.map(testimonial => (
                    <TestimonialSlide>
                        <div dangerouslySetInnerHTML={{ __html: testimonial.node.content }} />
                        <Img sizes={testimonial.node.featured_media.localFile.childImageSharp.sizes} alt={testimonial.node.featured_media.title} />
                    </TestimonialSlide> 
                    ))}
                </Slider>
            </SliderContainer>
                
        </MainSection>
    )

}

const MainSection = styled.section`
    position: relative;
    margin-bottom: 50px;
    h2 {
      font-family: "Helvetica Thin";
      width: 100%;
      z-index: 1;
      font-size: 40px;
      letter-spacing: 2px;
      font-weight: 100;
      color: rgb(255,255,255);
      line-height: 1.3;
      margin-bottom: 50px;
      padding: 0 20px;
      text-align: center;
      span {
        font-family: BonVivant;
        font-weight: 100;
        font-size: 120px;
        position: relative;
        left: -50px;
        top: 20px;
      }
    }
  @media(max-width:900px) {
    h2 {
      font-size: 28px;
      span {
        font-size: 72px;
        left: -12px;
      }
    }
  }
`

const TestimonialSlide = styled.div`
    padding: 0px 20px;
    position: relative;
    outline: 0;
    .gatsby-image-wrapper {
      height: 100%;
      max-width: 700px;
      margin-top: 30px;
      margin-left: auto;
    }
    p {
      font-family: "Helvetica Thin";
      width: 100%;
      z-index: 1;
      font-size: 44px;
      color: rgb(255,255,255);
      line-height: 1.3;
      margin-bottom: 0;
      text-align: center;
      span {
        font-family: BonVivant;
        font-weight: 100;
        color: #5ab3e8;
        font-size: 56px;
        line-height: 0;
      }
    }
    @media(max-width:900px) {
      p {
        font-size: 24px;
        span {
          40px;
        }
      }
    }
`

const SliderContainer = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    .slick-prev {
      height: 35px;
      width: 35px;
      border-top: 5px solid #fff;
      border-left: 5px solid #fff;
      color: transparent;
      z-index: 10;
      transform: rotate(-45deg);
      left: -100px;
      top: 40%;
      &:before,
      &:after {
        display: none;
      }
    }
    .slick-next {
      height: 35px;
      width: 35px;
      border-top: 5px solid #fff;
      border-right: 5px solid #fff;
      color: transparent;
      z-index: 10;
      transform: rotate(45deg);
      left: auto;
      right: -100px !important;
      top: 40%;
      &:before,
      &:after {
        display: none;
      }
    }
    .slick-slider {
      max-width: 1170px;
      width: 100%;
      margin: 0 auto;
      overflow: visible;
    }
    .slick-list{
      padding: 0;
      overflow: hidden;
    }
    .slick-slide {
      width: 100%;
      transition-duration: .3s;
      outline: 0 !important;
      &:not(.slick-active) {
        // &:hover {
        //   transform: translateY(-10px);
        //   cursor: pointer;
        // }
      }
      &.slick-active {
        ${TestimonialSlide} {
          .work-image-overlay {
            opacity: 1;
            h3 {
              opacity: 1;
              left: 0;
              visibility: visible;
            }
            a {
              opacity: 1;
              left: 0;
              visibility: visible;
            }
          }
        }
      }
    }
  @media(max-width: 1200px) {
    .slick-prev {
      left: 20px;
    }
    .slick-next {
      right: 20px !important;
    }
  }
  @media(max-width:767px) {
    height: 300px;
    .slick-slide {
      padding: 0 30px;
      &.slick-active {
        ${TestimonialSlide} {
          .work-image-overlay {
            opacity: 1;
            h3 {
              opacity: 1;
              left: 0;
            }
            a {
              opacity: 1;
              left: 0;
            }
          }
        }
      }
    }
  }
  @media(max-width:500px) {
    .slick-list{
      padding: 0 !important;
      overflow: visible;
    }
    .slick-prev {
      left: 10px;
    }
    .slick-next {
      right: 10px;
    }
  }  
`

export default JoinTestimonialSlider