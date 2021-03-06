import React from "react"
import BlogLayout from "../components/blog-layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from 'styled-components'

import PostFooter from "../components/post-footer"

const BlogPost = ({ data }) => (
    <BlogLayout>
      <SEO 
        title={data.wordpressPost.acf.meta_title} 
        description={data.wordpressPost.acf.meta_description}
        image={data.wordpressPost.featured_media.localFile.childImageSharp.sizes}
        />
      <BlogContainer>
          <article>
            <FeaturedImg sizes={data.wordpressPost.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressPost.title} />
            <TitleSection>
              <p>{data.wordpressPost.date}</p>
              <h1 dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }}/>
            </TitleSection>
            <p class={"blog-meta"}><span>Posted in </span>
                  <span>
                      {data.wordpressPost.acf.custom_category}
                  </span>
              <span> by </span>{data.wordpressPost.acf.custom_author}</p>
            <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
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

const TitleSection = styled.div`
  display: flex;
  p {
    font-family: "Raleway SemiBold" !important;
    font-size: 24px !important;
    line-height: 1.38 !important;
    letter-spacing: 1px;
    font-weight: 600;
    margin-bottom: 0 !important;
    color: #bebebe !important;
    padding-right: 5px !important;
    text-transform: uppercase;
  }
  @media(max-width:600px) {
    display: block;
    p {
        font-size: 16px !important;
    }
}
`

export default BlogPost

export const query = graphql`
query($id: Int!) {
  wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      date(formatString: "DD MMM")
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
        custom_category
        meta_title
        meta_description
      }
    }
  }
`