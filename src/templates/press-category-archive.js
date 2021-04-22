import React from "react"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

import PressLayout from "../components/press/press-layout"
import PressSidebar from "../components/press/press-sidebar"
import SEO from "../components/seo"

class PressCategoryArchiveV2 extends React.Component {
    render() {
        const metas = this.props.data.allWordpressWpCustomPage.edges
        const posts = this.props.data.allWordpressWpPressRelease.edges

        const { metaTitle } = this.props.pageContext

      return (
        <PressLayout>
            {metas.map(meta => (
            <SEO 
                title={`${meta.node.acf.meta_title} - ${metaTitle}`}
                description={meta.node.acf.meta_description}
                image={meta.node.featured_media.localFile.childImageSharp.sizes}
            />
            ))}
            <PressMain>
                <PressRow>
                    <PressSidebar/>
                    <PressPrimary>
                        <h1>Optomi Press - {metaTitle}</h1>
                        {posts.map(post => (
                            <PressElement>
                                <article>
                                    <Link
                                        to={`/press/${post.node.slug}`}
                                    >
                                        <ImageContainer>
                                            <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                                        </ImageContainer>
                                        <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                                    </Link>
                                    <div class="excerpt" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                                    <p class="date">{post.node.date}</p>
                                </article>
                            </PressElement>
                        ))}    
                    </PressPrimary>
                </PressRow>
            </PressMain>
        </PressLayout>
      )
    }
  }


const PressMain = styled.div`
    width: 100%;
    padding: 100px 20px;
`

const PressRow = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
`

const PressPrimary = styled.div`
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    h1 {
        font-family: "Raleway SemiBold";
        width: 100%;
        text-align: center;
        @media(max-width:767px) {
            font-size: 1.7rem;
        }
    }
    @media(max-width:650px) {
        width: 100%;
        order: 1;
    }
`

const PressElement = styled.div`
    width: 50%;
    padding: 10px;
    transition-duration: .3s;
    > article {
        width: 100%;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: 0 4px 4px rgba(0,0,0,.1);
        padding-bottom: 20px;
    }
    a {
        text-decoration: none;
    }
    h2 {
        font-family: 'Open Sans',sans-serif;
        color: #303030;
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 600;
        line-height: 1.2;
        margin: 10px 0;
        padding: 0 20px;
    }
    .excerpt {
        font-family: 'Open Sans',sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 1px;
        color: #818181;
        padding: 0 20px;
    }
    p.date {
        font-family: 'Open Sans',sans-serif;
        font-size: 14px;
        line-height: 1.2;
        color: #303030;
        margin-bottom: 0;
        padding: 0 20px;
    }
    @media(max-width:900px) {
        width: 100%;
    }
`

const ImageContainer = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 250px;
    .gatsby-image-wrapper {
        width: 100%;
        height: 250px;
    }
`

export default PressCategoryArchiveV2

export const query = graphql`
    query pressByCategoryV2($category: String) {
        allWordpressWpPressRelease(
            filter: {categories: {elemMatch: {slug: {eq: $category}}}},
            sort: {fields: date, order: DESC} 
            ) {
            edges {
                node {
                  title
                  slug
                  excerpt
                  date(formatString: "DD MMMM, YY")
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
        allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 75}}}}) {
            edges {
                node {
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
                    }
                }
            }
        }
    }
  `