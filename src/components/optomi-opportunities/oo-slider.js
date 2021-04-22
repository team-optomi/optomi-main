import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Slider from "react-slick"
import Img from "gatsby-image"

import OOSlideVideo from "../../components/optomi-opportunities/oo-slide-video"

class OOSlider extends Component {

    render() {

        const { data } = this.props; 
    
          const settings = {
            arrows: true,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

          return (
            <SliderContainer className={"oo-slider"}>
              <div
              data-sal="fade"
              data-sal-duration="1000"
              data-sal-delay="1200"
              data-sal-easing="ease"
              >
              
                {data.allWordpressWpCustomPage.edges.map(post => (
                <Slider {...settings}>
                  <GivingSlide>
                      <ImageBackground>
                          <BackgroundImg sizes={post.node.acf.hero_slider.slide_one_image.localFile.childImageSharp.sizes} alt={"slide-one"} />
                      </ImageBackground>

                      <SlideContent>
                          <SlideCopy dangerouslySetInnerHTML={{ __html: post.node.acf.hero_slider.slide_one_copy }} className={"sliderFade"}/>
                      </SlideContent>
                      
                  </GivingSlide>
                  <GivingSlide>

                    <ImageBackground>
                      <OOSlideVideo/>
                      </ImageBackground>

                      <SlideContent>
                          <SlideCopy dangerouslySetInnerHTML={{ __html: post.node.acf.hero_slider.slide_two_copy }} />
                      </SlideContent>
                  
                    </GivingSlide>
                    <GivingSlide>

                    <ImageBackground>
                          <BackgroundImg sizes={post.node.acf.hero_slider.slide_three_image.localFile.childImageSharp.sizes} alt={"slide-one"} />
                      </ImageBackground>

                      <SlideContent>
                          <SlideCopy dangerouslySetInnerHTML={{ __html: post.node.acf.hero_slider.slide_three_copy }} />
                      </SlideContent>
                    
                </GivingSlide>
                <GivingSlide>

                <ImageBackground>
                    <BackgroundImg sizes={post.node.acf.hero_slider.slide_four_image.localFile.childImageSharp.sizes} alt={"slide-one"} />
                </ImageBackground>

                <SlideContent>
                    <SlideCopy dangerouslySetInnerHTML={{ __html: post.node.acf.hero_slider.slide_four_copy }} />
                </SlideContent>
                
            </GivingSlide>
            </Slider>
                ))}          
              </div>
            </SliderContainer>
          );
      }
}

const SliderContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`

const GivingSlide = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, .7);
    z-index: 2;
  }
`

const ImageBackground = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
`

const BackgroundImg = styled(Img)`
  position: relative;;
  height: 100vh;
  width: 100%;
`

const SlideContent = styled.div`
  position: relative;
  max-width: 1140px;
  width: 100%;
  padding-left: 120px;
  padding-right: 120px;
  text-align: center;
  z-index: 3;
  h1 {
    font-family: 'Raleway', sans-serif;
    color: #fff;
    font-size: 32px;
    line-height: 35px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0px;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  @media(max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

const SlideCopy = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  transition-duration: .6s;
  p {
    font-family: 'Raleway', sans-serif;
    color: #fff;
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 0px;
  }
  a {
    font-family: 'Raleway', sans-serif;
    color: #fff;
    font-size: 20px;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 0px;
  }
  @media(max-width:768px) {
    max-width: 500px;
    padding: 0 10px;
  }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 47}}}}) {
                edges {
                    node {
                        acf {
                            hero_slider {
                                slide_one_image {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 1920) {
                                            ...GatsbyImageSharpSizes
                                          }
                                      }
                                    }
                                  }
                                slide_one_copy
                                slide_two_copy
                                slide_three_image {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 1920) {
                                            ...GatsbyImageSharpSizes
                                          }
                                      }
                                    }
                                  }
                                slide_three_copy
                                slide_four_image {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 1920) {
                                            ...GatsbyImageSharpSizes
                                          }
                                      }
                                    }
                                  }
                                slide_four_copy
                            }
                        }
                    }
                }
            }
        }
      `}
      render={data => <OOSlider data={data} {...props} />}
    />
  );