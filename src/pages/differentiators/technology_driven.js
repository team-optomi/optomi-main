import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const TechnologyDrivenPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 85}}}}) {
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
                            td_main_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 400) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
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
            <TopBanner>
                <div
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                class="background">
                    <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title}/>
                </div>
                <div 
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="900"
                data-sal-easing="ease"
                class="banner-content">
                    <h1>{post.node.title}</h1>
                    <Img sizes={post.node.acf.td_main_icon.localFile.childImageSharp.sizes} alt={post.node.acf.td_main_icon.title}/>
                </div>
            </TopBanner>
            <MainContent>
                <div 
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="900"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: post.node.content }}/>
            </MainContent>
        </Layout>
        ))
    )

}

const TopBanner = styled.section`
    position: relative;
    div.background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    div.banner-content {
        padding-top: 200px;
        padding-bottom: 100px;
        width: 100%;
        text-align: center;
        position: relative;
        z-index: 2;
        h1 {
            font-family: "Helvetica Thin";
            width: 100%;
            z-index: 1;
            font-size: 72px;
            color: rgb(255, 255, 255);
            line-height: 1.2;
            font-weight: 100;
        }
        .gatsby-image-wrapper {
            max-width: 600px;
            margin: 0 auto;
        }
        img {
            max-width: 600px;
            object-fit: contain !important;
            margin: 0 auto;
        }
    }
    @media(max-width:767px) {
        div.banner-content {
            h1 {
                font-size: 36px;
            }
        }
    }
`

const MainContent = styled.section`
    max-width: 1540px;
    width: 100%;
    padding-left: 120px;
    padding-right: 120px;
    padding-bottom: 50vh;
    margin: 0 auto;
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
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 24px;
        color: rgb(255, 255, 255);
        line-height: 1.6;
    }
    div {
        > div {
            max-width: 800px;
        }
    }
    div.align-right {
        text-align: right;
        margin-left: auto;
    }
    @media(max-width:767px) {
        div.align-right {
            text-align: center;
            margin-left: auto;
        }
        div {
            > div {
                max-width: 800px;
                margin: 0 auto;
                text-align: center;
                p {
                    font-size: 20px;
                }
            }
        }
    }
`

export default TechnologyDrivenPage