import React from "react"
import BlogLayout from "../components/blog-layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from 'styled-components'

const JoinPost = ({ data }) => (
    <BlogLayout>
      <SEO 
        title={data.wordpressWpJoinPost.acf.meta_title} 
        description={data.wordpressWpJoinPost.acf.meta_description}
        image={data.wordpressWpJoinPost.featured_media.localFile.childImageSharp.sizes}
        />
      <BlogContainer>
          <article>
            <FeaturedImg sizes={data.wordpressWpJoinPost.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressWpJoinPost.title} />
            <TitleSection>
              <h1 dangerouslySetInnerHTML={{ __html: data.wordpressWpJoinPost.title }}/>
              <p>{data.wordpressWpJoinPost.date}</p>
            </TitleSection>
            <div dangerouslySetInnerHTML={{ __html: data.wordpressWpJoinPost.content }} />
            <div class="bottom-link">
                <p>FOR MORE INFORMATION, FOLLOW US ON <a href="https://www.linkedin.com/company/optomi/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
          </article>
      </BlogContainer>
    </BlogLayout>
)

const FeaturedImg = styled(Img)`
    margin: 0 auto;
    margin-bottom: 25px;
    max-height: 350px;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 40, 85);
        opacity: .8;
    }
`

const BlogContainer = styled.div`
  max-width: 1140px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;
  margin-top: 60px;
  article {
    h1 {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 36px;
        letter-spacing: 2px;
        font-weight: 100;
        line-height: 1.3;
        margin-bottom: 20px;
        text-transform: uppercase;
    }
    p, 
    li {
      margin-bottom: 22px;
      font-family: "Helvetica Thin";
      font-size: 20px;
      line-height: 1.5;
      color: #818181;
      a {
        color: #5ab3e8;
        text-decoration: none !important;
      }
      &.blog-meta {
        width: 100%;
        font-family: BonVivant;
        font-weight: 100;
        font-size: 40px;
      }
    }
    .bottom-link {
        margin-top: 100px;
        padding-bottom: 50px;
        p {
            font-family: "Helvetica Thin";
            a {
                font-family: BonVivant;
                font-weight: 100;
                font-size: 40px;
                color: #5ab3e8;
            }
        }
    }
  }
`

const TitleSection = styled.div`
  margin-bottom: 50px;
  p {
    width: 100%;
    font-family: BonVivant !important;
    font-weight: 100;
    font-size: 40px !important;
  }
  h1 {
    font-family: "Helvetica Thin";
    width: 100%;
    z-index: 1;
    font-size: 36px;
    letter-spacing: 2px;
    font-weight: 100;
    line-height: 1.3;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  @media(max-width:600px) {
      display: block;
      h1 {
        font-size: 20px;
        width: 100%;
      }
      p {
          font-size: 16px !important;
          width: 100%;
      }
  }
`

export default JoinPost

export const query = graphql`
query($id: Int!) {
    wordpressWpJoinPost(wordpress_id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      acf {
        meta_title
        meta_description
      }
      featured_media {
        localFile {
            childImageSharp {
                sizes(maxWidth: 1200) {
                    ...GatsbyImageSharpSizes_withWebp
                }
            }
        }
      }
    }
  }
`