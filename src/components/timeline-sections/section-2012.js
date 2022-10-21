import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const Section2012 = () => {
    
    const data = useStaticQuery(graphql`
        query {
            sectionData: wordpressWpCustomPage(wordpress_id: {eq: 2221}) {
                acf {
                    timeline_2012_row_1_event
                    timeline_2012_row_1_logo {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 376) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2012_row_1_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1920) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2012_row_2_event
                    timeline_2012_row_2_logo {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 504) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2012_row_2_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1920) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2012_bottom_border {
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
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                class="row-bg">
                    <Img sizes={data.sectionData.acf.timeline_2012_row_1_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2012_row_1_background.title}/>
                </div>
                <div class="row-content">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    class="left-content">
                        <div class="event">
                            <h3>{data.sectionData.acf.timeline_2012_row_1_event}</h3>
                        </div>
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-delay="900"
                    data-sal-easing="ease"
                    class="right-content">
                        <Img sizes={data.sectionData.acf.timeline_2012_row_1_logo.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2012_row_1_logo.title}/>
                        <h2 class="section-year">2012</h2>
                    </div>
                </div>
            </div>
            <div class="row-two">
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                class="row-bg">
                    <Img sizes={data.sectionData.acf.timeline_2012_row_2_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2012_row_2_background.title}/>
                </div>
                <div class="row-content">
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    class="right-content">
                        <Img sizes={data.sectionData.acf.timeline_2012_row_2_logo.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2012_row_2_logo.title}/>
                        <div class="event">
                            <h3>{data.sectionData.acf.timeline_2012_row_2_event}</h3>
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
                <Img sizes={data.sectionData.acf.timeline_2012_bottom_border.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2012_bottom_border.title}/>
            </div>
        </MainSection>
    )

}

const MainSection = styled.section`
    background-color: #fff;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    .row-one {
        position: relative;
        .row-bg {
            position: relative;
            z-index: 1;
            @media(max-width:767px) {
                position: absolute;
                height: 100%;
                top: 0;
                left: 0;
                width: 100%;
                .gatsby-image-wrapper {
                    height: 100%;
                }
            }
        }
        .row-content {
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            @media(max-width:767px) {
                position: relative;
                flex-direction: column;
            }
            .left-content {
                width: 50%;
                @media(max-width:767px) {
                    width: 100%;
                    padding: 20px;
                    order: 2;
                }
                .event {
                    background-color: #00385c;
                    padding: 10px 20px;
                    box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                    width: 80%;
                    @media(max-width:1000px) {
                        width: 95%;
                    }
                    @media(max-width:767px) {
                        width: 100%;
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
                        margin-right: 100px;
                        text-align: right;
                        @media(max-width:1000px) {
                            font-size: 20px;
                        }
                        @media(max-width:767px) {
                            text-align: center;
                            margin-right: 0;
                            font-size: 18px;
                        }
                    }
                }
            }
            .right-content {
                width: 50%;
                @media(max-width:767px) {
                    width: 100%;
                    padding: 20px;
                    order: 1;
                }
                .gatsby-image-wrapper {
                    max-width: 376px;
                    margin-left: auto;
                    margin-right: auto;
                    @media(max-width:1000px) {
                        max-width: 200px;
                    }
                }
                h2 {
                    font-family: "Helvetica Thin";
                    color: #fff;
                    font-size: 180px;
                    text-align: center;
                    font-weight: 100;
                    text-shadow: 1px 1px 2px rgba(0,0,0,.5);
                    @media(max-width:1200px) {
                        font-size: 150px;
                    }
                    @media(max-width:1000px) {
                        font-size: 120px;
                    }
                    @media(max-width:767px) {
                        font-size: 72px;
                    }
                }
            }
        }
    }
    .row-two {
        position: relative;
        .row-bg {
            position: relative;
            z-index: 1;
            @media(max-width:767px) {
                position: absolute;
                height: 100%;
                top: 0;
                left: 0;
                width: 100%;
                .gatsby-image-wrapper {
                    height: 100%;
                }
            }
        }
        .row-content {
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            @media(max-width:767px) {
                position: relative;
                flex-direction: column;
            }
            .right-content {
                width: 50%;
                @media(max-width:767px) {
                    width: 100%;
                    padding: 20px;
                }
                .gatsby-image-wrapper {
                    max-width: 504px;
                    margin-left: auto;
                    margin-right: auto;
                    margin-bottom: 20px;
                }
                .event {
                    background-color: #00385c;
                    padding: 10px 20px;
                    box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                    width: 75%;
                    margin-left: auto;
                    @media(max-width:1000px) {
                        width: 95%;
                    }
                    @media(max-width:767px) {
                        width: 100%;
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
                        margin-left: 20px;
                        text-align: left;
                        @media(max-width:1000px) {
                            font-size: 20px;
                        }
                        @media(max-width:767px) {
                            font-size: 18px;
                            text-align: center;
                            margin-left: 0;
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

export default Section2012