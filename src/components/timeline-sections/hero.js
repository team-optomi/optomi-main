import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const TimelineHero = () => {
    
    const data = useStaticQuery(graphql`
        query {
            heroData: wordpressWpCustomPage(wordpress_id: {eq: 2221}) {
                acf {
                    timeline_header_left_image {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 800) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_header_right_image {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 800) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
      
                }
            }
        }
    `)

    return(
        <HeroSection>
            <div class="flex-row">
                <div 
                class="left-image"
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >
                    <Img sizes={data.heroData.acf.timeline_header_left_image.localFile.childImageSharp.sizes} alt={data.heroData.acf.timeline_header_left_image.title}/>
                </div>
                <div 
                class="right-image"
                data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >
                    <Img sizes={data.heroData.acf.timeline_header_right_image.localFile.childImageSharp.sizes} alt={data.heroData.acf.timeline_header_right_image.title}/>
                </div>
            </div>
        </HeroSection>
    )

}

const HeroSection = styled.section`
    background-color: #fff;
    padding: 50px 20px;
    @media(max-width:767px) {
        padding-top: 120px;
    }
    .flex-row {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .left-image {
            width: 40%;
        }
        .right-image {
            width: 60%;
        }
    }
`

export default TimelineHero