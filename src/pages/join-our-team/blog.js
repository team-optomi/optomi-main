import React from "react"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

import BlogLayout from "../../components/blog-layout"
import SEO from "../../components/seo"

const JoinBlogPage = ({ data }) => (
    <BlogLayout>
      {data.allWordpressWpCustomPage.edges.map(post => (
      <SEO 
      title={post.node.acf.meta_title} 
      description={post.node.acf.meta_description}
      image={post.node.featured_media.localFile.childImageSharp.sizes}
      />
      ))}
      <BlogGrid>
            <div class="top-content">
                <h1>OUR TEAM'S <span>Stories</span></h1>
            </div>
        {data.allWordpressWpJoinPost.edges.map(post => (
          <article>
              <div class="work-image-bg">
                    <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.featured_media.title} />
                </div>
                <div class="slide-overlay">
                    <Link to={`/join-our-team/blog/${post.node.slug}`} style={{ textDecoration: "none" }}>
                        <div>
                            <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                            <p>{post.node.date}</p>
                        </div>
                    </Link>
                </div>
          </article>
        ))}
      </BlogGrid>
    </BlogLayout>
  )

  const BlogGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #000;
    .top-content {
        width: 100%;
        padding: 20px;
        h1 {
            font-family: "Helvetica Thin";
            width: 100%;
            z-index: 1;
            font-size: 40px;
            letter-spacing: 2px;
            font-weight: 100;
            color: rgb(255,255,255);
            line-height: 1.3;
            margin-bottom: 50px;
            padding: 0 20px;
            text-align: center;
            span {
              font-family: BonVivant;
              font-weight: 100;
              font-size: 80px;
              position: relative;
              left: 0px;
              top: 0px;
            }
          }
    }
    article {
        width: 33.33%;
        height: 50vh;
        position: relative;
        padding: 0px;
        position: relative;
        outline: 0;
        .work-image-bg {
            height: 50vh;
            width: 100%;
        .gatsby-image-wrapper {
            height: 100%;
        }
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: .5;
            transition-duration: .3s;
        }
        }
        .slide-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            a {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                padding: 30px;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: flex-end;
                h2 {
                    font-family: "Helvetica Thin";
                    width: 100%;
                    z-index: 1;
                    font-size: 28px;
                    letter-spacing: 2px;
                    font-weight: 100;
                    color: rgb(255,255,255);
                    line-height: 1.3;
                    margin-bottom: 20px;
                    text-transform: uppercase;
                }
                p {
                    width: 100%;
                    font-family: BonVivant;
                    font-weight: 100;
                    font-size: 40px;
                    color: #fff;
                }
            }
        }
        &:hover {
            .work-image-bg {
                &:after {
                background-color: rgb(0, 40, 85);
                opacity: .8;
                }
            }
        }
    }
    @media(max-width:1100px) {
      article {
        width: 50%;
      }
    }
    @media(max-width:767px) {
      article {
        width: 100%;
      }
    }
    @media(max-width:500px) {
      article {
        height: 80vh;
      }
    }
  `
  
  export default JoinBlogPage
  
  export const query = graphql`
    query {
      allWordpressWpJoinPost {
        edges {
          node {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
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
      allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 97}}}}) {
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