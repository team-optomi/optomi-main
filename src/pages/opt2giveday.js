import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Opt2GiveDayPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 42}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 2048) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                        acf {
                            meta_title
                            meta_description
                            top_logo {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 810) {
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

                    <HeroMain>
                        <TopLogo sizes={post.node.acf.top_logo.localFile.childImageSharp.sizes} alt="Opt2GiveDay Logo" />
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
    justify-content: center;
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
    padding-left: 120px;
    padding-right: 120px;
    text-align: center;
    @media(max-width:768px) {
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 100px;
    }
`

const TopLogo = styled(Img)`
    max-width: 810px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
`

const Content = styled.div`
    p {
        font-family: "Helvetica Thin";
        color: #bbb;
        font-size: 24px;
        line-height: 1.3;
        a {
            color: #bbb;
            text-decoration: none;
        }
        &.large-print {
            font-size: 30px;
            color: #fff;
            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }
    @media(max-width:420px) {
        p {
            font-size: 20px;
            br {
                display: none;
            }
            &.large-print {
                font-size: 24px;
            }
        }
    }
`

export default Opt2GiveDayPage