import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const JoinSectionEight = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpJoinBenefit {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            title
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 600) {
                                        ...GatsbyImageSharpSizes
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
        
        <MainSection>

            <MainContent>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="top-content">
                    <h2><span>Benefits</span></h2>
                    <p>OF WORKING AT OPTOMI INCLUDE:</p>
                </div>
                <div class="flex-row">
                    {data.allWordpressWpJoinBenefit.edges.map(post => (
                    <div 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="col-five">
                        <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.featured_media.title} />
                        <div class="tooltip" dangerouslySetInnerHTML={{ __html: post.node.content }} />
                    </div>
                    ))}
                </div>
                
            </MainContent>
                
        </MainSection>
        
    )

}

const MainSection = styled.section`
    position: relative;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 100px;
    padding-left: 20px;
    padding-right: 20px;
`

const MainContent = styled.div`
    .top-content {
        h2 {
            font-family: "Helvetica Thin";
            width: 100%;
            z-index: 1;
            font-size: 40px;
            letter-spacing: 2px;
            font-weight: 100;
            color: rgb(255,255,255);
            line-height: 1.3;
            margin-bottom: 20px;
            padding: 0 20px;
            text-align: center;
            span {
                font-family: BonVivant;
                font-weight: 100;
                font-size: 100px;
                position: relative;
                left: 0px;
                top: 20px;
            }
        }
        p {
            font-family: "Helvetica Thin";
            width: 100%;
            z-index: 1;
            font-size: 24px;
            color: rgb(255,255,255);
            line-height: 1.3;
            margin-bottom: 20px;
            text-align: center;
        }
    }
    .flex-row {
        display: flex;
        flex-wrap: wrap;
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
        .col-five {
            width: 20%;
            padding: 0 10px;
            position: relative;
            .tooltip {
                position: absolute;
                top: -50px;
                left: 0;
                width: 100%;
                height: auto;
                padding: 10px;
                background-color: #8e9191;
                border-radius: 10px;
                opacity: 0;
                transition-duration: .3s;
                p {
                    font-family: 'Helvetica Thin';
                    font-weight: 300;
                    font-size: 16px;
                    color: #fff;
                    line-height: 1.2;
                    text-align: center;
                    margin-bottom: 0;
                }
                &:after {
                    content: '';
                    position: absolute;
                    bottom: -50px;
                    left: calc(50% - 25px);
                    width: 50px;
                    height: 50px;
                    border-top: 25px solid #8e9191;
                    border-left: 25px solid transparent;
                    border-right: 25px solid transparent;
                }
            }
            &:hover {
                .tooltip {
                    opacity: 1;
                }
            }
        }
    }
    @media(max-width:1200px) {
        .flex-row {
            align-items: center;
            justify-content: center;
            .col-five {
                width: 25%;
                .tooltip {
                    p {
                        font-size: 16px;
                    }
                }
            }
        }
    }
    @media(max-width: 900px) {
        h2 {
            font-size: 28px;
            span {
              font-size: 72px !important;
            }
        }
        p {
            font-size: 20px;
        }
    }
    @media(max-width:767px) {
        .flex-row {
            .col-five {
                width: 33.33%;
            }
        }
    }
    @media(max-width:600px) {
        h2 {
            span {
              font-size: 44px !important;
            }
        }
        .flex-row {
            .col-five {
                width: 50%;
            }
        }
    }
`

export default JoinSectionEight