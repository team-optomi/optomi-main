import React from "react"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'
import OOLayout from "../../components/optomi-opportunities/oo-layout"
import SEO from "../../components/seo"


const OOAwardsPage = ({ data }) => (
    <OOLayout>
      {data.allWordpressWpCustomPage.edges.map(post => (
      <SEO 
      title={post.node.acf.meta_title} 
      description={post.node.acf.meta_description}
      image={post.node.featured_media.localFile.childImageSharp.sizes}
      />
      ))}
      <AwardsMain>
          <h1>Awards</h1>
          <hr/>
          <AwardsGrid>
          {data.allWordpressWpOoAward.edges.map(post => (
            <article>
                <Link to={`/optomi-opportunities/awards/${post.node.slug}`} style={{ textDecoration: "none" }}>
                    <BackgroundImg>
                        <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title}  />
                    </BackgroundImg>
                </Link>
            </article>
            ))}
          </AwardsGrid>
      </AwardsMain>
    </OOLayout>
  )

const AwardsMain = styled.div`
    padding: 200px 20px 100px;
    text-align: center;
    h1 {
        color: #fff;
    }
    hr {
        max-width: 75px;
        height: 1px;
        background-color: #aaa;
        margin: 0 auto;
        margin-bottom: 100px;
    }
`

const AwardsGrid = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    transition-duration: .3s;
    article {
        max-width: 275px;
        width: 100%;
    }
    @media(max-width:1160px) {
        max-width: 825px;
    }
    @media(max-width:890px) {
        max-width: 550px;
    }
    @media(max-width:610px) {
        max-width: 275px;
    }
`

const BackgroundImg = styled.div`
    img {
        filter: grayscale(1);
        transition-duration: .3s;
    }
    &:hover {
        img {
            filter: grayscale(0);
        }
    }
`

export default OOAwardsPage

export const query = graphql`
    query {
        allWordpressWpOoAward(sort: {fields: date, order: DESC}) {
            edges {
            node {
                title
                slug
                featured_media {
                    localFile {
                        childImageSharp {
                            sizes(maxWidth: 500) {
                                ...GatsbyImageSharpSizes
                            }
                        }
                    }
                }
            }
            }
        }
        allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 50}}}}) {
            edges {
            node {
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
                }
            }
            }
        }
    }
`