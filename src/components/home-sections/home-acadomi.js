import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const Acadomi = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 38}}}}) {
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
                        acf {
                            top_title
                            button_content
                            button_link
                            logo {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1600) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            icon {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 600) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            tagline {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1000) {
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

            <Background>
                <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
            </Background>

            <MainRow>
                <TopTitle
                data-sal="slide"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >{post.node.acf.top_title}</TopTitle>
                <MainContent 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="600"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                <a 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="600"
                data-sal-easing="ease"
                href={post.node.acf.button_link}>{post.node.acf.button_content}</a>
                <div
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="900"
                data-sal-easing="ease"
                >
                <Logo sizes={post.node.acf.logo.localFile.childImageSharp.sizes} alt="Acadomi Logo" />
                <Icon sizes={post.node.acf.icon.localFile.childImageSharp.sizes} alt="Acadomi Icon" />
                <Tagline sizes={post.node.acf.tagline.localFile.childImageSharp.sizes} alt="Acadomi Tagline" />
                </div>
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
    z-index: 3;
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
    position: relative;
    z-index: 3;
    text-align: center;
    a {
        font-family: "Helvetica Thin";
        font-size: 28px;
        letter-spacing: 4px;
        color: #298fc2;
        text-transform: uppercase;
        text-decoration: none;
        line-height: 1.3;
        text-align: center;
        display: inline-block;
        margin-bottom: 20px;
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
`

const TopTitle = styled.h2`
    font-family: "BonVivant";
    color: #fff;
    text-align: center;
    font-size: 72px;
    font-weight: 100;
    line-height: 2.1;
    margin-bottom: -40px;
    @media(max-width:420px) {
        font-size: 48px;
        margin-bottom: 0;
    }
`

const MainContent = styled.div`
    text-align: center;
    p {
        font-family: "Helvetica Thin";
        font-size: 48px;
        color: #fff;
        line-height: 1.3;
        margin-bottom: 15px;
        @media(max-width:420px) {
            font-size: 32px;
        }
    }
`

const Logo = styled(Img)`
    max-width: 780px;
    width: 100%;
    margin: 0px auto;
    img {
        margin-bottom:0;
    }
`

const Icon = styled(Img)`
    max-width: 130px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: -10px;
    img {
        margin-bottom:0;
    }
`

const Tagline = styled(Img)`
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
`


export default Acadomi