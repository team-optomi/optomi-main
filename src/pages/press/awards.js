import React from "react"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'
import PressLayout from "../../components/press/press-layout"
import SEO from "../../components/seo"


const PressAwardsPage = ({ data }) => (
    <PressLayout>
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
          {data.allWordpressWpPressAward.edges.map(post => (
            <article>
                <Link to={post.node.acf.press_link} style={{ textDecoration: "none" }}>
                    <BackgroundImg>
                        <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title}  />
                    </BackgroundImg>
                    <HoverCopy>
                        <div>
                            <h2>{post.node.title}</h2>
                            <Button>Read More</Button>
                        </div>
                    </HoverCopy>
                </Link>
            </article>
            ))}
          </AwardsGrid>
      </AwardsMain>
    </PressLayout>
  )

const AwardsMain = styled.div`
    padding: 100px 20px 100px;
    text-align: center;
    h1 {
        font-family: "Raleway SemiBold";
        color: #000;
    }
    hr {
        max-width: 75px;
        height: 1px;
        background-color: #aaa;
        margin: 0 auto;
        margin-bottom: 100px;
    }
`

const BackgroundImg = styled.div`
    transition-duration: .3s;
`

const HoverCopy = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.7);
    transition-duration: .3s;
    opacity: 0;
    h2 {
        color: #fff;
        font-weight: 400;
        font-size: 20px;
        padding: 0 20px;
    }
`

const Button = styled.div`
    color: #fff;
    display: inline-block;
    padding: 5px 10px;
    border: 2px solid #fff;
    font-size: 14px;
    text-transform: uppercase;
    transition-duration: .3s;
    &:hover {
        background-color: #1abc9c;
        border-color: #1abc9c;
    }
`

const AwardsGrid = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    transition-duration: .3s;
    background-color: @fff;
    article {
        position: relative;
        max-width: 275px;
        width: 100%;
        border: 1px solid #000;
        overflow: hidden;
        &:hover {
            ${BackgroundImg} {
                transform: scale(1.1);
            }
            ${HoverCopy} {
                opacity: 1;
            }
        }
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

export default PressAwardsPage

export const query = graphql`
    query {
        allWordpressWpPressAward(sort: {fields: date, order: DESC}) {
            edges {
                node {
                    title
                    slug
                    featured_media {
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 280) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                    }
                    acf {
                        press_link
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