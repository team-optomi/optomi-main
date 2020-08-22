import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const GivingBack = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 3}}}}) {
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
                            logo {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 2355) {
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
        
        data.allWordpressWpHomeSection.edges.map(post => (
            <MainSection>

                <ImageBackground>
                    <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                </ImageBackground>

                <MainRow
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >
                    <MainDiv>
                        <MainContent 
                            dangerouslySetInnerHTML={{ __html: post.node.content }}
                        />
                        <Logo sizes={post.node.acf.logo.localFile.childImageSharp.sizes} alt={"Opt to Give"} />
                    </MainDiv>
                    
                </MainRow>
                
            </MainSection>
        ))
    )
}

const MainSection = styled.div`
    position: relative;
    height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
`

const BackgroundImg = styled(Img)`
    height: 80vh;
    width: 100%;
    img {
        margin-bottom: 0;
    }
`

const ImageBackground = styled.div`
    position: absolute;
    height: 80vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 0;
`

const MainRow = styled.div`
    max-width: 1340px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
`

const MainDiv = styled.div`
    max-width: 390px;
    margin-left: auto;
`

const MainContent = styled.div`
    z-index: 2;
    position: relative;
    h2 {
        font-family: "BonVivant";
        color: #fff;
        text-align: center;
        font-size: 72px;
        font-weight: 100;
        margin-bottom: 50px;
    }
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 24px;
        line-height: 1.3;
    }
`

const Logo = styled(Img)`
    width: 300px;
    margin: 0 auto;
`

export default GivingBack