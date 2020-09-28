import React, { useEffect } from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const GivingBackV2 = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#giving_trigger",
                scrub: 0.5,
                start: 'top bottom',
                end: 'top 30%',
                id: 'giving_parallax',
                toggleActions: 'play reset play reset',
                },
            })
            tl.to('.gb-parallax', { opacity: '1' })
    
      }, []);

      const data = useStaticQuery(graphql`
      query {
        allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 3}}}}) {
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
                        logo {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 2355) {
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
            <MainSection id={"giving_trigger"}>

                <ImageBackground className="gb-parallax">
                    <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                </ImageBackground>

                <MainRow
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >
                    <MainDiv>
                        <MainContent 
                            dangerouslySetInnerHTML={{ __html: post.node.content }}
                        />
                        <Logo sizes={post.node.acf.logo.localFile.childImageSharp.sizes} alt={"Opt to Give"} />
                    </MainDiv>
                    
                </MainRow>
                
            </MainSection>
        ))
    );

}


const MainSection = styled.div`
    background-color: #aaa;
    position: relative;
    height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 2;
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
    z-index: -1;
    opacity: 0;
`

const MainRow = styled.div`
    max-width: 1540px;
    padding-right: 120px;
    padding-left: 120px;
    width: 100%;
    margin: 0 auto;
    @media(max-width:700px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

const MainDiv = styled.div`
    max-width: 390px;
    margin-left: auto;
    @media(max-width:500px) {
        margin-right: auto;
    }
`

const MainContent = styled.div`
    z-index: 2;
    position: relative;
    h2 {
        font-family: "BonVivant";
        color: #fff;
        text-align: center;
        font-size: 72px;
        font-weight: 100;
        margin-bottom: 50px;
        @media(max-width:1020px) {
            font-size: 60px;
        }
    }
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 24px;
        line-height: 1.3;
        @media(max-width:1020px) {
            font-size: 20px;
        }
    }
`

const Logo = styled(Img)`
    width: 300px;
    margin: 0 auto;
    @media(max-width: 350px) {
        width: 100%;
    }
`

export default GivingBackV2