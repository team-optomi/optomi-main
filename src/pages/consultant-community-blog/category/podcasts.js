import React from "react"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

import CCLayout from "../../../components/consultant-community-blog/cc-layout"
import SEO from "../../../components/seo"
import OptomiLogo from "../../../components/logos/footer-logo"

const PodcastsPage = ({ data }) => (
    <CCLayout>
        {data.allWordpressWpCustomPage.edges.map(post => (
        <SEO 
        title={post.node.acf.meta_title} 
        description={post.node.acf.meta_description}
        image={post.node.featured_media.localFile.childImageSharp.sizes}
        />
        ))}
        <CCmain>
            <TitleSection>
                <Link
                to="/"
                >
                    <OptomiLogo/>
                </Link>
                <hr/>
                <h1>Podcasts</h1>
            </TitleSection>
            <CCrow>
                {data.allWordpressWpCcBlogPost.edges.map(post => (
                    <CategoryCol>
                        <article>
                            <a href={post.node.acf.media_link} target="_blank" rel="noopener noreferrer" aria-label="Link">
                                <ImageContainer>
                                    <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                                    <p class="date">{post.node.date}</p>
                                    <p class="read-more">Read More</p>
                                </ImageContainer>
                                <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                            </a>
                        </article>
                    </CategoryCol>
                ))}
            </CCrow>
        </CCmain>
    </CCLayout>
)


const CCmain = styled.div`
    width: 100%;
    padding: 100px 20px;
`

const TitleSection = styled.div`
    .gatsby-image-wrapper {
        margin: 0 auto;
        margin-bottom: 20px;
        width: 256px;
        height: 97px;
    }
    hr {
        max-width: 150px;
        width: 100%;
        height: 2px;
        background-color: #000;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    h1 {
        color: #000;
        text-align: center;
        margin-bottom: 80px;
    }
`

const CCrow = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
`

const CategoryCol = styled.div`
    width: 33.33%;
    text-align: center;
    margin-bottom: 50px;
    > article {
        max-width: 274px;
        margin: 0 auto;
    }
    a {
        text-decoration: none;
    }
    h2 {
        font-family: "Helvetica Thin";
        color: #000000;
        font-size: 20px;
        line-height: 1.2;
        margin: 5px 0;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
    }
    @media(max-width:1000px) {
        width: 50%;
    }
    @media(max-width:660px) {
        width: 100%;
    }
`

const ImageContainer = styled.div`
    position: relative;
    z-index: 1;
    width: 274px;
    height: 375px;
    .gatsby-image-wrapper {
        width: 274px;
        height: 375px;
    }
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, .75);
        z-index: 2;
        transition-duration: .3s;
        opacity: 0;
    }
    p.date {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgb(166, 170, 171);
        color: #fff;
        z-index: 4;
        padding: 4px 8px;
    }
    p.read-more {
        font-family: BonVivant;
        font-size: 38px;
        color: rgb(41, 143, 194);
        position: absolute;
        top: calc(50% - 20px);
        left: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin-bottom: 0;
        z-index: 3;
        transition-duration: .3s;
        opacity: 0;
    }
    &:hover {
        &:before {
            opacity: 1;
        }
        p.read-more {
            opacity: 1;
        }
    }
`

export default PodcastsPage

export const query = graphql`
    query {
        allWordpressWpCcBlogPost(filter: {categories: {elemMatch: {wordpress_id: {eq: 55}}}}, sort: {fields: date, order: DESC}) {
            edges {
                node {
                title
                slug
                date(formatString: "MMM DD")
                featured_media {
                    localFile {
                    childImageSharp {
                        sizes(maxWidth: 1200) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                    }
                }
                acf {
                    media_link
                }
                }
            }
        }
    allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 51}}}}) {
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