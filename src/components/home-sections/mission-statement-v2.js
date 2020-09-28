import React, { useEffect } from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const MissionStatementV2 = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#mission_trigger",
                scrub: 0.5,
                start: 'top bottom',
                end: 'top 30%',
                id: 'mission_parallax',
                toggleActions: 'play reset play reset',
                },
            })
            tl.to('.ms-parallax', { opacity: '1' })
    
      }, []);

    const data = useStaticQuery(graphql`
      query {
        allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 7}}}}) {
            edges {
                node {
                    title
                    content
                    featured_media {
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 2800) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                    }
                    acf {
                        main_copy
                    }
                }
            }
        }
      }
    `)

      return(
        data.allWordpressWpHomeSection.edges.map(post => (
            <MainSection id={"mission_trigger"}>

                <ImageBackground className="ms-parallax">
                    <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                </ImageBackground>

                <FirstRow>
                    <MissionTitle
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                    />
                    <MissionContent 
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: post.node.acf.main_copy }}
                    />
                </FirstRow>
                    
            </MainSection>
        ))
      );

}

const MainSection = styled.div`
    background-color: #aaa;
    padding-top: 160px;
    padding-bottom: 120px;
    position: relative;
    z-index: 2;
    transition-duration: .3s;
    @media(max-width:1600px) {
        padding-top: 80px;
    }
`

const BackgroundImg = styled(Img)`
    height: 100vh;
`

const ImageBackground = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -2;
    opacity: 0;
`

const FirstRow = styled.div`
    max-width: 1340px;
    padding-right: 120px;
    padding-left: 120px;
    width: 100%;
    margin: 0 auto;
    z-index: 2;
    @media(max-width:1200px) {
        max-width: 990px;
    }
    @media(max-width:700px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

const MissionTitle = styled.div`
    text-align: left;
    h2 {
        font-family: "Helvetica Thin";
        font-size: 60px;
        color: #8a8d8f;
        font-weight: 100;
        max-width: 720px;
        line-height: 1;
        letter-spacing: 1px;
        transition-duration: .3s;
        .bonvivant {
            font-family: "BonVivant";
            font-size: 80px;
            padding: 0 10px;
        }
    }
    @media(max-width:1350px) {
        h2 {
            max-width: 600px;
            font-size: 42px;
            .bonvivant {
                font-size: 60px;
            }
        }
    }
    @media(max-width: 1000px) {
        h2 {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
        }
    }
`

const MissionContent = styled.div`
    text-align: left;
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 24px;
        line-height: 1.3;
        max-width: 700px;
        transition-duration: .3s;
    }
    @media(max-width:1350px) {
        p {
            max-width: 580px;
            font-size: 20px;
        }
    }
    @media(max-width: 1000px) {
        p {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
        }
    }
`

export default MissionStatementV2