import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const OurValues = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 76}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 2000) {
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

            <Background>
                <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
            </Background>
            
            <MainRow>
                <MainContent 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="600"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                <Link
                to={"/core-values/"}
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="600"
                data-sal-easing="ease">
                    discover how
                </Link>
            </MainRow>

        </MainSection>

        ))  
    )

}

const MainSection = styled.div`
    background-color: #000;
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;
    min-height: 70vh;
    width: 100%;
    z-index: 3;
    a {
        text-decoration: none;
    }
`

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const BackgroundImg = styled(Img)`
    width: 100%;
    height: 100%;
`

const MainRow = styled.div`
    max-width: 1340px;
    padding-right: 120px;
    padding-left: 120px;
    width: 100%;
    margin: 0 auto;
    z-index: 3;
    text-align: center;
    a {
        font-size: 28px;
        letter-spacing: 4px;
        text-decoration: none;
        text-align: center;
        display: inline-block;
        position: absolute;
        top: calc(50% - 30px);
        left: calc(50% - 120px);
        font-family: "BonVivant";
        color: #a6aaab;
        text-transform: none;
        width: 240px;
        height: 60px;
        border: 2px solid #a6aaab;
        line-height: 60px;
    }
    @media(max-width:1200px) {
        max-width: 1140px;
    }
    @media(max-width:1150px) {
        max-width: 940px;
    }
    @media(max-width:768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media(max-width:500px) {
        a {
            position: relative;
            top: 0;
            left: 0;
            margin: 20px; auto;
        }
    }
`

const MainContent = styled.div`
    text-align: left;
    position: relative;
    h2 {
        font-family: "BonVivant";
        color: #a6aaab;
        font-size: 72px;
        font-weight: 100;
        margin-bottom: 0;
        margin-left: -50px;
        text-transform: lowercase;
    }
    h3 {
        font-family: "Helvetica Thin";
        color: #a6aaab;
        font-size: 24px;
        letter-spacing: 5px;
        line-height: 1.3;
        text-decoration: none;
        margin-bottom: 0;
    }
    p {
        font-family: "Helvetica Thin";
        color: #a6aaab;
        font-size: 18px;
        line-height: 1.3;
    }
    @media(max-width:768px) {
        h2 {
            margin-left: 0;
            text-align: center;
        }
        h3 {
            text-align: center;
        }
        p {
            text-align: center;
            br {
                display: none;
            }
        }
    }
`


export default OurValues