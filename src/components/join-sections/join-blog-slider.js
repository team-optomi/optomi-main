import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import Slider from "react-slick"

const JoinBlogSlider = () => {

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
            allWordpressWpJoinPost {
                edges {
                    node {
                        title
                        slug
                        date(formatString: "MMMM DD, YYYY")
                        featured_media {
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
    `)

    return(
        
        <MainSection>

            <h2>OUR TEAM'S <span>Stories</span></h2>

            <SliderContainer className={"our-work-slider"}>
                <Slider {...settings}>
                    {data.allWordpressWpJoinPost.edges.map(post => (
                    <JoinBlogSlide>
                        <div class="work-image-bg">
                            <Img fluid={post.node.featured_media.localFile.childImageSharp.fluid} alt={post.node.featured_media.title} />
                        </div>
                        <div class="slide-overlay">
                            <Link to={`/join-our-team/blog/${post.node.slug}`} style={{ textDecoration: "none" }}>
                                <div>
                                  <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                                  <p>{post.node.date}</p>
                                </div>
                            </Link>
                        </div>
                    </JoinBlogSlide> 
                    ))}
                </Slider>
            </SliderContainer>

            <p class="bottom-button"><Link to={"/join-our-team/blog/"}>Blog</Link></p>
                
        </MainSection>
    )

}

const MainSection = styled.section`
    position: relative;
    margin-bottom: 100px;
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
        font-size: 80px;
        position: relative;
        left: 0px;
        top: 0px;
      }
    }
    p.bottom-button {
      text-align: center;
      position: relative;
      margin-top: 50px;
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 100;
      font-family: "Helvetica Thin";
      line-height: 1.3;
      a {
          display: inline-block;
          background-color: #00385c;
          color: #fff;
          border: 2px solid #fff;
          padding: 10px 35px;
          border-radius: 10px;
          text-decoration: none;
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

const JoinBlogSlide = styled.div`
    padding: 0px;
    position: relative;
    outline: 0;
    .work-image-bg {
      height: 450px;
      width: 100%;
      .gatsby-image-wrapper {
        height: 100%;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: .5;
        transition-duration: .3s;
      }
    }
    .slide-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-end;
        h3 {
          font-family: "Helvetica Thin";
          width: 100%;
          z-index: 1;
          font-size: 28px;
          letter-spacing: 2px;
          font-weight: 100;
          color: rgb(255,255,255);
          line-height: 1.3;
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        p {
          width: 100%;
          font-family: BonVivant;
          font-weight: 100;
          font-size: 40px;
          color: #fff;
        }
      }
    }
    &:hover {
      .work-image-bg {
        &:after {
          background-color: rgb(0, 40, 85);
          opacity: .8;
        }
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
        ${JoinBlogSlide} {
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
    @media(max-width:1400px) {
      .slick-prev {
        left: -20%;
      }
      .slick-next {
        right: -20% !important;
      }
    }
    @media(max-width:1120px) {
      .slick-prev {
        left: -20px;
      }
      .slick-next {
        right: -20px !important;
      }
    }
    @media(max-width:860px) {
      .slick-prev {
        left: 20px;
      }
      .slick-next {
        right: 20px !important;
      }
    }
  @media(max-width:767px) {
    height: 300px;
    .slick-slider {
      height: 300px;
    }
    .slick-track {
      height: 300px;
    }
    .slick-list{
      height: 300px;
    }
    .slick-slide {
      height: 300px;
      &.slick-active {
        ${JoinBlogSlide} {
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
    height: 250px;
    .slick-slider {
      height: 250px;
    }
    .slick-track {
      height: 250px;
    }
    .slick-list{
      height: 250px;
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

export default JoinBlogSlider