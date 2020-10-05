import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Opt2GivePage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 41}}}}) {
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
                            first_logo {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 800) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            first_logo_link
                            tagline
                            second_logo {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 946) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            second_logo_link
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

                    <HeroMain>
                        <a href={post.node.acf.first_logo_link}>
                            <FirstLogo sizes={post.node.acf.first_logo.localFile.childImageSharp.sizes} alt="Opt2Give Logo" />
                        </a>
                        <Tagline dangerouslySetInnerHTML={{ __html: post.node.acf.tagline }} />
                        <a href={post.node.acf.second_logo_link}>
                            <SecondLogo sizes={post.node.acf.second_logo.localFile.childImageSharp.sizes} alt="Opt2Give Logo" />
                        </a>
                        <Content dangerouslySetInnerHTML={{ __html: post.node.content }} />
                    </HeroMain>
                </HeroBanner>
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
    align-items: center;
    justify-content: flex-end;
    @media (max-width:800px) {
        align-items: flex-start;
    }
    @media (max-width:600px) {
        display: block;
    }
`

const ImageBackground = styled.div`
    background-color: #000;
    position: absolute;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
`

const HeroImg = styled(Img)`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    img {
        margin-bottom: 0;
    }
`

const HeroMain = styled.div`
    position: relative;
    padding-right: 120px;
    text-align: right;
`

const FirstLogo = styled(Img)`
    max-width: 390px;
    margin-left: auto;
    margin-bottom: -50px;
`

const Tagline = styled.div`
    h1 {
        font-family: "BonVivant";
        color: #fff;
        font-size: 72px;
        font-weight: 100;
        line-height: 2.1;
        margin-bottom: 0;
    }
    p {
        font-family: "Helvetica Thin";
        color: #bbb;
        font-size: 18px;
        line-height: 1.3;
    }
`

const SecondLogo = styled(Img)`
    max-width: 800px;
    width: 100%;
    margin-left: auto;
    margin-bottom: 20px;
`

const Content = styled.div`
    p {
        font-family: "Helvetica Thin";
        color: #bbb;
        font-size: 18px;
        line-height: 1.3;
        a {
            color: #bbb;
            text-decoration: none;
        }
        &.large-print {
            font-size: 26px;
            color: #fff;
            a {
                color: #fff;
                text-decoration: none;
            }
        }
        &.giant-print {
            font-size: 30px;
            color: #fff;
            text-transform: uppercase;
            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }
`

export default Opt2GivePage