import React, { Component } from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Slider from "react-slick"
import Img from "gatsby-image"

class GivingSlider extends Component {

    render() {

        const { data } = this.props; 
    
          const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        
          return (
            <SliderContainer className={"giving-slider"}>
              <div
              data-sal="fade"
              data-sal-duration="1000"
              data-sal-delay="1200"
              data-sal-easing="ease"
              >
              <Slider {...settings}>
                {data.allWordpressWpGivingSlides.edges.map(post => (
                  <GivingSlide>

                      <ImageBackground>
                          <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                      </ImageBackground>

                      <SlideContent>
                          <SlideLogo sizes={post.node.acf.slide_logo.localFile.childImageSharp.sizes}/>
                          <SlideCopy dangerouslySetInnerHTML={{ __html: post.node.content }} />
                          <SlideLink
                            to={post.node.acf.button_link}
                          >
                              Learn More
                          </SlideLink>
                      </SlideContent>
                      
                  </GivingSlide>
                ))}          
              </Slider>
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
  @media(max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

const SlideLogo = styled(Img)`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
`

const SlideCopy = styled.div`
  max-width: 660px;
  width: 100%;
  margin: 0 auto;
  p {
    font-family: "Helvetica Thin";
    color: #fff;
    font-size: 24px;
    line-height: 1.3;
    text-align: center;
    @media(max-width:768px) {
      font-size: 20px;
    }
  }
`

const SlideLink = styled(Link)`
  font-family: "Helvetica Thin";  
  background-color: #298fc2;
  color: #fff;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px 35px;
  border-radius: 35px;
  display: inline-block;
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpGivingSlides(sort: {fields: date, order: DESC}) {
                edges {
                    node {
                      content
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
                        slide_logo {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 810) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                        button_link
                      }
                    }
                  }
            }
        }
      `}
      render={data => <GivingSlider data={data} {...props} />}
    />
  );