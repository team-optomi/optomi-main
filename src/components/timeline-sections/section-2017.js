import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const Section2017 = () => {
    
    const data = useStaticQuery(graphql`
        query {
            sectionData: wordpressWpCustomPage(wordpress_id: {eq: 2221}) {
                acf {
                    timeline_2017_top_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1920) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2017_award_one {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 244) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2017_award_two {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 265) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2017_award_three {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 310) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2017_bottom_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1920) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2017_bottom_logo {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 800) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2017_bottom_event
                    timeline_2017_bottom_border {
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
            <div 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            class="top-row-title">
                <h2 class="section-year">2017</h2>
            </div>
            <div class="top-row">
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                class="row-bg">
                    <Img sizes={data.sectionData.acf.timeline_2017_top_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2017_top_background.title}/>
                </div>
                <div class="top-content">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    class="left-awards">
                        <Img sizes={data.sectionData.acf.timeline_2017_award_one.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2017_award_one.title}/>
                        <Img sizes={data.sectionData.acf.timeline_2017_award_two.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2017_award_two.title}/>
                        <Img sizes={data.sectionData.acf.timeline_2017_award_three.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2017_award_three.title}/>
                    </div>
                </div>
            </div>
            <div class="bottom-row">
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                class="row-bg">
                    <Img sizes={data.sectionData.acf.timeline_2017_bottom_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2017_bottom_background.title}/>
                </div>
                <div class="bottom-content">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    class="bottom-content-main">
                            <Img sizes={data.sectionData.acf.timeline_2017_bottom_logo.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2017_bottom_logo.title}/>
                        <div class="event">
                            <h3>{data.sectionData.acf.timeline_2017_bottom_event}</h3>
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
                <Img sizes={data.sectionData.acf.timeline_2017_bottom_border.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2017_bottom_border.title}/>
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
    .top-row-title {
        h2 {
            font-family: "Helvetica Thin";
            color: #00385c;
            font-size: 180px;
            text-align: right;
            font-weight: 100;
            text-shadow: 15px 15px 12px rgba(0,0,0,.15);
            padding-right: 15%;
        }
    }
    .top-row {
        position: relative;
        .row-bg {
            position: relative;
            z-index: 1;
        }
        .top-content {
            position: absolute;
            top: -70px;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            .left-awards {
                padding-left: 80px;
                display: flex;
                align-items: flex-start;
                .gatsby-image-wrapper:nth-child(1) {
                    max-width: 180px;
                    width: 100%;
                    margin: 0 25px;
                    img {
                        object-fit: contain !important;
                    }
                }
                .gatsby-image-wrapper:nth-child(2) {
                    max-width: 200px;
                    width: 100%;
                    margin: 0 25px;
                    img {
                        object-fit: contain !important;
                    }
                }
                .gatsby-image-wrapper:nth-child(3) {
                    max-width: 200px;
                    width: 100%;
                    margin: 0 25px;
                    img {
                        object-fit: contain !important;
                    }
                }
            }
        }
    }
    .bottom-row {
        position: relative;
        .row-bg {
            position: relative;
            z-index: 1;
        }
        .bottom-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            display: flex;
            align-items: center;
            .bottom-content-main {
                width: 50%;
                .gatsby-image-wrapper {
                    max-width: 500px;
                    width: 100%;
                    margin: 0 auto;
                    margin-bottom: 20px;
                }
            }
            .event {
                background-color: #00385c;
                padding: 10px 20px;
                box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                width: 85%;
                margin-right: auto;
                h3 {
                    font-family: "Helvetica Thin";
                    font-weight: 100;
                    letter-spacing: 2px;
                    color: #fff ;
                    line-height: 1.3;
                    margin-top: 0;
                    margin-bottom: 0;
                    text-align: right;
                }
            }
        }
    }
    .border-bottom {
        padding-top: 80px;
    }
`

export default Section2017