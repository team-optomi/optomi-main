import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FoundersSlider from "../components/founders-slider"
import { FaChevronDown } from 'react-icons/fa'


const FoundersPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 37}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 1920) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                        acf {
                            meta_title
                            meta_description
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
                        <HeroName
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        >
                            <h2>Todd Black</h2>
                            <h3>Board Member</h3>
                        </HeroName>
                        <HeroName
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        >
                            <h2>Radka Winwood</h2>
                            <h3>CSO</h3>
                        </HeroName>
                        <HeroName
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        >
                            <h2>Christen Black</h2>
                            <h3>CMO</h3>
                        </HeroName>
                        <HeroName
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        >
                            <h2>Michael Winwood</h2>
                            <h3>Chairman & CEO</h3>
                        </HeroName>
                    </HeroMain>

                    <HeroBottom
                        data-sal="slide-down"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                    >
                        <button onClick={() => scrollTo('#founders_two')} aria-label="Scroll"><FaChevronDown size={32}/></button>
                    </HeroBottom>

                </HeroBanner>

                <SectionTwo id="founders_two">

                    <SectionTwoRow>
                        <SectionContent
                        dangerouslySetInnerHTML={{ __html: post.node.content }}
                        />
                    </SectionTwoRow>

                </SectionTwo>

                <FoundersSlider />

            </Layout>
            
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
    align-items: flex-end;
    justify-content: flex-end;
    z-index: 2;
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
    @media (max-width:600px) {
        position: relative;
        padding-top: 200px;
        height: auto;
    }
`

const HeroImg = styled(Img)`
    height: 100vh;
    width: 100%;
    max-height: 700px;
    img {
        margin-bottom: 0;
    }
    @media (max-width:600px) {
        width: 100vw;
        height: auto;
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
        position: absolute;
        top: 0;
        width: 100%;
        left: auto;
        padding: 20px;
        padding-top: 100px;
        text-align: center;
    }
`

const HeroMain = styled.div`
    max-width: 1540px;
    width: 100%;
    padding-left: 120px;
    padding-right: 120px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    @media(max-width:900px) {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media(max-width:600px) {
        padding-top: 30px;
        margin-bottom: 0;
        flex-wrap: wrap;
        justify-content: center;
    }
`

const HeroName = styled.div`
    padding: 0 20px;
    h2 {
        font-family: "BonVivant";
        color: #5ab3e8;
        font-size: 36px;
        line-height: 1.5;
        font-weight: 100;
        margin-bottom: 0;
        padding-right: 25px;
    }
    h3 {
        font-family: "Helvetica Thin";
        font-size: 14px;
        color: #5ab3e8;
        line-height: 1.2;
        letter-spacing: 4px;
        text-align: right;
    }
    &:nth-child(1) {
        transition-delay: .9s;
    }
    &:nth-child(2) {
        transition-delay: 1.2s;
    }
    &:nth-child(3) {
        transition-delay: 1.5s;
    }
    &:nth-child(4) {
        transition-delay: 1.8s;
    }
    @media(max-width:767px) {
        h2 {
            font-size: 24px;
        }
        h3 {
            font-size: 12px;
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
    @media(max-width:600px) {
        position: relative;
    }
`

const SectionTwo = styled.div`
    padding-top: 120px;
    padding-bottom: 120px;
`

const SectionTwoRow = styled.div`
    max-width: 1540px;
    width: 100%;
    padding-left: 120px;
    padding-right: 120px;
    margin: 0 auto;
    @media(max-width:768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

const SectionContent = styled.div`
    p {
        font-family: "Helvetica Thin";
        font-size: 24px;
        color: #fff;
        line-height: 1.2;
    }
`


export default FoundersPage