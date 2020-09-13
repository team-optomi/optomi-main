import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import HeroVideo from '../../videos/home_hero_new.mp4'


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
            <HeroBanner id={"heroBanner"}>

                <HeroMain className={"animate-1"}>

                <ImageBackground className={"animate-1"}>
                    <video
                    className="video-player"
                    height="100%"
                    width="100%"
                    loop
                    muted
                    autoPlay
                    >
                    <source
                        src={HeroVideo}
                        type="video/mp4"
                    />
                    </video>
                    <BackgroundImg sizes={post.node.acf.mobile_background.localFile.childImageSharp.sizes} alt={"Optomi Hero Background"} className={"animate-1"}/>
                </ImageBackground>

                <HeroContainer className={"animate-2"}>
                    <HeroContent className={"animate-2"}>
                        <HeroLogo sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={"Optomi Logo"} className={"animate-2"}/>
                    </HeroContent>
                </HeroContainer>

                </HeroMain>

                <HeroMain className={"animate-3"}>
                    <h1 class="animate-3"><span class="freeland">part of the</span> Optomi Professional Services<sup>™</sup> <span class="freeland">family of brands</span></h1>
                </HeroMain>

                <HeroMain className={"animate-4"}>

                    <div class="animate-4">
                        <p class="animate-4">Driving tomorrow's technology</p>
                        <p class="animate-5">with today's optimum talent</p>
                    </div>

                </HeroMain>
    
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
    z-index: 3;
    background-color: #000;
    overflow: hidden;
`

const HeroMain = styled.div`
    position: absolute;
    min-height: 100vh;
    min-width: 100%;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    z-index: 1;
    h1 {
        font-family: "Helvetica Thin";
        font-size: 42px;
        font-weight: 100;
        line-height: 1.2;
        color: #fff;
        text-align: center;
        max-width: 1340px;
        width: 100%;
        padding: 0 20px;
        span.freeland {
            font-family: "Freeland";
            font-weight: 100;
        }
    }
    p {
        font-family: "Helvetica Thin";
        font-size: 60px;
        font-weight: 100;
        line-height: 1.2;
        color: #fff;
        text-align: center;
        max-width: 1340px;
        width: 100%;
        padding: 0 20px;
        margin-bottom: 0;
    }
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
        display: block;
        position: absolute;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        @media screen and (max-aspect-ratio: 1920/1080) {
            height: 100%;
        }
        @media screen and (min-aspect-ratio: 1920/1080) {
            width: 100%;
        }
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
    z-index: 3;
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