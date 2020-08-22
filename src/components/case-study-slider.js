import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import Slider from "react-slick"

import './slick.css'
import './slick-theme.css'
import './slick-custom.css'

class SlickSlider extends Component {

  render() {

    const { data } = this.props; 

      const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
      return (
        <SliderContainer>
            <div 
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="600"
            data-sal-easing="ease"
            class="blue-block blue-block-1"></div>
            <div 
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="600"
            data-sal-easing="ease"
            class="blue-block blue-block-2"></div>
          <div
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-delay="1200"
          data-sal-easing="ease"
          >
          <Slider {...settings}>
            {data.allWordpressWpCaseStudy.edges.map(post => (
              <CaseStudy>
                <ImageThumb>
                    <CaseImg sizes={post.node.acf.thumbnail.localFile.childImageSharp.sizes} alt={post.node.title} />
                </ImageThumb>
                <Highlight dangerouslySetInnerHTML={{ __html: post.node.acf.highlight_content }} className={"sliderFade"}/>
                <Excerpt dangerouslySetInnerHTML={{ __html: post.node.acf.excerpt_content }} className={"sliderFade"}/>
              </CaseStudy>
            ))}          
          </Slider>
          </div>
        </SliderContainer>
      );
  }
}

const SliderContainer = styled.div`
    width: 100%;
    position: relative;
    .blue-block {
        background-color: #3582bd;
        position: absolute;
        width: 600px;
        height: 120px;
    }
    .blue-block-1 {
        top: -20px;
        left: calc(50% - 300px);
    }
    .blue-block-2 {
        bottom: -60px;
        right: 0;
    }
`

const CaseStudy = styled.div`
    outline: 0 !important;
    position: relative;
`

const ImageThumb = styled.div``

const CaseImg = styled(Img)`
    width: 650px;
`

const Highlight = styled.h3`
    font-family: "Helvetica Thin";
    font-size: 28px;
    color: #000;
    font-weight: 100;
    line-height: 1.2;
    letter-spacing: 1px;
    max-width: 24%;
    position: absolute;
    top: -10px;
    right: 13%;
    margin-bottom: 0;
    max-height: 100px;
    overflow: hidden;
    transition-delay: .6s;
`

const Excerpt = styled.div`
    transition-delay: .9s;
    p {
        font-family: "Helvetica Thin";
        font-size: 24px;
        color: #818686;
        font-weight: 100;
        line-height: 1.2;
        letter-spacing: 1px;
        max-width: 24%;
        position: absolute;
        top: 120px;
        right: 13%;
        margin-bottom: 0;
        max-height: 200px;
        overflow: hidden;
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpCaseStudy(sort: {fields: date, order: DESC}) {
                edges {
                    node {
                      title
                      acf {
                        thumbnail {
                          localFile {
                              childImageSharp {
                                  sizes(maxWidth: 1200) {
                                      ...GatsbyImageSharpSizes
                                  }
                              }
                          }
                        }
                        highlight_content
                        excerpt_content
                      }
                    }
                  }
            }
        }
      `}
      render={data => <SlickSlider data={data} {...props} />}
    />
  );