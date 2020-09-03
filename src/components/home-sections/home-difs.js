import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const HomeDifs = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 6}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 842) {
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

                <ImageBackground>
                    <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                </ImageBackground>

                <MiddleContent 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                />

                <RowOne
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >
                    <p>[Row one content]</p>
                </RowOne>

                <RowTwo
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >
                    <p>[Row two content]</p>
                </RowTwo>

                <RowThree
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >
                    <p>[Row three content]</p>
                </RowThree>
                    
            </MainSection>
        ))
    )

}

const MainSection = styled.div`
    background-color: #000;
    padding-top: 80px;
    padding-bottom: 0px;
    position: relative;
    z-index: 2;
`

const ImageBackground = styled.div`
    position: absolute;
    width: 842px;
    height: 595px;
    left: 0;
    bottom: 0;
`

const BackgroundImg = styled(Img)`
    margin-bottom: 0;
`

const MiddleContent = styled.div`
    max-width: 1140px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    text-align: left; 
    transition-duration: .3s;
    p {
        font-family: "Helvetica Thin";
        color: #8a8d8f;
        font-size: 24px;
        line-height: 1.3;
        letter-spacing: 4px;
        position: relative;
        margin-bottom: 100px;
        max-width: 950px;
        transition-duration: .3s;
        .bonvivant {
            font-family: "BonVivant";
            padding: 0 10px;
            letter-spacing: initial;
            text-align: right;
            font-size: 72px;
            position: absolute;
            top: -10px;
            right: -100px;
        }
    }
    @media(max-width:1200px) {
        max-width: 940px;
        p {
            font-size: 20px;
        }
    }
    @media(max-width:1150px) {
        p {
            text-align: center;
            .bonvivant {
                top: 0;
                right: calc(50% - 125px);
            }
        }
    }
`

const RowOne = styled.div`
    position: relative;
    min-height: 30vh;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: #fff;
    }
`

const RowTwo = styled.div`
    position: relative;
    min-height: 30vh;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: #fff;
    }
`

const RowThree = styled.div`
    position: relative;
    min-height: 30vh;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: #fff;
    }
`

export default HomeDifs