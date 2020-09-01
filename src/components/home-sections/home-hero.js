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
                        acf {
                            video_source {
                                source_url
                            }
                            mobile_background {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1912) {
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
    `)
    return(
        
        data.allWordpressWpHomeSection.edges.map(post => (
            <HeroBanner>
                <ImageBackground>
                    <video
                    className="video-player"
                    height="100%"
                    width="100%"
                    loop
                    muted
                    autoPlay
                    >
                    <source
                        src={post.node.acf.video_source.source_url}
                        type="video/mp4"
                    />
                    </video>
                    <BackgroundImg sizes={post.node.acf.mobile_background.localFile.childImageSharp.sizes} alt={"Optomi Hero Background"}/>
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
const BackgroundImg = styled(Img)`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: none;
    @media(max-width:800px) {
        display: block;
    }
`

const ImageBackground = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    video {
        position: absolute;
        z-index: 0;
        background-size: 100% 100%;
        top: 0px;
        left: 0px; /* fixed to left. Replace it by right if you want.*/
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        @media(max-width:800px) {
            display: none;
        }
    }
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