import React from "react"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

import BlogLayout from "../components/blog-layout"
import SEO from "../components/seo"

const ExplorePage = ({ data }) => (
    <BlogLayout>
      {data.pageContent.edges.map(post => (
      <SEO 
      title={post.node.acf.meta_title} 
      description={post.node.acf.meta_description}
      image={post.node.featured_media.localFile.childImageSharp.sizes}
      />
      ))}
      <BlogGrid>
        {data.titleIcon.edges.map(post => (
            <div class="top-content">
                <h1><span>Explore the Space</span></h1>
                <Img sizes={post.node.acf.location_tag_image.localFile.childImageSharp.sizes} alt={post.node.acf.location_tag_image.title} />
            </div>
        ))}
        <div class="top-menu">
          <ul>
            <li><Link to={"/explore-the-space/atlanta/"}>Atlanta</Link></li>
            <li><Link to={"/explore-the-space/charlotte/"}>Charlotte</Link></li>
            <li><Link to={"/explore-the-space/chicago/"}>Chicago</Link></li>
            <li><Link to={"/explore-the-space/dallas/"}>Dallas</Link></li>
            <li><Link to={"/explore-the-space/detroit/"}>Detroit</Link></li>
            <li><Link to={"/explore-the-space/mid-atlantic/"}>Mid-Atlantic</Link></li>
          </ul>
        </div>
        {data.pageContent.edges.map(post => (
          <div class="main-image">
            <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.featured_media.title} />
          </div>
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
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        h1 {
            font-family: "Helvetica Thin";
            z-index: 1;
            font-size: 40px;
            letter-spacing: 2px;
            font-weight: 100;
            color: rgb(255,255,255);
            line-height: 1.3;
            margin-bottom: 0px;
            margin-right: -70px;
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
        .gatsby-image-wrapper {
            max-width: 150px;
            width: 100%;
        }
    }
    .top-menu {
        width: 100%;
        padding: 0 20px;
        margin-bottom: 30px;
        ul {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin: 0;
          li {
            padding: 0 20px;
            a {
              font-family: "Helvetica Thin";
              color: rgb(41, 143, 194);
              font-size: 24px;
              letter-spacing: 3px;
              line-height: 1.3;
              text-align: center;
              text-transform: uppercase;
              text-decoration: none;
            }
          }
        }
      }
    .main-image {
        width: 70%;
        max-width: 800px;
        margin: 0 auto;
        margin-bottom: 50px;
    }
    @media(max-width:960px) {
        .top-content {
          h1 {
            span {
              font-size: 60px;
            }
          }
          .gatsby-image-wrapper {
            max-width: 100px;
          }
        }
      }
      @media(max-width:500px) {
        .top-content {
          h1 {
            span {
              font-size: 40px;
            }
          }
          .gatsby-image-wrapper {
            max-width: 80px;
          }
        }
        .top-menu {
          ul {
            li {
              a {
                font-size: 16px;
              }
            }
          }
        }
        .main-image {
            width: 90%;
        }
      }
  `
  
  export default ExplorePage
  
  export const query = graphql`
    query {
      titleIcon: allWordpressWpCustomPage(filter: {wordpress_id: {eq: 1713}}) {
        edges {
            node {
              acf {
                location_tag_image {
                      title
                      localFile {
                          childImageSharp {
                              sizes(maxWidth: 600) {
                                  ...GatsbyImageSharpSizes
                              }
                          }
                      }
                }
              }
            }
        }
      }
      pageContent: allWordpressWpCustomPage(filter: {wordpress_id: {eq: 1717}}) {
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