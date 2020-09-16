import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
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
                            section_one {
                                background_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 2800) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                header
                                main_content
                            }
                            section_two {
                                background_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 2800) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                header
                                main_content
                            }
                            section_three {
                                background_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 2800) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                header
                                main_content
                            }
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
                        <button onClick={() => scrollTo('#section_one')} aria-label="Scroll"><FaChevronDown size={32}/></button>
                    </HeroBottom>

                </HeroBanner>

                <DifBanner id={"section_one"}>
                    <ImageBackground
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <BackgroundImg sizes={post.node.acf.section_one.background_image.localFile.childImageSharp.sizes} alt={post.node.acf.section_one.header}/>
                    </ImageBackground>
                    <BannerContent className="text-right">
                        <div
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        >
                            <h2>{post.node.acf.section_one.header}</h2>
                            <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_one.main_content }}/>
                        </div>
                    </BannerContent>
                </DifBanner>

                <DifBanner>
                    <ImageBackground
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <BackgroundImg sizes={post.node.acf.section_two.background_image.localFile.childImageSharp.sizes} alt={post.node.acf.section_two.header}/>
                    </ImageBackground>
                    <BannerContent className="text-center">
                        <div
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        >
                            <h2 style={{marginTop: '150px'}}>{post.node.acf.section_two.header}</h2>
                            <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_two.main_content }}/>
                        </div>
                    </BannerContent>
                </DifBanner>

                <DifBanner>
                    <ImageBackground
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <BackgroundImg sizes={post.node.acf.section_three.background_image.localFile.childImageSharp.sizes} alt={post.node.acf.section_three.header}/>
                    </ImageBackground>
                    <BannerContent>
                        <div
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        >
                            <h2>{post.node.acf.section_three.header}</h2>
                            <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_three.main_content }}/>
                        </div>
                    </BannerContent>
                </DifBanner>


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

const ImageBackground = styled.div`
    position: relative;
    z-index: 1;
    @media(max-width:1000px) {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
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
    max-width: 1340px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
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
        font-size: 36px;
        font-weight: 100;
        line-height: 1;
        transition-delay: 4s;
    }
    @media(max-width:1500px) {
        max-width: 1140px;
        h2 {
            font-size: 60px;
        }
    }
    @media(max-width:1200px) {
        max-width: 940px;
    }
    @media(max-width:1000px) {
        text-align: center;
    }
    @media(max-width: 770px) {
        margin-top: 0;
        h2 {
            font-size: 42px;
        }
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


const DifBanner = styled.div`
    position: relative; 
    width: 100%;
    h2 {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 72px;
        color: #fff;
        line-height: 1.2;
        font-weight: 100;
    }
    @media(max-width:1500px) {
        h2 {
            font-size: 60px;
        }
    }
    @media(max-width:770px) {
        h2 {
            font-size: 42px;
        }
    }
    @media(max-width:500px) {
        h2 {
            font-size: 32px;
        }
    }
`

const BackgroundImg = styled(Img)`
    @media(max-width:1000px) {
        height: 100%;
    }
`

const BannerContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 2;
    > div {
        max-width: 1340px;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0 auto;
        transition-duration: .3s;
        @media(max-width:1500px) {
            max-width: 1140px;
        }
        @media(max-width:1200px) {
            max-width: 940px;
        }
    }
    &.text-right {
        text-align: right;
        p {
            margin-left: auto;
        }
    }
    &.text-center {
        text-align: center;
        p {
            margin-left: auto;
            margin-right: auto;
        }
    }
    @media(max-width:1000px) {
        position: relative;
        padding-top: 100px;
        padding-bottom: 100px;
    }
    @media(max-width:800px) {
        text-align: center;
        &.text-right {
            text-align: center;
        }
        p {
            margin-left: auto;
            margin-right: auto;
        }
    }
`


const BannerCopy = styled.div`
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 20px;
        color: #fff;
        line-height: 1.6;
        max-width: 900px;
    }
    @media(max-width:1200px) {
        p {
            font-size: 18px;
        }
    }
`

export default DifferentiatorsPage