import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll'

import HeroVideo from '../../videos/home_hero_new.mp4'
import { FaChevronDown } from 'react-icons/fa'


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

                <HeroMain>

                    <ImageBackground
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
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
                        <BackgroundImg sizes={post.node.acf.mobile_background.localFile.childImageSharp.sizes} alt={"Optomi Hero Background"}/>
                    </ImageBackground>

                    <HeroContainer className={"animate-2"}>
                        <HeroContent>
                            <HeroLogo sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={"Optomi Logo"} className={"animate-2"}/>
                            <h1 class="animate-3"><span class="freeland">part of the</span> Optomi Professional Services<sup>™</sup> <span class="freeland">family of brands</span></h1>
                        </HeroContent>
                    </HeroContainer>

                    <HeroContainer className={"animate-5"}>
                        <HeroContent>
                            <div class="animate-5">
                                <p class="animate-5">Driving tomorrow's technology</p>
                                <p class="animate-6">with today's optimum talent</p>
                            </div>
                        </HeroContent>
                    </HeroContainer>
                    
                </HeroMain>

                <HeroBottom
                    data-sal="slide-down"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                >
                    <button onClick={() => scrollTo('#mission_trigger')} aria-label="Scroll"><FaChevronDown size={32}/></button>
                </HeroBottom>
    
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
        font-size: 32px;
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
        @media(max-width: 1200px) {
            font-size: 28px;
        }
        @media(max-width: 600px) {
            font-size: 20px;
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
        @media(max-width: 1200px) {
            font-size: 42px;
        }
        @media(max-width: 600px) {
            font-size: 28px;
        }
        @media(max-width: 400px) {
            font-size: 20px;
        }
    }
    sup {
        top: -1.2em;
        font-size: 40%;
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
    position: absolute;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`

const HeroContent = styled.div`
    max-width: 1340px;
    width: 100%;
    padding: 0 20px;
    position: relative;
    z-index: 3;
    text-align: center;
    @media(max-width: 1200px) {
        max-width: 340px;
    }
`

const HeroLogo = styled(Img)`
    margin: 0 auto;
    max-width: 640px;
`


const HeroBottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 1;
    transition-delay: 3.5s;
    p {
        font-family: "Helvetica Thin";
        text-align: center;
        margin: 0;
        color: rgb(140, 145, 146);
    }
    button {
        color: #5ab3e8;
        background-color: transparent;
        border: none;
        outline: 0;
        &:hover {
            cursor: pointer;
        }
    }
`

export default HomeHero