import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import Slider from "react-slick"

const JoinSectionThree = () => {

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        focusOnSelect: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    focusOnSelect: false,
                    centerMode: false,
                }
            }
        ]
    };

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpJoinSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 93}}}}) {
                edges {
                    node {
                        acf {
                            join_three_slider_gallery {
                                title
                                localFile {
                                    childImageSharp {
                                        fluid(maxWidth: 770, quality: 100) {
                                            ...GatsbyImageSharpFluid_withWebp
                                        }
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
        
        data.allWordpressWpJoinSection.edges.map(post => (
            <MainSection>

                <SliderContainer className={"our-work-slider"}>
                    <Slider {...settings}>
                        {post.node.acf.join_three_slider_gallery.map(imgsrc => (
                        <OurWorkSlide>
                            <div class="work-image-bg">
                                <Img fluid={imgsrc.localFile.childImageSharp.fluid} alt={imgsrc.title} />
                            </div>
                        </OurWorkSlide> 
                        ))}
                    </Slider>
                </SliderContainer>
                    
            </MainSection>
        ))
    )

}

const MainSection = styled.section`
    position: relative;
`

const OurWorkSlide = styled.div`
    padding: 0px;
    position: relative;
    outline: 0;
    .work-image-bg {
      height: 450px;
      width: 100%;
      .gatsby-image-wrapper {
        height: 100%;
      }
    }
    @media(max-width:767px) {
      .work-image-bg {
        height: 350px;
      }
    }  
    @media(max-width:500px) {
      .work-image-bg {
        height: 250px;
      }
    } 
`

const SliderContainer = styled.div`
    width: 100%;
    max-width: 100%;
    height: 450px;
    margin: 0 auto;
    .slick-prev {
      height: 35px;
      width: 35px;
      border-top: 8px solid #fff;
      border-left: 8px solid #fff;
      color: transparent;
      z-index: 10;
      transform: rotate(-45deg);
      left: -40%;
      top: 50%;
      &:before,
      &:after {
        display: none;
      }
    }
    .slick-next {
      height: 35px;
      width: 35px;
      border-top: 8px solid #fff;
      border-right: 8px solid #fff;
      color: transparent;
      z-index: 10;
      transform: rotate(45deg);
      left: auto;
      right: -40% !important;
      top: 50%;
      &:before,
      &:after {
        display: none;
      }
    }
    .slick-slider {
      max-width: 770px;
      width: 100%;
      margin: 0 auto;
      overflow: visible;
    }
    .slick-list{
      padding: 0;
      overflow: visible;
    }
    .slick-slide {
        height: 450px;
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
        ${OurWorkSlide} {
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
  @media(max-width:767px) {
    height: 300px;
    .slick-slide {
      &.slick-active {
        ${OurWorkSlide} {
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

export default JoinSectionThree