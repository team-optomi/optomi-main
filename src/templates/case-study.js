import React from "react"
import BlogLayout from "../components/blog-layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from 'styled-components'

import PostFooter from "../components/post-footer"

const CaseStudyPost = ({ data }) => (
    <BlogLayout>
      <SEO 
        title={data.wordpressWpCaseStudy.acf.meta_title} 
        description={data.wordpressWpCaseStudy.acf.meta_description}
        image={data.wordpressWpCaseStudy.featured_media.localFile.childImageSharp.sizes}
        />
      <BlogContainer>
          <article>
            <FeaturedImg sizes={data.wordpressWpCaseStudy.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressWpCaseStudy.title} />
            <h1><span>{data.wordpressWpCaseStudy.date}</span>{data.wordpressWpCaseStudy.title}</h1>
            <p class={"blog-meta"}><span>Posted in </span>
            {data.wordpressWpCaseStudy.categories.map(category => (
                  <span>
                      {category.name}
                  </span>
              ))}
              <span> by </span>{data.wordpressWpCaseStudy.acf.custom_author}</p>
            <div dangerouslySetInnerHTML={{ __html: data.wordpressWpCaseStudy.content }} />
          </article>
          <PostFooter/>
      </BlogContainer>
    </BlogLayout>
)

const BlogContainer = styled.div`
  max-width: 1140px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;
  margin-top: 60px;
  article {
    h1 {
      font-family: "Raleway SemiBold";
      font-size: 24px;
      line-height: 1.38;
      color: #303030;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
      margin-bottom: 0;
      span {
        color: #bebebe;
        padding-right: 5px;
      }
    }
    p {
      margin-bottom: 22px;
      font-family: "Raleway";
      font-size: 14px;
      line-height: 26px;
      color: #818181;
      a {
        color: #5ab3e8;
        text-decoration: none !important;
      }
      &.blog-meta {
        color: #bebebe;
        font-weight: 500;
        margin-bottom: 18px;
        span {

        }
      }
    }
  }
`

const FeaturedImg = styled(Img)`
    margin-bottom: 25px;
`

export default CaseStudyPost

export const query = graphql`
query($id: Int!) {
  wordpressWpCaseStudy(wordpress_id: { eq: $id }) {
      title
      content
      date(formatString: "DD MMM")
      categories {
        name
      }
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
        custom_author
        meta_title
        meta_description
      }
    }
  }
`