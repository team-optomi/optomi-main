import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const DifferentiatorsPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 12}}}}) {
                edges {
                    node {
                        title
                        content
                    }
                }
            }
        }
    `)

    return(
        
        data.allWordpressWpCustomPage.edges.map(post => (
            <Layout>
                <SEO 
                title={post.node.title} 
                />
                <ClientsBanner>
                    <ImageBackground>
                    </ImageBackground>

                    <HeroTitle
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                    >
                        <h1>{post.node.title}</h1>
                        <p>Optomi <span>Professional</span> Services</p>
                    </HeroTitle>

                    <HeroContent 
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: post.node.content }}
                    />
                </ClientsBanner>
            </Layout>
            
        ))
    )
}

const ClientsBanner = styled.div`
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

const ImageBackground = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
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

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    min-width: 100vw;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    margin-top: 100px;
    h2 {
        font-family: "Helvetica Thin";
        max-width: 800px;
        width: 100%;
        color: #fff;
        margin: 0 auto;
        margin-bottom: 20px;
        font-size: 77px;
        font-weight: 100;
        line-height: .8;
        .freeland {
            color: #5ab3e8;
            font-family: 'Freeland';
            font-size: 95px;
            padding-right: 170px;
            @media(max-width:600px) {
                font-size: 72px;
            }
            @media(max-width:500px) {
                font-size: 55px;
                padding: 0;
            }
        }
        .blue {
            color: #5ab3e8;
        }
        .uppercase {
            text-transform: uppercase;
            padding-left: 120px;
        }
        @media(max-width:600px) {
            font-size: 42px;
        }
        @media(max-width:500px) {
            font-size: 28px;
        }
    }
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 28px;
        color: #fff;
        line-height: 1.2;
        color: #fff;
        max-width: 1200px;
        margin: 0 auto;
        @media(max-width:1200px) {
            max-width: 990px
        }
        @media(max-width:600px) {
            font-size: 24px;
        }
        @media(max-width:500px) {
            font-size: 18px;
            color: #fff;
        }
        @media(max-width:360px) {
            display: none;
        }
    }
    @media(max-width:600px) {
        margin-top: 30px;
    }
`

export default DifferentiatorsPage