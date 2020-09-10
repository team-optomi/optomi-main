import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SkillFocused from "../components/skill-focused.js"


const ServicesPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 13}}}}) {
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
                            second_paragraph
                            meta_title
                            meta_description
                        }
                    }
                }
            }
            allWordpressWpService(sort: {order: DESC, fields: date}) {
                edges {
                  node {
                    title
                    content
                    slug
                    featured_media {
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
    `)

    return(
        
        
            <Layout>
                {data.allWordpressWpCustomPage.edges.map(post => (
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />
                ))}

                {data.allWordpressWpCustomPage.edges.map(post => (
                <HeroBanner>

                    <HeroBackground>
                        <HeroImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title}/>
                    </HeroBackground>

                    <HeroContent>
                        <HeroTitle
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                        >
                            <h1>{post.node.title}</h1>
                            <p>Optomi <span>Technology</span> Talent</p>
                        </HeroTitle>
                        <div
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        >
                            <HeroCopy 
                                dangerouslySetInnerHTML={{ __html: post.node.content }}
                            />
                        </div>
                    </HeroContent>

                </HeroBanner>
                ))}

                <SkillFocused/>

                {data.allWordpressWpCustomPage.edges.map(post => (
                <SecondParagraph>
                    <div
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    >
                        <HeroCopy 
                            dangerouslySetInnerHTML={{ __html: post.node.acf.second_paragraph }}
                        />
                    </div>
                </SecondParagraph>
                ))}

                {data.allWordpressWpService.edges.map((post, i) => (
                    <ServiceBanner>
                        <Link
                        style={{textDecoration: 'none'}}
                        to= {`/service-offerings/${post.node.slug}`}
                        >
                            <ImageBackground
                            data-sal="slide-up"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title}/>
                            </ImageBackground>
                            <BannerContent className={i === 1 || i === 3 || i === 5 || i === 7 || i === 9 ? "odd" : "even"}>
                                <div
                                data-sal={i === 1 || i === 3 || i === 5 || i === 7 || i === 9 ? "slide-right" : "slide-left"}
                                data-sal-duration="1000"
                                data-sal-delay="900"
                                data-sal-easing="ease"
                                >
                                    
                                        <h2>{post.node.title}</h2>
                                    
                                    <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                                </div>
                            </BannerContent>
                        </Link>
                    </ServiceBanner>
                ))}
            </Layout>
    )
}

const HeroBanner = styled.div`
    position: relative; 
    width: 100%;
` 

const HeroImg = styled(Img)`
    height: 100%;
`

const BackgroundImg = styled(Img)`
    @media(max-width:1000px) {
        height: 100%;
    }
`

const HeroBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
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

const HeroContent = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    padding-top: 300px;
    padding-bottom: 50px;
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
    @media(max-width:1200px) {
        padding-bottom: 20px;
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
    &.even {
        text-align: right;
        p {
            margin-left: auto;
        }
    }
    @media(max-width:1000px) {
        position: relative;
        padding-top: 100px;
        padding-bottom: 100px;
    }
    @media(max-width:800px) {
        text-align: center;
        &.even {
            text-align: center;
        }
        p {
            margin-left: auto;
            margin-right: auto;
        }
    }
`

const SecondParagraph = styled.div`
    background-color: #000;
    padding-top: 80px;
    padding-bottom: 80px;
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
    &.even {
        text-align: right;
        p {
            margin-left: auto;
        }
    }
    @media(max-width:1000px) {
        position: relative;
        padding-top: 100px;
        padding-bottom: 100px;
    }
    @media(max-width:800px) {
        text-align: center;
        &.even {
            text-align: center;
        }
        p {
            margin-left: auto;
            margin-right: auto;
        }
    }
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
        @media(max-width:500px) {
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
        @media(max-width:500px) {
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

const HeroCopy = styled.div`
    max-width: 780px;
    width: 100%;
    margin: 0 auto;
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 32px;
        color: #fff;
        line-height: 1.2;
        transition-duration: .3s;
        text-align: center;
        &.bonvivant {
            font-family: "BonVivant";
            color: #fff;
            text-align: center;
            font-size: 60px;
            font-weight: 100;
            margin-top: 20px;
            padding-right: 120px;
        }
        br {
            display: none;
        }
    }
    @media(max-width:1200px) {
        p {
            font-size: 18px;
            &.bonvivant {
                font-size: 42px;
            }
        }
    }
    @media(max-width:1000px) {
        max-width: 600px;
        text-align: center;
        p {
            br {
                display: none;
            }
            &.bonvivant {
                padding-right: 0;
            }
        }
    }
`

const ServiceBanner = styled.div`
    position: relative; 
    width: 100%;
    h2 {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 80px;
        color: #fff;
        line-height: 1.2;
        font-weight: 100;
    }
    @media(max-width:1200px) {
        h2 {
            font-size: 60px;
        }
    }
    @media(max-width:500px) {
        h2 {
            font-size: 32px;
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
        max-width: 600px;
        span.large-text {
            font-size: 32px;
            padding: 0 5px;
            line-height: 1;
        }
    }
    @media(max-width:1200px) {
        p {
            font-size: 18px;
            span.large-text {
                font-size: 28px;
            }
        }
    }
`

export default ServicesPage