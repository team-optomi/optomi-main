import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import Slider from "react-slick"

const JoinSectionThree = () => {

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
        speed: 1000,
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
`

const SliderContainer = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    .slick-slider {
      max-width: 100%;
    }
    .slick-list {
      width: 100%;
      padding: 0 !important;
    }
`

export default JoinSectionThree