import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Opt2GiveV2 = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 87}}}}) {
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
                            meta_title
                            meta_description
                            otg_vtwo_top_logo {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 800) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            otg_vtwo_page_background {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1707) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            otg_vtwo_main_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1707) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            otg_vtwo_button_link
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

                <PageBackground>
                    <Img sizes={post.node.acf.otg_vtwo_page_background.localFile.childImageSharp.sizes} alt="Digital Grid Background" />
                </PageBackground>

                <MainSection>
                    <Img sizes={post.node.acf.otg_vtwo_top_logo.localFile.childImageSharp.sizes} alt="Opt2Give Logo" className={"opt2give-logo"} />
                    <div dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                    <Img sizes={post.node.acf.otg_vtwo_main_image.localFile.childImageSharp.sizes} alt="Opt2Give Main" className={"opt2give-main"} />
                    <Link to={post.node.acf.otg_vtwo_button_link} className={"button"}>See all the ways we give back here</Link>
                </MainSection>

            </Layout>
            
        ))

    )

}

const PageBackground = styled.div`
    background-color: #000;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
    }
`

const MainSection = styled.section`
    padding-top: 100px;
    .opt2give-logo {
        max-width: 500px;
        margin: 0px auto;
        margin-bottom: 20px;
    }
    div {
        position: relative;
        z-index: 1;
    }
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 20px;
        line-height: 1.3;
        text-align: center;
        @media(max-width:800px) {
            padding: 0 20px;
            br {
                display: none;
            }
        }
    }
    a.button {
        font-family: "Helvetica Thin";
        padding: 10px 35px;
        display: inline-block;
        color: #fff;
        background-color: #801a20;
        margin: 50px auto;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        border: 1px solid #fff;
        border-radius: 15px;
        position: relative;
        z-index: 1;
        display: block;
        max-width: 250px;
        width: 100%;
    }
`

export default Opt2GiveV2