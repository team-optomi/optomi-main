import React, { Component } from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
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
              <Link
                to="/case-studies/"
              >
                <CaseStudy>
                <ImageThumb>
                    <CaseImg sizes={post.node.acf.thumbnail.localFile.childImageSharp.sizes} alt={post.node.title} />
                </ImageThumb>
                <Highlight dangerouslySetInnerHTML={{ __html: post.node.acf.highlight_content }} className={"sliderFade"}/>
                <Excerpt dangerouslySetInnerHTML={{ __html: post.node.acf.excerpt_content }} className={"sliderFade"}/>
              </CaseStudy>
              </Link>
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
        background-color: #298fc2;
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
    a {
      text-decoration: none;
    }
    @media(max-width:1550px) {
      .blue-block {
        width: 500px;
      }
      .blue-block-1 {
        left: calc(65% - 250px);
      }
      .blue-block-2 {
        right: -140px;
      }
    }
    @media(max-width:1330px) {
      .blue-block {
        width: 400px;
      }
      .blue-block-1 {
        left: calc(65% - 200px);
      }
    }
    @media(max-width:1150px) {
      .blue-block-1 {
        left: auto;
        right: 0;
      }
      .blue-block-2 {
        display: none;
      }
    }
    @media(max-width:940px) {
      .blue-block-1 {
        right: -100px;
      }
    }
`

const CaseStudy = styled.div`
    outline: 0 !important;
    position: relative;
`

const ImageThumb = styled.div``

const CaseImg = styled(Img)`
    width: 650px;
    @media(max-width:1330px) {
      width: 550px;
    }
    @media(max-width:1150px) {
      width: 500px;
    }
    @media(max-width:940px) {
      width: 100%;
    }
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
    @media(max-width:1150px) {
      font-size: 20px;
      top: 0px;
      right: 10px;
    }
    @media(max-width:940px) {
      position: relative;
      max-width: 100%;
      padding: 20px;
      line-height: 1.3;
      font-weight: 700;
    }
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
        @media(max-width:1330px) {
          font-size: 20px;
        }
        @media(max-width:1150px) {
          font-size: 20px;
          right: 10px;
        }
        @media(max-width:940px) {
          position: relative;
          max-width: 100%;
          padding: 0 20px;
          top: auto;
        }
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