import React from "react"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

import BlogLayout from "../../components/blog-layout"
import SEO from "../../components/seo"

const JobOpeningPage = ({ data }) => (
    <BlogLayout>
      {data.allWordpressWpCustomPage.edges.map(post => (
      <SEO 
      title={post.node.acf.meta_title} 
      description={post.node.acf.meta_description}
      image={post.node.featured_media.localFile.childImageSharp.sizes}
      />
      ))}
      <JobGrid>
        {data.allWordpressWpCustomPage.edges.map(imgsrc => (
        <div class="page-bg">
          <Img fluid={imgsrc.node.featured_media.localFile.childImageSharp.fluid} alt={`Job Openings`}/>
        </div>
        ))}
        <div class="top-content">
            <h1>Job Openings</h1>
            <hr/>
        </div>
        <div class="flex-grid">
          {data.allWordpressWpJobOpening.edges.map(job => (
            <div class="job-square">
                <Link to={`/join-our-team${job.node.acf.job_opening_link}`}>
                  <div class="job-content">
                    <p class="job-number">{job.node.acf.number_of_listings}</p>
                    <h2>{job.node.title}</h2>
                    <p class="sub-description">{job.node.acf.jobs_sub_description}</p>
                  </div>
                </Link>
            </div>
          ))}
        </div>
      </JobGrid>
    </BlogLayout>
  )

  const JobGrid = styled.div`
    background-color: #000;
    padding-top: 40px;
    padding-bottom: 80px;
    .page-bg {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0.3;
      .gatsby-image-wrapper {
        height: 100%;
      }
    }
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
    .flex-grid {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .job-square {
        width: calc(33.33% - 40px);
        margin: 20px;
        background-color: #8b8f91;
        position: relative;
        transition-duration: .3s;
        a {
          position: relative;
          display: block;
          height: 100%;
          width: 100%;
          padding: 40px;
          text-decoration: none;
        }
        p.job-number {
          font-family: "Helvetica";
          font-weight: bold;
          color: #fff;
          font-size: 100px;
          font-weight: 900;
          line-height: 1;
        }
        h2 {
          font-family: "Helvetica Thin";
          font-weight: 100;
          color: #fff;
          font-size: 36px;
          line-height: 1.3;
          margin-bottom: 5px;
        }
        p.sub-description {
          font-family: "Helvetica Thin";
          font-weight: 100;
          color: #fff;
          font-size: 18px;
          line-height: 1.3;
          margin-bottom: 0px;
        }
        &:hover {
          background-color: #083A5D;
        }
      }
    }
    @media(max-width:1200px) {
      .flex-grid {
        padding: 0 10px;
        .job-square {
          width: calc(33.33% - 20px);
          margin: 10px;
          a {
            text-align: center;
          }
          h2 {
            font-size: 24px;
          }
        }
      }
    }
    @media(max-width:767px) {
      .flex-grid {
        padding: 0 5px;
        .job-square {
          width: calc(50% - 10px);
          margin: 5px;
          a {
            padding: 40px 20px;
          }
        }
      }
    }
    @media(max-width:500px) {
      .flex-grid {
        .job-square {
          width: calc(100%);
        }
      }
    }
  `
  
  export default JobOpeningPage
  
  export const query = graphql`
    query {
      allWordpressWpJobOpening(sort: {fields: date, order: DESC}) {
        edges {
          node {
            title
            acf {
                job_opening_link
                jobs_sub_description
                number_of_listings
            }
          }
        }
      }
      allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 1964}}}}) {
        edges {
          node {
            featured_media {
              localFile {
                  childImageSharp {
                      sizes(maxWidth: 1920) {
                          ...GatsbyImageSharpSizes
                      }
                      fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_tracedSVG
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