import React from "react"
import CCLayout from "../components/consultant-community-blog/cc-layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from 'styled-components'

import PostFooter from "../components/post-footer"

const CCBlogPost = ({ data }) => (
    <CCLayout>
      <SEO 
        title={data.wordpressWpCcBlogPost.acf.meta_title} 
        description={data.wordpressWpCcBlogPost.acf.meta_description}
        image={data.wordpressWpCcBlogPost.featured_media.localFile.childImageSharp.sizes}
        />
      <BlogContainer className= { (data.wordpressWpCcBlogPost.categories.map(category => ( category.name ))) == `CC Consultant of the Quarter` ? "consultant-quarter" : "no-class"}>
          <article>
            <FeaturedImg sizes={data.wordpressWpCcBlogPost.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressWpCcBlogPost.title} />
            <TitleSection>
              <p>{data.wordpressWpCcBlogPost.date}</p>
              <h1 dangerouslySetInnerHTML={{ __html: data.wordpressWpCcBlogPost.title }}/>
            </TitleSection>
            <div dangerouslySetInnerHTML={{ __html: data.wordpressWpCcBlogPost.content }} />
          </article>
          <PostFooter/>
      </BlogContainer>
    </CCLayout>
)

const FeaturedImg = styled(Img)`
    margin: 0 auto;
    margin-bottom: 25px;
    max-height: 650px;
`

const BlogContainer = styled.div`
  max-width: 1140px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;
  margin-top: 60px;
  &.consultant-quarter {
      ${FeaturedImg} {
        max-height: 400px;
        max-width: 400px;
      }
  }
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
    p, 
    li {
      margin-bottom: 22px;
      font-family: "Raleway";
      font-size: 20px;
      line-height: 1.5;
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

const TitleSection = styled.div`
  display: flex;
  margin-bottom: 50px;
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

export default CCBlogPost

export const query = graphql`
query($id: Int!) {
    wordpressWpCcBlogPost(wordpress_id: { eq: $id }) {
      title
      content
      date(formatString: "DD MMM")
      categories {
        name
        slug
      }
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
        meta_title
        meta_description
      }
    }
  }
`