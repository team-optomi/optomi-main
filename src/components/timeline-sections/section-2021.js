import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const Section2021 = () => {

    const data = useStaticQuery(graphql`
        query {
            sectionData: wordpressWpCustomPage(wordpress_id: {eq: 2221}) {
                acf {
                    timeline_2021_row_one_award_one {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 201) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2021_row_one_award_two {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 205) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2021_row_one_award_three {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 489) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2021_row_one_award_set {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 922) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2021_row_one_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1920) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2021_row_two_event
                    timeline_2021_row_two_logo {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 647) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2021_row_two_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1920) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2021_row_three_event
                    timeline_2021_row_three_logo {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 304) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2021_row_three_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1920) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2021_row_four_award_set {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1630) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2021_row_four_award {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 542) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2021_row_four_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1920) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2021_bottom_border {
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
                    <h2 class="section-year">2021</h2>
                </div>
            </div>
            <div class="row-one">
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                class="row-bg">
                    <Img sizes={data.sectionData.acf.timeline_2021_row_one_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2021_row_one_background.title}/>
                </div>
                <div class="flex-row">
                    <div class="left-col">
                        <div 
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        class="award-row-one">
                            <Img sizes={data.sectionData.acf.timeline_2021_row_one_award_one.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2021_row_one_award_one.title}/>
                            <Img sizes={data.sectionData.acf.timeline_2021_row_one_award_two.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2021_row_one_award_two.title}/>
                        </div>
                        <div 
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        class="award-row-two">
                            <Img sizes={data.sectionData.acf.timeline_2021_row_one_award_three.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2021_row_one_award_three.title}/>
                        </div>
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    class="right-col">
                        <Img sizes={data.sectionData.acf.timeline_2021_row_one_award_set.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2021_row_one_award_set.title}/>
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
                    <Img sizes={data.sectionData.acf.timeline_2021_row_two_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2021_row_two_background.title}/>
                </div>
                <div class="flex-row">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    class="left-col">
                        <Img sizes={data.sectionData.acf.timeline_2021_row_two_logo.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2021_row_two_logo.title}/>
                        <div class="event">
                            <h3>{data.sectionData.acf.timeline_2021_row_two_event}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row-three">
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                class="row-bg">
                    <Img sizes={data.sectionData.acf.timeline_2021_row_three_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2021_row_three_background.title}/>
                </div>
                <div class="flex-row">
                    <div 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    class="full-col">
                        <div class="event">
                            <h3>{data.sectionData.acf.timeline_2021_row_three_event}</h3>
                        </div>
                        <Img sizes={data.sectionData.acf.timeline_2021_row_three_logo.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2021_row_three_logo.title}/>
                    </div>
                </div>
            </div>
            <div class="row-four">
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                class="row-bg">
                    <Img sizes={data.sectionData.acf.timeline_2021_row_four_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2021_row_four_background.title}/>
                </div>
                <div class="flex-row">
                    <div 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    class="full-col">
                        <Img sizes={data.sectionData.acf.timeline_2021_row_four_award_set.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2021_row_four_award_set.title}/>
                        <Img sizes={data.sectionData.acf.timeline_2021_row_four_award.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2021_row_four_award.title}/>
                    </div>
                </div>
            </div>
            <div 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            class="border-bottom">
                <Img sizes={data.sectionData.acf.timeline_2021_bottom_border.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2021_bottom_border.title}/>
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
            text-align: right;
            font-weight: 100;
            text-shadow: 15px 15px 12px rgba(0,0,0,.15);
            width: 100%;
            padding-right: 15%;
        }
    }
    .row-one {
        position: relative;
        .row-bg {
            position: relative;
            z-index: 1;
        }
        .flex-row {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 2;
            .left-col {
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .award-row-one {
                    display: flex;
                    justify-content: flex-end;
                    margin-top: -60px;
                    .gatsby-image-wrapper:nth-child(1) {
                        max-width: 140px;
                        width: 100%;
                        margin: 0 30px;
                    }
                    .gatsby-image-wrapper:nth-child(2) {
                        max-width: 140px;
                        width: 100%;
                        margin: 0 30px;
                    }
                }
                .award-row-two {
                    margin-bottom: -60px;
                    .gatsby-image-wrapper {
                        max-width: 300px;
                        width: 100%;
                        margin: 0 auto;
                    }
                }
            }
            .right-col {
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                .gatsby-image-wrapper {
                    max-width: 600px;
                    width: 100%;
                    margin-bottom: 120px;
                }
            }
        }
    }
    .row-two {
        position: relative;
        .row-bg {
            position: relative;
            z-index: 1;
        }
        .flex-row {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 2;
            .left-col {
                width: 50%;
                padding-top: 100px;
                .gatsby-image-wrapper {
                    max-width: 500px;
                    width: 100%;
                    margin: 0 auto;
                }
                .event {
                    background-color: #00385c;
                    padding: 10px 50px;
                    box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                    width: 90%;
                    margin-right: auto;
                    position: relative;
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
    .row-three {
        position: relative;
        .row-bg {
            position: relative;
            z-index: 1;
        }
        .flex-row {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            z-index: 2;
            .full-col {
                .event {
                    background-color: #00385c;
                    padding: 10px 20px;
                    box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                    width: 100%;
                    margin-right: auto;
                    position: relative;
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
                .gatsby-image-wrapper {
                    max-width: 200px;
                    width: 100%;
                    margin: 0 auto;
                    margin-top: 20px;
                }
            }
        }
    }
    .row-four {
        position: relative;
        .row-bg {
            position: relative;
            z-index: 1;
        }
        .flex-row {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 2;
            .full-col {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                .gatsby-image-wrapper:nth-child(1) {
                    max-width: 900px;
                    width: 100%;
                    margin-bottom: 100px;
                }
                .gatsby-image-wrapper:nth-child(2) {
                    max-width: 350px;
                    width: 100%;
                    margin-left: auto;
                    margin-right: 10%;
                    margin-bottom: -100px;
                }
            }
        }
    }
    .border-bottom {
        padding-top: 140px;
        padding-bottom: 80px;
    }
`

export default Section2021