import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import SectionOne from "../../components/culture-galleries/section-one"
import SectionTwo from "../../components/culture-galleries/section-two"
import SectionThree from "../../components/culture-galleries/section-three"
import SectionFour from "../../components/culture-galleries/section-four"
import SectionFive from "../../components/culture-galleries/section-five"
import SectionSix from "../../components/culture-galleries/section-six"
import SectionSeven from "../../components/culture-galleries/section-seven"

const OurCulturePageV2 = () => {

    const data = useStaticQuery(graphql`
        query {
            pageContent: allWordpressWpCustomPage(filter: {wordpress_id: {eq: 2088}}) {
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
                            meta_title
                            meta_description
                            cv2_background_image {
                                title
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
        }
    `)

    return(
        
        data.pageContent.edges.map(post => (
            <Layout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />
                <PageBackground>
                    <Img className="bg-image" sizes={post.node.acf.cv2_background_image.localFile.childImageSharp.sizes} alt={post.node.acf.cv2_background_image.title}  />
                </PageBackground>

                <PageTitle
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                >
                    <h1>{post.node.title}</h1>
                    <p>Optomi <span>Technology</span> Talent</p>
                </PageTitle>

                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
                <SectionSeven />

            </Layout>
            
            ))
        )

}

const PageBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 493px);
    .gatsby-image-wrapper {
        height: 100%;
    }
`

const PageTitle = styled.header`
    position: absolute;
    top: 100px;
    left: 150px;
    z-index: 2;
    h1 {
        font-family: "Helvetica Thin";
        color: #5ab3e8;
        margin-bottom: 0;
        text-transform: lowercase;
        font-size: 72px;
        font-weight: 100;
        line-height: 1;
        @media(max-width:1200px) {
            font-size: 62px;
        }
        @media(max-width:850px) {
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
        @media(max-width:850px) {
            font-size: 18px;
        }
    }
    @media(max-width: 850px) {
        position: relative;
        top: auto;
        left: auto;
        padding: 20px;
        padding-top: 100px;
        text-align: center;
        width: 100%;
    }
`

export default OurCulturePageV2