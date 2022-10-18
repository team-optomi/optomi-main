import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const Section2014 = () => {
    
    const data = useStaticQuery(graphql`
        query {
            sectionData: wordpressWpCustomPage(wordpress_id: {eq: 2221}) {
                acf {
                    timeline_2014_left_event
                    timeline_2014_left_number {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 445) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2014_left_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1040) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2014_right_event
                    timeline_2014_right_award {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 233) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2014_right_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1008) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2014_bottom_border {
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
            class="top-row">
                <h2 class="section-year">2014</h2>
            </div>
            <div class="row-one">
                <div class="left-content">
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    class="left-bg">
                        <Img sizes={data.sectionData.acf.timeline_2014_left_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2014_left_background.title}/>
                    </div>
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    class="left-content-main">
                        <div class="event-number">
                            <Img sizes={data.sectionData.acf.timeline_2014_left_number.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2014_left_number.title}/>
                        </div>
                        <div class="event">
                            <h3>{data.sectionData.acf.timeline_2014_left_event}</h3>
                        </div>
                    </div>
                </div>
                <div class="right-content">
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    class="right-bg">
                        <Img sizes={data.sectionData.acf.timeline_2014_right_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2014_right_background.title}/>
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-delay="900"
                    data-sal-easing="ease"
                    class="right-content-main">
                        <div class="right-award">
                            <Img sizes={data.sectionData.acf.timeline_2014_right_award.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2014_right_award.title}/>
                        </div>
                        <div class="event">
                            <h3>{data.sectionData.acf.timeline_2014_right_event}</h3>
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
                <Img sizes={data.sectionData.acf.timeline_2014_bottom_border.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2014_bottom_border.title}/>
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
        margin-bottom: 100px;
        h2 {
            font-family: "Helvetica Thin";
            color: #00385c;
            font-size: 180px;
            text-align: center;
            font-weight: 100;
            text-shadow: 15px 15px 12px rgba(0,0,0,.15);
            padding-left: 15%;
        }
    }
    .row-one {
        display: flex;
        align-items: flex-start;
        .left-content {
            width: 55%;
            margin-right: -10%;
            position: relative;
            z-index: 2;
            .left-bg {
                padding-left: 80px;
                position: relative;
                z-index: 2;
            }
            .left-content-main {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 3;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                .event-number {
                    position: absolute;
                    width: 350px;
                    margin-right: 350px;
                    margin-top: 80px;
                }
                .event {
                    background-color: #00385c;
                    padding: 10px 20px;
                    box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                    width: 85%;
                    margin-top: 200px;
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
        .right-content {
            width: 55%;
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
                align-items: flex-end;
                .right-award {
                    width: 233px;
                    margin-top: -40px;
                    margin-right: 20%;
                }
                .event {
                    background-color: #00385c;
                    padding: 10px 20px;
                    box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                    width: 80%;
                    margin-bottom: 80px;
                    margin-leftt: auto;
                    h3 {
                        font-family: "Helvetica Thin";
                        font-weight: 100;
                        letter-spacing: 2px;
                        color: #fff ;
                        line-height: 1.3;
                        margin-top: 0;
                        margin-bottom: 0;
                        text-align: left;
                    }
                }
            }
        }
    }
    .border-bottom {
        padding-top: 80px;
    }
`

export default Section2014