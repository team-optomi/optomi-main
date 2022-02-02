import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import BlogLayout from "../components/blog-layout"
import SEO from "../components/seo"

const SingleJobTemplate = ({ data }) => (
    
    <BlogLayout>
        <SEO 
        title={data.wordpressWpSingleJob.acf.meta_title} 
        description={data.wordpressWpSingleJob.acf.meta_description}
        image={data.wordpressWpSingleJob.featured_media.localFile.childImageSharp.sizes}
        />
        <TopBanner>   
            <div class="top-content">
                <h1>{data.wordpressWpSingleJob.title}</h1>
                <hr/>
            </div>
        </TopBanner>
        <JobDescription>
            <div class="content" dangerouslySetInnerHTML={{ __html: data.wordpressWpSingleJob.content }} />
            <div class="buttons">
                <Link to={`/join-our-team/job-opening/apply-now/?Location=${data.wordpressWpSingleJob.categories[0].name}&Position=${data.wordpressWpSingleJob.title}`}>Apply Now</Link>
                <Link to={`/join-our-team/job-opening/refer-a-friend/?Location=${data.wordpressWpSingleJob.categories[0].name}&Position=${data.wordpressWpSingleJob.title}`}>Refer a Friend</Link>
            </div>
        </JobDescription>
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
            margin: 0px auto;
            margin-top: 10px;
        }
    }
`

const JobDescription = styled.section`
    background-color: #000;
    padding: 40px 20px;
    div.content {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        p, li {
            font-family: "Helvetica Thin";
            font-weight: 100;
            color: #fff;
            font-size: 20px;
            line-height: 1.3;
        }
    }
    div.buttons {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        a {
            display: inline-block;
            border: 2px solid #fff;
            border-radius: 10px;
            margin-right: 20px;
            font-family: "Helvetica Thin";
            font-weight: 100;
            color: #fff;
            font-size: 20px;
            line-height: 1.3;
            padding: 10px 20px;
            text-decoration: none;
            transition-duration: .3s;
            &:hover {
                background-color: #fff;
                color: #000;
            }
        }
    }
`

export default SingleJobTemplate

export const query = graphql`
    query($id: Int!) {
        wordpressWpSingleJob(wordpress_id: { eq: $id }) {
            title
            content
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
            categories {
                name
                slug
            }
            acf {
                meta_title
                meta_description
            }
        }
    }
`