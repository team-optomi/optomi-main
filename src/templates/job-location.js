import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

import BlogLayout from "../components/blog-layout"
import SEO from "../components/seo"

const JobLocationTemplate = ({ data }) => (
    
    <BlogLayout>
      <SEO 
      title={data.wordpressWpJobOpening.acf.meta_title} 
      description={data.wordpressWpJobOpening.acf.meta_description}
      image={data.wordpressWpJobOpening.featured_media.localFile.childImageSharp.sizes}
      />
      <TopBanner>   
        <div class="top-content">
            <h1>{data.wordpressWpJobOpening.title} Job Openings</h1>
            <hr/>
        </div>
        <div class="banner-image">
            <Img fluid={data.wordpressWpJobOpening.featured_media.localFile.childImageSharp.fluid} alt={`${data.wordpressWpJobOpening.title} Job Openings`}/>
        </div>
      </TopBanner>
      <JobGrid>
        <div class="flex-grid">
            {data.allWordpressWpSingleJob.edges.map(job => (
                <div class="job-button">
                    <p>
                        <Link to={`/join-our-team/job-opening/${job.node.slug}`}>
                            {job.node.title}
                        </Link>
                    </p>
                </div>
            ))}
        </div>
      </JobGrid>
    </BlogLayout>
  )

const TopBanner = styled.div`
    background-color: #000;
    padding-top: 40px;
    .top-content {
      h1 {
        font-family: "Helvetica Thin";
        font-weight: 100;
        color: #fff;
        font-size: 24px;
        line-height: 1.3;
        margin-bottom: 0px;
        text-align: center;
        text-transform: uppercase;
      }
      hr {
        background-color: #fff;
        max-width: 50px;
        margin: 10px auto;
        margin-bottom: 40px;
      }
    }
`

const JobGrid = styled.section`
    background-color: #000;
    .flex-grid {
        display: flex;
        flex-wrap: wrap;
        max-width: 1040px;
        margin: 0 auto;
        padding: 40px 20px;
        .job-button {
            border: 2px solid #fff;
            border-radius: 10px;
            width: 100%;
            margin-bottom: 20px;
            p {
                font-family: "Helvetica Thin";
                font-weight: 100;
                color: #fff;
                font-size: 24px;
                line-height: 1.3;
                margin-bottom: 0px;
                width: 100%;
            }
            a {
                color: #fff;
                text-decoration: none;
                width: 100%;
                display: inline-block;
                padding: 10px 20px;
            }
        }
    }
`

export default JobLocationTemplate

export const query = graphql`
    query($id: Int!, $cat: Int!) {
        wordpressWpJobOpening(wordpress_id: { eq: $id }) {
            title
            featured_media {
                localFile {
                    childImageSharp {
                        sizes(maxWidth: 2000) {
                            ...GatsbyImageSharpSizes_withWebp
                        }
                        fluid(maxWidth: 2000) {
                            ...GatsbyImageSharpFluid_withWebp
                            ...GatsbyImageSharpFluidLimitPresentationSize
                        }
                    }
                }
            }
            acf {
                meta_title
                meta_description
            }
        }
        allWordpressWpSingleJob(filter: {categories: {elemMatch: {wordpress_id: {eq: $cat}}}}) {
            edges {
                node {
                    title
                    slug
                }
            }
        }
    }
`