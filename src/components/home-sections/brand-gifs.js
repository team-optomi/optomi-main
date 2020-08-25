import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import skillGIF from '../../gifs/skill-set.gif'
import techGIF from '../../gifs/tech.gif'
import consultantGIF from '../../gifs/consultant.gif'

const BrandGifs = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 6}}}}) {
                edges {
                    node {
                        content
                        acf {
                            section_one {
                                background {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 1920) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                            }
                            section_two {
                                background {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 1920) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                            }
                            section_three {
                                background {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 1920) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    
    return(
        
        data.allWordpressWpHomeSection.edges.map(post => (
            <MainSection>

                <MiddleContent 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                />

                <RowOne
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >
                    <BackgroundImg 
                    sizes={post.node.acf.section_one.background.localFile.childImageSharp.sizes} 
                    alt={"Skill-Set Focused Background"} 
                    />
                    <img src={skillGIF} alt="Skill-set focused" class="brand-gif" />
                </RowOne>

                <RowTwo
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >
                    <BackgroundImg 
                    sizes={post.node.acf.section_two.background.localFile.childImageSharp.sizes} 
                    alt={"Technology Driven Background"} 
                    />
                    <img src={techGIF} alt="Technology Driven" class="brand-gif" />
                </RowTwo>

                <RowThree
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >
                    <BackgroundImg 
                    sizes={post.node.acf.section_three.background.localFile.childImageSharp.sizes} 
                    alt={"Consultant Centered Background"} 
                    />
                    <img src={consultantGIF} alt="Consultant Centered" class="brand-gif" />
                </RowThree>
                    
            </MainSection>
        ))
    )
}

const MainSection = styled.div`
    background-color: #000;
    padding-top: 80px;
    padding-bottom: 0px;
    position: relative;
    z-index: 1;
`

const MiddleContent = styled.div`
    max-width: 1140px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    text-align: left; 
    transition-duration: .3s;
    p {
        font-family: "Helvetica Thin";
        color: #a6aaab;
        font-size: 24px;
        line-height: 1.3;
        letter-spacing: 4px;
        position: relative;
        margin-bottom: 100px;
        max-width: 950px;
        transition-duration: .3s;
        .bonvivant {
            font-family: "BonVivant";
            padding: 0 10px;
            letter-spacing: initial;
            text-align: right;
            font-size: 72px;
            position: absolute;
            top: -10px;
            right: -100px;
        }
    }
    @media(max-width:1200px) {
        max-width: 940px;
        p {
            font-size: 20px;
        }
    }
    @media(max-width:1150px) {
        p {
            text-align: center;
            .bonvivant {
                top: 0;
                right: calc(50% - 125px);
            }
        }
    }
`

const RowOne = styled.div`
    overflow: hidden;
    position: relative;
    .brand-gif {
        position: absolute;
        width: 100%;
        bottom: 0;
        right: 0;
    }
`

const RowTwo = styled.div`
    overflow: hidden;
    position: relative;
    .brand-gif {
        position: absolute;
        width: 100%;
        bottom: 0;
        right: 0;
    }
`

const RowThree = styled.div`
    overflow: hidden;
    position: relative;
    .brand-gif {
        position: absolute;
        width: 100%;
        bottom: 0;
        right: 0;
    }
`

const BackgroundImg = styled(Img)``

export default BrandGifs