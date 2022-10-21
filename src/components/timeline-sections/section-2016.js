import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const Section2016 = () => {
    
    const data = useStaticQuery(graphql`
        query {
            sectionData: wordpressWpCustomPage(wordpress_id: {eq: 2221}) {
                acf {
                    timeline_2016_background {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 1920) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2016_award {
                        title
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 334) {
                                    ...GatsbyImageSharpSizes_noBase64
                                }
                            }
                        }
                    }
                    timeline_2016_bottom_border {
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
                <h2 class="section-year">2016</h2>
            </div>
            <div class="row-one">
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                class="row-bg">
                    <Img sizes={data.sectionData.acf.timeline_2016_background.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2016_background.title}/>
                </div>
                <div class="left-content">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    class="left-award">
                        <Img sizes={data.sectionData.acf.timeline_2016_award.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2016_award.title}/>
                    </div>
                </div>
            </div>
            <div 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            class="border-bottom">
                <Img sizes={data.sectionData.acf.timeline_2016_bottom_border.localFile.childImageSharp.sizes} alt={data.sectionData.acf.timeline_2016_bottom_border.title}/>
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
    .top-row {
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
            }
            @media(max-width:1000px) {
                font-size: 120px;
            }
            @media(max-width:767px) {
                font-size: 72px;
            }
        }
    }
    .row-one {
        position: relative;
        .row-bg {
            position: relative;
        }
        .left-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            .left-award {
                max-width: 334px;
                width: 100%;
                margin-top: -200px;
                margin-left: 10%;
                @media(max-width:1000px) {
                    max-width: 200px;
                    margin-top: -60px;
                }
                @media(max-width:767px) {
                    max-width: 100px;
                    margin-top: -20px;
                }
            }
        }
    }
    .border-bottom {
        padding-top: 80px;
        @media(max-width:767px) {
            padding-top: 40px;
        }
    }
`

export default Section2016