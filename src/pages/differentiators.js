import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ParticleBG from "../components/particle-bg"
import { FaChevronDown } from 'react-icons/fa'

const DifferentiatorsPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 12}}}}) {
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
                            main_header
                            tagline
                            d_column_one_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 400) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            d_column_one_content
                            d_column_two_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 400) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            d_column_two_content
                            d_column_three_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 400) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            d_column_three_content
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
                        <h2
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        >{post.node.acf.main_header}</h2>
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
                        >{post.node.acf.tagline}</h3>
                    </HeroMain>

                    <HeroBottom
                        data-sal="slide-down"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                    >
                        <button onClick={() => scrollTo('#d_section_one')} aria-label="Scroll"><FaChevronDown size={32}/></button>
                    </HeroBottom>

                </HeroBanner>

                <FlexRow id="d_section_one">
                    <ThirdCol>
                        <Link to="/differentiators/skill_set_focused/">
                            <Img sizes={post.node.acf.d_column_one_icon.localFile.childImageSharp.sizes} alt={post.node.acf.d_column_one_icon.title}/>
                            <div dangerouslySetInnerHTML={{ __html: post.node.acf.d_column_one_content }}/>
                        </Link>
                    </ThirdCol>
                    <ThirdCol>
                        <Link to="/differentiators/consultant_centered/">
                            <Img sizes={post.node.acf.d_column_two_icon.localFile.childImageSharp.sizes} alt={post.node.acf.d_column_two_icon.title}/>
                            <div dangerouslySetInnerHTML={{ __html: post.node.acf.d_column_two_content }}/>
                        </Link>
                    </ThirdCol>
                    <ThirdCol>
                        <Link to="/differentiators/technology_driven/">
                            <Img sizes={post.node.acf.d_column_three_icon.localFile.childImageSharp.sizes} alt={post.node.acf.d_column_three_icon.title}/>
                            <div dangerouslySetInnerHTML={{ __html: post.node.acf.d_column_three_content }}/>
                        </Link>
                    </ThirdCol>
                </FlexRow>


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
    align-items: center;
    @media (max-width:770px) {
        align-items: flex-start;
    }
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
        color: #5ab3e8;
        margin-bottom: 0;
        text-transform: lowercase;
        font-size: 72px;
        font-weight: 100;
        line-height: 1;
        @media(max-width:1200px) {
            font-size: 62px;
        }
        @media(max-width:770px) {
            font-size: 52px;
        }
        @media(max-width:360px) {
            font-size: 36px;
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
        @media(max-width:770px) {
            font-size: 18px;
        }
    }
    @media(max-width: 770px) {
        position: relative;
        top: auto;
        left: auto;
        padding: 20px;
        padding-top: 100px;
        text-align: center;
        width: 100%;
    }
`

const HeroMain = styled.div`
    max-width: 1440px;
    width: 100%;
    padding-left: 120px;
    padding-right: 120px;
    margin: 0 auto;
    margin-top: 100px;
    position: relative;
    z-index: 2;
    h2 {
        transition-delay: 1.5s;
        font-family: "BonVivant";
        color: #8a8d8f;
        margin-bottom: 0;
        font-size: 72px;
        font-weight: 100;
        line-height: 1;
        margin-bottom: 60px;
        transition-delay: 2s;
    }
    h3 {
        font-family: "Helvetica Thin";
        color: #5ab3e8;
        margin-bottom: 0;
        padding-left: 100px;
        font-size: 36px;
        font-weight: 100;
        line-height: 1;
        transition-delay: 4s;
    }
    @media(max-width:1500px) {
        max-width: 1340px;
        h2 {
            font-size: 60px;
        }
    }
    @media(max-width:1200px) {
        max-width: 1140px;
    }
    @media(max-width:1000px) {
        text-align: center;
        h3 {
            padding-left: 0;
        }
    }
    @media(max-width: 770px) {
        margin-top: 0;
        h2 {
            font-size: 42px;
        }
    }
    @media(max-width:768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media(max-width: 500px) {
        h2 {
            font-size: 36px;
            margin-bottom: 20px;
        }
        p {
            font-size: 20px;
        }
        h3 {
            font-size: 28px;
        }
    }
`

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 650px;
    margin-left: auto;
    transition-delay: 3s;
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 24px;
        color: #8a8d8f;
        line-height: 1.2;
        margin-bottom: 60px;
    }
    @media(max-width:1000px) {
        margin-right: auto;
    }
`

const HeroBottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 1;
    transition-delay: 5s;
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

const FlexRow = styled.section`
    max-width: 1540px;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 120px;
    padding-right: 120px;
    margin: 0px auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media(max-width:1500px) {
        max-width: 1340px;
    }
    @media(max-width:1200px) {
        max-width: 1140px;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media(max-width:768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media(max-width:767px) {
        flex-wrap: wrap;
    }
`

const ThirdCol = styled.div`
    width: 30%;
    padding: 0 20px;
    text-align: center;
    a {
        text-decoration: none;
    }
    h2 {
        font-family: "Helvetica Thin";
        color: #5ab3e8;
        margin-top: 20px;
        margin-bottom: 30px;
        font-size: 38px;
        font-weight: 100;
        line-height: 1.2;
    }
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 18px;
        color: #8a8d8f;
        line-height: 1.2;
    }
    .gatsby-image-wrapper {
        height: 200px;
        width: 220px;
        margin: 0 auto !important;
    }
    img {
        max-width: 220px;
        max-height: 200px;
        object-fit: contain !important;
    }
    &:last-child {
        .gatsby-image-wrapper {
            width: 320px;
        }
        img {
            max-width: 320px;
        }
    }
    @media(max-width:1200px) {
        width: 50%;
    }
    @media(max-width:767px) {
        width: 100%;
    }
`

export default DifferentiatorsPage