import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const Section2022 = () => {

    const data = useStaticQuery(graphql`
        query {
            sectionData: wordpressWpCustomPage(wordpress_id: {eq: 2221}) {
                acf {
                    timeline_2022_row_one_event
                    timeline_2022_row_one_award {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 243) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2022_row_one_state {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 411) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2022_row_one_award_set {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 951) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2022_row_one_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1007) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2022_row_two_event
                    timeline_2022_row_two_left_image {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1004) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2022_row_two_state {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 809) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2022_row_two_award {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 568) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2022_row_two_right_image {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 916) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2022_row_three_event
                    timeline_2022_row_three_logo {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 518) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2022_row_three_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1483) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2022_border_bottom {
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
                <div class="flex-row">
                    <div class="left-col">
                        <div 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        class="top-year">
                            <h2 class="section-year">2022</h2>
                        </div>
                        <div
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        >
                            <Img sizes={data.sectionData.acf.timeline_2022_row_one_award.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2022_row_one_award.title}/>
                            <Img sizes={data.sectionData.acf.timeline_2022_row_one_state.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2022_row_one_state.title}/>
                            <div class="event">
                                <h3>{data.sectionData.acf.timeline_2022_row_one_event}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="right-col">
                        <div 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        class="right-image ">
                            <Img sizes={data.sectionData.acf.timeline_2022_row_one_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2022_row_one_background.title}/>
                        </div>
                        <div 
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        class="award-set">
                            <Img sizes={data.sectionData.acf.timeline_2022_row_one_award_set.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2022_row_one_award_set.title}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row-two">
                <div class="flex-row">
                    <div class="left-col">
                        <div 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        class="left-image">
                            <Img sizes={data.sectionData.acf.timeline_2022_row_two_left_image.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2022_row_two_left_image.title}/>
                        </div>
                        <div 
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        class="left-content">
                            <Img sizes={data.sectionData.acf.timeline_2022_row_two_state.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2022_row_two_state.title}/>
                            <div class="event">
                                <h3>{data.sectionData.acf.timeline_2022_row_two_event}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="right-col">
                        <div 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        class="right-image">
                            <Img sizes={data.sectionData.acf.timeline_2022_row_two_right_image.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2022_row_two_right_image.title}/>
                        </div>
                        <div 
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        class="right-content">
                            <Img sizes={data.sectionData.acf.timeline_2022_row_two_award.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2022_row_two_award.title}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row-three">
                <div class="flex-row">
                    <div class="left-col">
                        <div 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        class="left-image">
                            <Img sizes={data.sectionData.acf.timeline_2022_row_three_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2022_row_three_background.title}/>
                        </div>
                    </div>
                    <div class="right-col">
                        <div 
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        class="right-content">
                            <Img sizes={data.sectionData.acf.timeline_2022_row_three_logo.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2022_row_three_logo.title}/>
                            <div class="event">
                                <h3>{data.sectionData.acf.timeline_2022_row_three_event}</h3>
                            </div>
                        </div>
                    </div>
                </div>
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
        z-index: 2;
        .flex-row {
            display: flex;
            .left-col {
                position: relative;
                z-index: 2;
                width: 50%;
                h2 {
                    font-family: "Helvetica Thin";
                    color: #00385c;
                    font-size: 180px;
                    text-align: right;
                    font-weight: 100;
                    text-shadow: 15px 15px 12px rgba(0,0,0,.15);
                    width: 100%;
                    padding-right: 20%;
                }
                .gatsby-image-wrapper:nth-child(1) {
                    max-width: 200px;
                    width: 100%;
                    margin-left: auto;
                    margin-right: -60px;
                    margin-top: -300px;
                }
                .gatsby-image-wrapper:nth-child(2) {
                    position: absolute !important;
                    max-width: 300px;
                    width: 100%;
                    right: 0;
                    margin-top: 120px;
                }
                .event {
                    background-color: #00385c;
                    padding: 10px 50px;
                    box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                    width: 75%;
                    margin-right: auto;
                    margin-top: 280px;
                    position: relative;
                    text-align: center;
                    padding-left: 100px;
                    padding-right: 80px;
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
            .right-col {
                position: relative;
                z-index: 1;
                width: 50%;
                position: relative;
                .right-image {
                    position: relative;
                    z-index: 1;
                }
                .award-set {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    display: flex;
                    align-items: flex-end;
                    padding: 0 20px;
                    z-index: 10;
                    .gatsby-image-wrapper {
                        width: 100%;
                        margin-bottom: -20px;
                    }
                }
            }
        }
    }
    .row-two {
        position: relative;
        z-index: 1;
        margin-bottom: 150px;
        .flex-row {
            display: flex;
            align-items: center;
            .left-col {
                width: 55%;
                position: relative;
                .left-image {
                    position: relative;
                    z-index: 1;
                }
                .left-content {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .gatsby-image-wrapper {
                        max-width: 600px;
                        width: 100%;
                        margin-top: -200px;
                    }
                    .event {
                        background-color: #c01e2e;
                        padding: 10px 50px;
                        box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                        width: 70%;
                        margin-right: auto;
                        position: relative;
                        margin-bottom: -30px;
                        padding-left: 150px;
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
            .right-col {
                width: 45%;
                position: relative;
                .right-image {
                    position: relative;
                    z-index: 1;
                }
                .right-content {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    display: flex;
                    justify-content: flex-end;
                    align-items: flex-end;
                    .gatsby-image-wrapper {
                        max-width: 500px;
                        width: 100%;
                        margin-right: 30px;
                        margin-bottom: -90px;
                    }
                }
            }
        }
    }
    .row-three {
        .flex-row {
            display: flex;
            .left-col {
                width: 80%;
                position: relative;
                z-index: 1;
            }
            .right-col {
                width: 30%;
                margin-left: -10%;
                position: relative;
                z-index: 2;
                .right-content {
                    .gatsby-image-wrapper {
                        max-width: 350px;
                        width: 100%;
                        margin-top: 50px;
                        margin-bottom: 30px;
                    }
                    .event {
                        background-color: #c01e2e;
                        padding: 10px 20px;
                        box-shadow: 20px 20px 20px rgba(0,0,0,.5);
                        width: 90%;
                        margin-left: auto;
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
    }
    .border-bottom {
        padding-top: 80px;
        padding-bottom: 80px;
    }
`

export default Section2022