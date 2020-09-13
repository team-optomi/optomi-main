import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ParticleBG from "../components/particle-bg"
import LeadershipSectionSimple from "../components/leadership-section-simple"

const AboutPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 26}}}}) {
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
                            awards_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1920) {
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
        
        data.allWordpressWpCustomPage.edges.map(post => (
            <Layout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />
                <HeroBanner>
                    <CanvasBackground>
                        <ParticleBG/>
                    </CanvasBackground>

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
                        <HeroContent 
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-easing="ease"
                            dangerouslySetInnerHTML={{ __html: post.node.content }}
                        />
                        <h3
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        >Optomi is driving tomorrow's technology with today's optimum talent.</h3>
                        <ButtonSection
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        >
                            <button onClick={() => scrollTo('#leader_section')} aria-label="Scroll">Leadership</button>
                            <ButtonLink
                            to="/"
                            >
                            Founders
                            </ButtonLink>
                            <ButtonLink
                            to="/giving-back/"
                            >
                            Giving Back
                            </ButtonLink>
                            <button onClick={() => scrollTo('#award_section')} aria-label="Scroll">Awards</button>
                        </ButtonSection>
                    </HeroMain>

                </HeroBanner>

                <LeadershipSectionSimple />

                <AwardSection  id={"award_section"} >
                    <div>
                        <AwardImg sizes={post.node.acf.awards_image.localFile.childImageSharp.sizes} alt={post.node.title}/>
                    </div>
                </AwardSection>

            </Layout>
            
        ))
    )
}

const HeroBanner = styled.div`
    position: relative; 
    min-height: 100vh;
    min-width: 100vw;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width:600px) {
        display: block;
    }
`

const CanvasBackground = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`

const HeroTitle = styled.div`
    position: absolute;
    top: 100px;
    left: 150px;
    h1 {
        font-family: "Helvetica Thin";
        color: #8a8d8f;
        margin-bottom: 0;
        text-transform: lowercase;
        font-size: 90px;
        font-weight: 100;
        line-height: 1;
        @media(max-width:1200px) {
            font-size: 82px;
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
    max-width: 1340px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    margin-top: 250px;
    position: relative;
    z-index: 2;
    h3 {
        font-family: "Helvetica Thin";
        color: #8a8d8f;
        margin-bottom: 0;
        font-size: 32px;
        font-weight: 100;
        line-height: 1.3;
        text-transform: uppercase;
        letter-spacing: 5px;
        max-width: 1000px;
        transition-delay: 3s;
    }
    @media(max-width:1500px) {
        max-width: 1140px;
    }
    @media(max-width:1200px) {
        max-width: 940px;
    }
    @media(max-width:800px) {
        h3 {
            font-size: 24px;
            letter-spacing: 3px;
        }
    }
    @media(max-width:600px) {
        margin-top: 0;
    }
`

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
    transition-delay: 2s;
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 24px;
        color: #8a8d8f;
        line-height: 1.2;
        margin-bottom: 35px;
        max-width: 1150px;
    }
    @media(max-width:800px) {
        p {
            font-size: 20px;
        }
    }
`

const ButtonSection = styled.div`
    display: flex;
    flex-direction: column;
    transition-delay: 4s;
    padding-top: 35px;
    padding-bottom: 80px;
    button {
        background: transparent;
        border: none;
        text-align: left;
        font-family: "Helvetica Thin";
        color: #8a8d8f;
        margin-bottom: 10px;
        font-size: 32px;
        font-weight: 100;
        line-height: 1.3;
        text-transform: uppercase;
        letter-spacing: 5px;
        padding: 0;
        outline: 0;
        &:hover {
            cursor: pointer;
        }
    }
    @media(max-width:800px) {
        button {
            font-size: 24px;
            letter-spacing: 3px;
        }
    }
`

const ButtonLink = styled(Link)`
    font-family: "Helvetica Thin";
    color: #8a8d8f;
    margin-bottom: 0;
    font-size: 32px;
    font-weight: 100;
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-decoration: none;
    margin-bottom: 10px;
    @media(max-width:800px) {
        font-size: 24px;
        letter-spacing: 3px;
    }
`

const AwardSection = styled.div`
    background-color: #000;
    padding-top: 200px;
    padding-bottom: 200px;
    > div {
        max-width: 1340px;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0 auto;
    }
`

const AwardImg = styled(Img)`

`

export default AboutPage