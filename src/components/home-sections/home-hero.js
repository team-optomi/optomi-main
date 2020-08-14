import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const HomeHero = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 8}}}}) {
                edges {
                    node {
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 2000) {
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
        
        data.allWordpressWpHomeSection.edges.map(post => (
            <HeroBanner>
                <ImageBackground>
                    <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                </ImageBackground>

                <div>
                <HeroContent 
                    data-sal="fade"
                    data-sal-duration="2000"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                />
                </div>
    
            </HeroBanner>
        ))
    )
}

const HeroBanner = styled.div`
    position: relative; 
    min-height: 100vh;
    min-width: 100%;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    z-index: 1;
`
const BackgroundImg = styled(Img)`
    height: 100vh;
    width: 100%;
    img {
        margin-bottom: 0;
    }
`

const ImageBackground = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
`

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    min-width: 100vw;
    width: 100%;
    transition-delay: 1.8s;
    .home-hero {
        > .panel-grid-cell {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            .panel-first-child {
                width: 100%;
                padding: 0 20px;
                h1 {
                    font-family: "Helvetica Thin";
                    font-size: 48px;
                    font-weight: 300;
                    color: #5ab3e8;
                    max-width: 1000px;
                    margin: 0 auto;
                    margin-bottom: 20px;
                    @media(max-width:600px) {
                        font-size: 32px;
                    }
                    @media(max-width:420px) {
                        font-size: 20px;
                    }
                }
                p {
                    font-family: "Helvetica Thin";
                    font-size: 24px;
                    line-height: 1.2;
                    color: #8c9192;
                    @media(max-width:420px) {
                        font-size: 14px;
                        line-height: 1.2;
                    }
                }
            }
        }
    }
`

export default HomeHero