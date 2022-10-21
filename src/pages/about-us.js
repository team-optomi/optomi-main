import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LeadershipSectionSimple from "../components/leadership-section-simple"
import { FaChevronDown } from 'react-icons/fa'

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
                                    sizes(maxWidth: 2800) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                        acf {
                            meta_title
                            meta_description
                            hero_content
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
                        <HeroContent 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: post.node.acf.hero_content }}
                        />
                    </HeroMain>

                    <HeroBottom
                        data-sal="slide-down"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                    >
                        <button onClick={() => scrollTo('#about_two')} aria-label="Scroll"><FaChevronDown size={32}/></button>
                    </HeroBottom>

                </HeroBanner>

                <SectionTwo id="about_two">

                    <SectionTwoRow>
                        <SectionContent 
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
                            to="/founders/"
                            >
                            Founders
                            </ButtonLink>
                            <ButtonLink
                            to="/giving/"
                            >
                            Giving Back
                            </ButtonLink>
                            <ButtonLink
                            to="/press/awards/"
                            >
                            Awards
                            </ButtonLink>
                            <ButtonLink
                            to="/history/"
                            >
                            History
                            </ButtonLink>
                        </ButtonSection>
                    </SectionTwoRow>

                </SectionTwo>

                <SectionThree>
                    <hr
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    />
                    <SectionThreeRow
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    >
                        <p class="large-para">Optomi Professional Services employs a team of innovative thinkers, industry disruptors, and refreshingly enterprising strategists influencing a more purpose-driven world.</p>
                        <p class="bonvivant">get to know us</p>
                        <button onClick={() => scrollTo('#leader_section')} aria-label="Scroll"><FaChevronDown size={32}/></button>
                    </SectionThreeRow>
                </SectionThree>

                <LeadershipSectionSimple />

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
    max-width: 1540px;
    width: 100%;
    padding-left: 120px;
    padding-right: 120px;
    margin: 0 auto;
    margin-bottom: 50px;
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
        max-width: 1340px;
    }
    @media(max-width:1200px) {
        max-width: 1140px;
    }
    @media(max-width:800px) {
        h3 {
            font-size: 24px;
            letter-spacing: 3px;
        }
    }
    @media(max-width:700px) {
        margin-top: 0;
        padding-left: 20px;
        padding-right: 20px;
    }
`


const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 900px;
    margin-left: auto;
    transition-delay: 2s;
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 24px;
        color: #fff;
        line-height: 1.2;
        margin-bottom: 35px;
        max-width: 1150px;
        span.bonvivant {
            font-family: "BonVivant";
            color: #fff;
            text-align: center;
            font-size: 46px;
            line-height: 1.5;
            font-weight: 100;
            margin-bottom: 10px;
            transition-duration: 2s;
            transition-delay: 1s;
        }
    }
    @media(max-width:1160px) {
        text-align: center;
        max-width: 700px;
        margin-right: auto;
    }
    @media(max-width:800px) {
        p {
            font-size: 20px;
            span.bonvivant {
                font-size: 32px;
            }
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

const SectionTwo = styled.div`
    background-color: #000;
`

const SectionTwoRow = styled.div`
    max-width: 1540px;
    width: 100%;
    padding-left: 120px;
    padding-right: 120px;
    margin: 0 auto;
    padding-top: 120px;
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
        transition-delay: .3s;
        @media(max-width: 960px) {
            text-align: center;
        }
    }
    @media(max-width:1500px) {
        max-width: 1340px;
    }
    @media(max-width:1200px) {
        max-width: 1140px;
    }
    @media(max-width:800px) {
        h3 {
            font-size: 24px;
            letter-spacing: 3px;
        }
    }
    @media(max-width:768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`


const SectionContent = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
    transition-delay: .3s;
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 24px;
        color: #8a8d8f;
        line-height: 1.2;
        margin-bottom: 35px;
    }
    @media(max-width:800px) {
        p {
            font-size: 20px;
        }
    }
`

const ButtonSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transition-delay: .3s;
    padding-top: 35px;
    padding-bottom: 120px;
    button,
    a {
        background: transparent;
        border: none;
        text-align: left;
        font-family: "Helvetica Thin";
        color: #5ab3e8;
        margin-bottom: 15px;
        font-size: 32px;
        font-weight: 100;
        line-height: 1.3;
        text-transform: uppercase;
        letter-spacing: 5px;
        padding: 0;
        margin: 10px 30px;
        outline: 0;
        text-decoration: none;
        &:hover {
            cursor: pointer;
        }
    }
    @media(max-width:1200px) {
        button,
        a {
            font-size: 24px;
            letter-spacing: 3px;
        }
    }
    @media(max-width:960px) {
        flex-direction: column;
        align-items: center;
    }
`

const ButtonLink = styled(Link)`
    font-family: "Helvetica Thin";
    color: #5ab3e8;
    margin-bottom: 0;
    font-size: 32px;
    font-weight: 100;
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-decoration: none;
    margin-bottom: 15px;
    @media(max-width:1200px) {
        font-size: 24px;
        letter-spacing: 3px;
    }
`

const SectionThree = styled.div`
    padding-bottom: 50px;
    hr {
        max-width: 800px;
        width: 50%;
        height: 1px;
        background-color: #8a8d8f;
        margin: 0 auto;
    }
`

const SectionThreeRow = styled.div`
    max-width: 1540px;
    width: 100%;
    padding-top: 100px;
    padding-left: 120px;
    padding-right: 120px;
    margin: 0 auto;
    text-align: center;
    .large-para {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 32px;
        color: rgb(90, 179, 232);
        line-height: 1.2;
        max-width: 1200px;
        margin: 0px auto;
        margin-bottom: 100px;
        @media(max-width:768px) {
            font-size: 24px;
        }
        @media(max-width:420px) {
            font-size: 20px;
        }
    }
    .bonvivant {
        font-family: "BonVivant";
        color: #fff;
        text-align: center;
        font-size: 46px;
        line-height: 1.5;
        font-weight: 100;
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
    @media(max-width:1500px) {
        max-width: 1340px;
    }
    @media(max-width:1200px) {
        max-width: 1140px;
    }
    @media(max-width:768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

export default AboutPage