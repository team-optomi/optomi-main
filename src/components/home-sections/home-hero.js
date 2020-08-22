import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import heroGIF from '../../gifs/homehero.gif'

const HomeHero = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 8}}}}) {
                edges {
                    node {
                        title
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 800) {
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
                    <BackgroundImg 
                    src={heroGIF} 
                    alt={post.node.title} 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"/>
                </ImageBackground>

                <HeroContainer>
                    <HeroContent 
                        data-sal="slide-up"
                        data-sal-delay="1000"
                        data-sal-easing="ease"
                    >
                        <HeroLogo sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={"Optomi Logo"} />
                    </HeroContent>
                </HeroContainer>
    
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
const BackgroundImg = styled.img`
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
    background-color: #aaa;
`

const HeroContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

const HeroContent = styled.div`
    max-width: 640px;
    width: 100%;
    padding: 0 20px;
    transition-duration: 2s;
`

const HeroLogo = styled(Img)`
    margin-bottom: 0;
`

export default HomeHero