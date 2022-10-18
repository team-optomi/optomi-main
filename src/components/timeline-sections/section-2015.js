import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const Section2015 = () => {
    
    const data = useStaticQuery(graphql`
        query {
            sectionData: wordpressWpCustomPage(wordpress_id: {eq: 2221}) {
                acf {
                    timeline_2015_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1164) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2015_left_award {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 502) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2015_right_award {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 254) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2015_bottom_border {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1920) {
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
        <MainSection>
            <div class="row-one">
                <div class="left-content">
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    class="left-year">
                        <h2 class="section-year">2015</h2>
                    </div>
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    class="left-award">
                        <Img sizes={data.sectionData.acf.timeline_2015_left_award.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2015_left_award.title}/>
                    </div>
                </div>
                <div class="right-content">
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    class="right-bg">
                        <Img sizes={data.sectionData.acf.timeline_2015_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2015_background.title}/>
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-delay="900"
                    data-sal-easing="ease"
                    class="right-content-main">
                        <div class="right-award">
                            <Img sizes={data.sectionData.acf.timeline_2015_right_award.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2015_right_award.title}/>
                        </div>
                    </div>
                </div>
            </div>
            <div 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            class="border-bottom">
                <Img sizes={data.sectionData.acf.timeline_2015_bottom_border.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2015_bottom_border.title}/>
            </div>
        </MainSection>
    )

}

const MainSection = styled.section`
    background-color: #fff;
    padding-top: 80px;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    .row-one {
        display: flex;
        align-items: center;
        .left-content {
            width: 40%;
            position: relative;
            padding-right: 50px;
            z-index: 2;
            .left-year {
                h2 {
                    font-family: "Helvetica Thin";
                    color: #00385c;
                    font-size: 180px;
                    text-align: right;
                    font-weight: 100;
                    text-shadow: 15px 15px 12px rgba(0,0,0,.15);
                }
            }
            .left-award {
                position: relative;
                z-index: 2;
                .gatsby-image-wrapper {
                    max-width: 400px;
                    width: 100%;
                    margin-left: auto;
                }
            }
        }
        .right-content {
            width: 60%;
            position: relative;
            z-index: 1;
            .right-bg {
                position: relative;
                z-index: 2;
            }
            .right-content-main {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 3;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                .right-award {
                    width: 254px;
                    margin-top: -40px;
                    margin-left: 10%;
                }
            }
        }
    }
    .border-bottom {
        padding-top: 80px;
    }
`

export default Section2015