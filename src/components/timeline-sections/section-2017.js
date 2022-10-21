import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const Section2017 = () => {
    
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
                    <Img sizes={data.sectionData.acf.timeline_2018_top_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2018_top_background.title}/>
                </div>
                <div class="top-content">
                    <div class="left-content">
                        <div 
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        class="left-content-main">
                            <Img sizes={data.sectionData.acf.timeline_2018_top_logo.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2018_top_logo.title}/>
                            <div class="event">
                                <h3>{data.sectionData.acf.timeline_2018_top_event_left}</h3>
                            </div>
                        </div>
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-delay="900"
                    data-sal-easing="ease"
                    class="right-content">
                        <Img sizes={data.sectionData.acf.timeline_2018_top_state.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2018_top_state.title}/>
                        <div class="event">
                            <h3>{data.sectionData.acf.timeline_2018_top_event_right}</h3>
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
    @media(max-width:1000px) {
        padding-top: 0;
    }
    .top-row-title {
        h2 {
            font-family: "Helvetica Thin";
            color: #00385c;
            font-size: 180px;
            text-align: right;
            font-weight: 100;
            text-shadow: 15px 15px 12px rgba(0,0,0,.15);
            padding-right: 15%;
            @media(max-width:1200px) {
                font-size: 150px;
                margin-bottom: 80px;
            }
            @media(max-width:1000px) {
                font-size: 120px;
                text-align: center;
                padding-right: 0;
            }
            @media(max-width:767px) {
                font-size: 72px;
                margin-bottom: 0;
            }
        }
    }
    .top-row {
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
        .top-content {
            position: absolute;
            top: -70px;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            @media(max-width:1000px) {
                top: -35px;
            }
            @media(max-width:767px) {
                position: relative;
                top: 0;
                padding: 20px;
            }
            .left-awards {
                padding-left: 80px;
                display: flex;
                align-items: flex-start;
                @media(max-width:1000px) {
                    width: 100%;
                    padding-left: 20px;
                    padding-right: 20px;
                    justify-content: center;
                }
                @media(max-width:767px) {
                    padding-left: 0;
                    padding-right: 0;
                    flex-wrap: wrap;
                    align-items: center;
                }
                .gatsby-image-wrapper:nth-child(1) {
                    max-width: 180px;
                    width: 100%;
                    margin: 0 25px;
                    img {
                        object-fit: contain !important;
                    }
                    @media(max-width:1000px) {
                        max-width: 100px;
                    }
                }
                .gatsby-image-wrapper:nth-child(2) {
                    max-width: 200px;
                    width: 100%;
                    margin: 0 25px;
                    img {
                        object-fit: contain !important;
                    }
                    @media(max-width:1000px) {
                        max-width: 100px;
                    }
                }
                .gatsby-image-wrapper:nth-child(3) {
                    max-width: 200px;
                    width: 100%;
                    margin: 0 25px;
                    img {
                        object-fit: contain !important;
                    }
                    @media(max-width:1000px) {
                        max-width: 100px;
                    }
                }
            }
        }
    }
    .bottom-row {
        position: relative;
        margin-top: -100px;
        @media(max-width:767px) {
            margin-top: 0;
        }
        h2 {
            font-family: "Helvetica Thin";
            color: #00385c;
            font-size: 180px;
            text-align: right;
            font-weight: 100;
            text-shadow: 15px 15px 12px rgba(0,0,0,.15);
            @media(max-width:1200px) {
                font-size: 150px;
            }
        }
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
        .top-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            display: flex;
            @media(max-width:767px) {
                position: relative;
                padding: 20px;
                flex-wrap: wrap;
            }
            .left-content {
                width: 50%;
                margin-top: 150px;
                @media(max-width:767px) {
                    width: 100%;
                    margin-top: 0;
                }
                .gatsby-image-wrapper {
                    max-width: 400px;
                    width: 100%;
                    margin-left: auto;
                    margin-right: 80px;
                    @media(max-width:1000px) {
                        max-width: 250px;
                    }
                    @media(max-width:767px) {
                        margin: 0 auto;
                        margin-bottom: 20px;
                    }
                }
                .event {
                    background-color: #c01e2e;
                    padding: 10px 20px;
                    padding-right: 60px;
                    box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                    width: 100%;
                    margin-right: auto;
                    @media(max-width:767px) {
                        max-width: 400px;
                        margin-left: auto;
                    }
                    h3 {
                        font-family: "Helvetica Thin";
                        font-weight: 100;
                        letter-spacing: 2px;
                        color: #fff ;
                        line-height: 1.3;
                        margin-top: 0;
                        margin-bottom: 0;
                        text-align: right;
                        @media(max-width:1000px) {
                            font-size: 20px;
                        }
                        @media(max-width:767px) {
                            font-size: 18px;
                        }
                    }
                }
            }
            .right-content {
                width: 50%;
                padding-left: 10%;
                @media(max-width:767px) {
                    width: 100%;
                    padding-left: 0;
                }
                .gatsby-image-wrapper {
                    max-width: 250px;
                    margin-top: -50px;
                    @media(max-width:1000px) {
                        max-width: 160px;
                    }
                    @media(max-width:767px) {
                        max-width: 120px;
                        margin-top: 20px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                }
                .event {
                    background-color: #c01e2e;
                    padding: 10px 50px;
                    box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                    width: 85%;
                    margin-left: auto;
                    margin-top: 100px;
                    @media(max-width:767px) {
                        max-width: 400px;
                        width: 100%;
                        margin-left: auto;
                        margin-right: auto;
                        margin-top: 20px;
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

export default Section2017