import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll'
import { FaChevronDown } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"

import CoreParticles from "../components/core-particles"

import CircleAnimation from "../components/circle-animation"

import Genuine from "../components/core-values-animated/genuine"
import Passionate from "../components/core-values-animated/passionate"
import Connected from "../components/core-values-animated/connected"
import Innovative from "../components/core-values-animated/innovative"
import Dedicated from "../components/core-values-animated/dedicated"
import Respectful from "../components/core-values-animated/respectful"

const ValuePage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 33}}}}) {
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
                            meta_title
                            meta_description
                            sub_heading
                        }
                    }
                }
            }
        }
    `)

    return(

        data.allWordpressWpCustomPage.edges.map(post => (
            <Layout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />
                <CoreParticles/>
                <HeroBanner>
                    <ImageBackground>
                        <HeroImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                    </ImageBackground>

                    <HeroTitle
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                    >
                        <h1>{post.node.title}</h1>
                        <p>Optomi <span>Technology</span> Talent</p>
                    </HeroTitle>

                    <HeroMain>
                        <h2 
                        data-sal="slide-up"
                        data-sal-easing="ease"
                        class="bonvivant">{post.node.acf.sub_heading}</h2>
                    </HeroMain>

                    <HeroBottom
                        data-sal="slide-down"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                    >
                        <button onClick={() => scrollTo('#core_two')} aria-label="Scroll"><FaChevronDown size={32}/></button>
                    </HeroBottom>
                    
                </HeroBanner>

                <ValueSection id="core_two">
                    <CircleAnimation/>
                    <ValueContent
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }} />
                    <h2
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    >we are...</h2>

                    <Genuine/>
                    <Passionate/>
                    <Connected/>
                    <Innovative/>
                    <Dedicated/>
                    <Respectful/>

                </ValueSection>

            </Layout>
            
        ))

    )

}


const HeroBanner = styled.div`
    position: relative; 
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
    @media (max-width:600px) {
        display: block;
    }
`

const ImageBackground = styled.div`
    background-color: #000;
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
`

const HeroImg = styled(Img)`
    height: 100vh;
    width: 100%;
    img {
        margin-bottom: 0;
    }
`

const HeroTitle = styled.div`
    position: absolute;
    top: 100px;
    left: 150px;
    h1 {
        font-family: "Helvetica Thin";
        color: #5ab3e8;
        margin-bottom: 0;
        text-transform: lowercase;
        font-size: 72px;
        font-weight: 100;
        line-height: 1;
        @media(max-width:1200px) {
            font-size: 62px;
        }
        @media(max-width:600px) {
            font-size: 52px;
        }
    }
    p {
        font-family: "Helvetica Thin";
        letter-spacing: 2px;
        width: 100%;
        text-align: center;
        z-index: 1;
        font-size: 20px;
        color: rgb(140,145,146);
        span {
            color: #5ab3e8;
        }
        @media(max-width:600px) {
            font-size: 18px;
        }
    }
    @media(max-width: 600px) {
        position: relative;
        top: auto;
        left: auto;
        padding: 20px;
        padding-top: 100px;
        text-align: center;
    }
`

const HeroMain = styled.div`
    max-width: 1140px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    position: relative;
    text-align: center;
    .bonvivant {
        font-family: "BonVivant";
        color: #fff;
        text-align: left;
        font-size: 90px;
        font-weight: 100;
        margin-bottom: 150px;
        transition-duration: 1s;
        transition-delay: 1s;
    }
    @media(max-width:1200px) {
        max-width: 940px;
        .bonvivant {
            font-size: 72px;
        }
    }
    @media(max-width:600px) {
        .bonvivant {
            font-size: 60px;
            text-align: center;
            margin-top: 100px;
            margin-bottom: 0;
        }
    }
`


const HeroBottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 1;
    transition-delay: 1.5s;
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

const ValueSection = styled.div`
    background-color: transparent;
    padding-top: 80px;
    position: relative;
    z-index: 2;
    h2 {
        font-family: "BonVivant";
        color: #fff;
        text-align: center;
        font-size: 90px;
        font-weight: 100;
        margin-bottom: 150px;
        transition-duration: 1s;
        transition-delay: 1s;
        @media(max-width:600px) {
            font-size: 72px;
        }
    }
`

const ValueContent = styled.div`
    max-width: 1140px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    position: relative;
    text-align: center;
    margin: 0 auto;
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 24px;
        color: #fff;
        line-height: 1.3;
        margin-bottom: 0;
    }
    @media(max-width:1200px) {
        max-width: 940px;
    }
    @media(max-width:600px) {
        p {
            font-size: 20px;
        }
    }
`

export default ValuePage