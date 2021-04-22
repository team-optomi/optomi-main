import React from "react"
import OOLayout from "../components/optomi-opportunities/oo-layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from 'styled-components'

const OOAward = ({ data }) => (
    <OOLayout>
      <SEO 
        title={data.wordpressWpOoAward.acf.meta_title} 
        description={data.wordpressWpOoAward.acf.meta_description}
        image={data.wordpressWpOoAward.featured_media.localFile.childImageSharp.sizes}
        />
      <BlogContainer>
          <article>
            <FeaturedImg sizes={data.wordpressWpOoAward.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressWpOoAward.title} />
            <TitleSection>
              <h1 dangerouslySetInnerHTML={{ __html: data.wordpressWpOoAward.title }}/>
            </TitleSection>
            <div dangerouslySetInnerHTML={{ __html: data.wordpressWpOoAward.content }} />
          </article>
      </BlogContainer>
    </OOLayout>
)


const BlogContainer = styled.div`
  max-width: 640px;
  padding: 150px 20px;
  margin: 0 auto;
  article {
    h1 {
      font-family: "Raleway SemiBold";
      font-size: 24px;
      line-height: 1.38;
      color: #a6aaab;
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
    max-width: 275px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
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
`

export default OOAward

export const query = graphql`
query($id: Int!) {
  wordpressWpOoAward(wordpress_id: { eq: $id }) {
      title
      content
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
`