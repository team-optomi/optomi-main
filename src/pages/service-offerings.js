import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"


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
                title={post.node.title} 
                />
                ))}

                {data.allWordpressWpCustomPage.edges.map(post => (
                <HeroBanner>

                    <HeroBackground>
                        <HeroImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title}/>
                    </HeroBackground>

                    <HeroContent>
                        <div>
                            <HeroTitle
                                data-sal="slide-right"
                                data-sal-duration="1000"
                                data-sal-delay="300"
                                data-sal-easing="ease"
                            >
                                <h1>{post.node.title}</h1>
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
                        </div>
                    </HeroContent>

                </HeroBanner>
                ))}
                {data.allWordpressWpService.edges.map((post, i) => (
                    <ServiceBanner>
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
                                <Link
                                style={{textDecoration: 'none'}}
                                to= {`/jobs/${post.node.slug}`}
                                >
                                    <h2>{post.node.title}</h2>
                                </Link>
                                <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                            </div>
                        </BannerContent>
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
    padding-top: 200px;
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

const HeroTitle = styled.div`
    width: 100%;
    h1 {
        font-family: "Helvetica Thin";
        color: #a6aaab;
        margin-bottom: 0;
        text-transform: uppercase;
        font-size: 80px;
        letter-spacing: 20px;
        font-weight: 100;
        line-height: 1;
        margin-bottom: 70px;
    }
    @media(max-width:1200px) {
        h1 {
            font-size: 60px;
            margin-bottom: 35px;
        }
    }
    @media(max-width:1000px) {
        h1 {
            font-size: 42px;
            letter-spacing: 10px;
            text-align: center;
        }
    }
    @media(max-width:500px) {
        h1 {
            font-size: 28px;
        }
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
        font-size: 20px;
        color: #fff;
        line-height: 1.2;
        transition-duration: .3s;
        &.bonvivant {
            font-family: "BonVivant";
            color: #fff;
            text-align: center;
            font-size: 60px;
            font-weight: 100;
            margin-top: 20px;
            padding-right: 120px;
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