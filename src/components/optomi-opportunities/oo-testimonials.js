import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Slider from "react-slick"

class OOTestimonialSlider extends Component {

  render() {

    const { data } = this.props; 

      const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
      };
    
      return (
        <SliderContainer className={"testimonial-slider oo-testimonial-slider"}>
          <div
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-delay="1200"
          data-sal-easing="ease"
          >
          <Slider {...settings}>
            {data.allWordpressWpConsultTestimonial.edges.map(post => (
              <Testimonial>
                <Quote dangerouslySetInnerHTML={{ __html: post.node.content }} className={"sliderFade"}/>
                <Meta>
                  <h4>{post.node.title}</h4>
                </Meta>
              </Testimonial>
            ))}          
          </Slider>
          </div>
        </SliderContainer>
      );
  }
}

const SliderContainer = styled.div`
    max-width: 940px;
    width: 100%;
    position: relative;
    padding: 50px 0;
    margin: 0 auto;
`

const Testimonial = styled.div`
    outline: 0 !important;
    position: relative;
    @media(max-width:800px) {
      flex-wrap: wrap;
    }
`

const Quote = styled.div`
    width: 100%;
    text-align: center;
    p {
        color: #ffffff;
        font-family: 'Raleway', sans-serif;
        font-size: 24px;
        line-height: 1.2;
        font-style: normal;
        font-weight: 300;
    }
    @media(max-width:800px) {
      width: 100%;
      margin-bottom: 35px;
    }
    @media(max-width:600px) {
      padding-right: 0;
      p {
        font-size: 20px;
      }
    }
`

const Meta = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
    h4 {
        color: #00aeef;
        font-family: 'Raleway', sans-serif;
        font-size: 32px;
        line-height: 1.2;
        font-style: normal;
        font-weight: 300;
    }
    @media(max-width:800px) {
      width: 100%;
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpConsultTestimonial(sort: {fields: date, order: DESC}) {
                edges {
                    node {
                        title
                        content
                    }
                  }
            }
        }
      `}
      render={data => <OOTestimonialSlider data={data} {...props} />}
    />
  );