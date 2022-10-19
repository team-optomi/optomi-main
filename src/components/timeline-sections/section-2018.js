import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const Section2018 = () => {
    
    const data = useStaticQuery(graphql`
        query {
            sectionData: wordpressWpCustomPage(wordpress_id: {eq: 2221}) {
                acf {
                    timeline_2018_top_event_left
                    timeline_2018_top_event_right
                    timeline_2018_top_logo {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 604) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2018_top_state {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 371) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2018_top_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1920) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2018_bottom_event
                    timeline_2018_bottom_state {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 583) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2018_bottom_award_one {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 335) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2018_bottom_award_two {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 940) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2018_bottom_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1920) {
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
                    timeline_2018_bottom_border {
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
            <div class="top-year">
                <h2 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                class="section-year">2018</h2>
            </div>
            <div class="top-row">
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
            <div class="bottom-row">
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                class="row-bg">
                    <Img sizes={data.sectionData.acf.timeline_2018_bottom_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2018_bottom_background.title}/>
                </div>
                <div class="bottom-content">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    class="content-left">
                        <Img sizes={data.sectionData.acf.timeline_2018_bottom_award_one.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2018_bottom_award_one.title}/>
                        <Img sizes={data.sectionData.acf.timeline_2018_bottom_award_two.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2018_bottom_award_two.title}/>
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    class="content-right">
                        <Img sizes={data.sectionData.acf.timeline_2018_bottom_state.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2018_bottom_state.title} />
                        <div class="event">
                            <h3>{data.sectionData.acf.timeline_2018_bottom_event}</h3>
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
                <Img sizes={data.sectionData.acf.timeline_2018_bottom_border.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2018_bottom_border.title}/>
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
    .top-year {
        margin-bottom: -100px;
        h2 {
            font-family: "Helvetica Thin";
            color: #00385c;
            font-size: 180px;
            text-align: left;
            padding-left: 10%;
            font-weight: 100;
            text-shadow: 15px 15px 12px rgba(0,0,0,.15);
        }
    }
    .top-row {
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
            .content-left {
                width: 65%;
                height: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                flex-direction: column;
                .gatsby-image-wrapper:nth-child(1) {
                    max-width: 200px;
                    width: 100%;
                    margin-bottom: 80px;
                    margin-right: 120px;
                }
                .gatsby-image-wrapper:nth-child(2) {
                    max-width: 600px;
                    width: 100%;
                    margin-bottom: -35px;
                }
            }
            .content-right {
                width: 35%;
                .gatsby-image-wrapper {
                    max-width: 450px;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: -150px;
                }
                .event {
                    background-color: #c01e2e;
                    padding: 10px 50px;
                    box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                    width: 85%;
                    margin-left: auto;
                    margin-top: 50px;
                    h3 {
                        font-family: "Helvetica Thin";
                        font-weight: 100;
                        letter-spacing: 2px;
                        color: #fff ;
                        line-height: 1.3;
                        margin-top: 0;
                        margin-bottom: 0;
                        text-align: center;
                    }
                }
            }
        }
    }
    .border-bottom {
        padding-top: 80px;
    }
`

export default Section2018