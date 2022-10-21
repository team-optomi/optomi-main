import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const Section2019 = () => {
    
    const data = useStaticQuery(graphql`
        query {
            sectionData: wordpressWpCustomPage(wordpress_id: {eq: 2221}) {
                acf {
                    timeline_2019_event
                    timeline_2019_award {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 275) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2019_left_image {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1277) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2019_right_image {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 643) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2019_state {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 445) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2019_bottom_border {
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
            <div class="top-row">
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                class="top-year">
                    <h2 class="section-year">2019</h2>
                </div>
            </div>
            <div class="row-one">
                <div class="left-content">
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    class="left-bg">
                        <Img sizes={data.sectionData.acf.timeline_2019_left_image.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2019_left_image.title}/>
                    </div>
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    class="left-award">
                        <Img sizes={data.sectionData.acf.timeline_2019_award.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2019_award.title}/>
                    </div>
                </div>
                <div class="right-content">
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    class="right-bg">
                        <Img sizes={data.sectionData.acf.timeline_2019_right_image.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2019_right_image.title}/>
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-delay="900"
                    data-sal-easing="ease"
                    class="right-content-main">
                        <div class="right-state">
                            <Img sizes={data.sectionData.acf.timeline_2019_state.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2019_state.title}/>
                        </div>
                        <div class="event">
                            <h3>{data.sectionData.acf.timeline_2019_event}</h3>
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
                <Img sizes={data.sectionData.acf.timeline_2019_bottom_border.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2019_bottom_border.title}/>
            </div>
        </MainSection>
    )

}

const MainSection = styled.section`
    background-color: #fff;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    .top-row {
        h2 {
            font-family: "Helvetica Thin";
            color: #00385c;
            font-size: 180px;
            text-align: center;
            font-weight: 100;
            text-shadow: 15px 15px 12px rgba(0,0,0,.15);
            padding-left: 10%;
            @media(max-width:1200px) {
                font-size: 150px;
            }
            @media(max-width:1000px) {
                font-size: 120px;
            }
            @media(max-width:767px) {
                font-size: 72px;
                padding-left: 0;
            }
        }
    }
    .row-one {
        display: flex;
        align-items: flex-start;
        @media(max-width:767px) {
            flex-wrap: wrap;
        }
        .left-content {
            width: 65%;
            position: relative;
            padding-top: 100px;
            @media(max-width:767px) {
                width: 100%;
                order: 2;
                padding-top: 0px;
            }
            .left-bg {
                position: relative;
                z-index: 1;
            }
            .left-award {
                position: absolute;
                z-index: 2;
                width: 200px;
                top: 0;
                left: 45px;
                .gatsby-image-wrapper {
                    max-width: 200px;
                    width: 100%;
                }
                @media(max-width:767px) {
                    top: auto;
                    bottom: -20px;
                }
            }
        }
        .right-content {
            width: 35%;
            position: relative;
            z-index: 1;
            @media(max-width:767px) {
                width: 100%;
                order: 1;
            }
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
                .right-state {
                    max-width: 360px;
                    width: 100%;
                    margin-left: auto;
                    margin-top: 100px;
                    @media(max-width:1000px) {
                        max-width: 200px;
                    }
                }
                .event {
                    background-color: #c01e2e;
                    padding: 10px 50px;
                    box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                    width: 90%;
                    margin-left: auto;
                    margin-top: -140px;
                    position: relative;
                    @media(max-width:1000px) {
                        width: 100%;
                        padding: 10px 20px;
                    }
                    @media(max-width:767px) {
                        max-width: 400px;
                        margin: 0 auto;
                    }
                    h3 {
                        font-family: "Helvetica Thin";
                        font-weight: 100;
                        letter-spacing: 2px;
                        color: #fff ;
                        line-height: 1.3;
                        margin-top: 0;
                        margin-bottom: 0;
                        text-align: center;
                        @media(max-width:1000px) {
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }
    .border-bottom {
        padding-top: 80px;
    }
`

export default Section2019