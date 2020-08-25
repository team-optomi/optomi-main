import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const MissionStatement = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 7}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 1200) {
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
        
        data.allWordpressWpHomeSection.edges.map(post => (
            <MainSection>

                <ImageBackground
                data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >
                    <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                </ImageBackground>

                <FirstRow>
                    <MissionContent 
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: post.node.content }}
                    />
                </FirstRow>
                    
            </MainSection>
        ))
    )
}

const MainSection = styled.div`
    background-color: #000;
    padding-top: 120px;
    padding-bottom: 80px;
    position: relative;
    z-index: 1;
    transition-duration: .3s;
    @media(max-width:1600px) {
        padding-top: 80px;
    }
`

const BackgroundImg = styled(Img)`
    height: 600px;
    width: 600px;
    transition-duration: .3s;
    img {
        margin-bottom: 0;
    }
    @media(max-width:1600px) {
        height: 500px;
        width: 500px;
    }
    @media(max-width:1200px) {
        height: 450px;
        width: 450px;
    }
`

const ImageBackground = styled.div`
    position: absolute;
    height: 600px;
    width: 600px;
    top: 0;
    right: 50px;
    transition-duration: .3s;
    @media(max-width:1600px) {
        height: 500px;
        width: 500px;
        right: 10px;
    }
    @media(max-width:1200px) {
        height: 450px;
        width: 450px;
    }
    @media(max-width: 1000px) {
        display: none;
    }
`

const FirstRow = styled.div`
    max-width: 1140px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    z-index: 2;
    @media(max-width:1200px) {
        max-width: 990px;
    }
`

const MissionContent = styled.div`
    text-align: left;
    h2 {
        font-family: "Helvetica Thin";
        font-size: 60px;
        color: #a6aaab;
        font-weight: 100;
        max-width: 720px;
        line-height: 1.2;
        letter-spacing: 1px;
        transition-duration: .3s;
        .bonvivant {
            font-family: "BonVivant";
            font-size: 80px;
            padding: 0 10px;
        }
    }
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 24px;
        line-height: 1.3;
        max-width: 700px;
        transition-duration: .3s;
    }
    @media(max-width:1350px) {
        h2 {
            max-width: 600px;
            font-size: 42px;
            .bonvivant {
                font-size: 60px;
            }
        }
        p {
            max-width: 580px;
            font-size: 20px;
        }
    }
    @media(max-width: 1000px) {
        h2,
        p {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
        }
    }
`

export default MissionStatement