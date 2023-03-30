import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import BlogLayout from "../components/blog-layout"
import StructuredJobData from "../components/structured-job-data"
import SEO from "../components/seo"

const SingleJobTemplate = ({ data }) => (
    
    <BlogLayout>
        <StructuredJobData 
         jobTitle={data.wordpressWpSingleJob.acf.job_title ? data.wordpressWpSingleJob.acf.job_title : 'N/A'} 
         jobDescription={data.wordpressWpSingleJob.acf.job_description ? data.wordpressWpSingleJob.acf.job_description : 'N/A'}
         jobDatePosted={data.wordpressWpSingleJob.acf.job_date_posted ? data.wordpressWpSingleJob.acf.job_date_posted : 'N/A'} 
         jobValidThrough={data.wordpressWpSingleJob.acf.job_valid_through ? data.wordpressWpSingleJob.acf.job_valid_through : 'N/A'}
         jobEmploymentType={data.wordpressWpSingleJob.acf.job_employment_type ? data.wordpressWpSingleJob.acf.job_employment_type : 'N/A'} 
         jobStreetAddress={data.wordpressWpSingleJob.acf.job_street_address ? data.wordpressWpSingleJob.acf.job_street_address : 'N/A'}
         jobCity={data.wordpressWpSingleJob.acf.job_city ? data.wordpressWpSingleJob.acf.job_city : 'N/A'}
         jobState={data.wordpressWpSingleJob.acf.job_state ? data.wordpressWpSingleJob.acf.job_state : 'N/A'}
         jobZipCode={data.wordpressWpSingleJob.acf.job_zip_code ? data.wordpressWpSingleJob.acf.job_zip_code : 'N/A'}
         jobSalary={data.wordpressWpSingleJob.acf.job_salary ? data.wordpressWpSingleJob.acf.job_salary : 'N/A'}
         jobMaxSalary={data.wordpressWpSingleJob.acf.job_max_salary ? data.wordpressWpSingleJob.acf.job_max_salary : 'N/A'}
         jobSalaryPer={data.wordpressWpSingleJob.acf.job_salary_per ? data.wordpressWpSingleJob.acf.job_salary_per : 'N/A'}
         jobSkills={data.wordpressWpSingleJob.acf.job_skills ? data.wordpressWpSingleJob.acf.job_skills : 'N/A'}
         jobQualifications={data.wordpressWpSingleJob.acf.job_qualifications ? data.wordpressWpSingleJob.acf.job_qualifications : 'N/A'}
         jobResponsibilities={data.wordpressWpSingleJob.acf.job_responsibilities ? data.wordpressWpSingleJob.acf.job_responsibilities : 'N/A'}
         jobEducationRequirements={data.wordpressWpSingleJob.acf.job_education_requirements ? data.wordpressWpSingleJob.acf.job_education_requirements : 'N/A'}
         jobExperienceRequirements={data.wordpressWpSingleJob.acf.job_experience_requirements ? data.wordpressWpSingleJob.acf.job_experience_requirements : 'N/A'}
        />
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
                job_city
                job_date_posted
                job_description
                job_education_requirements
                job_employment_type
                job_experience_requirements
                job_industry
                job_max_salary
                job_qualifications
                job_responsibilities
                job_salary
                job_salary_per
                job_skills
                job_state
                job_street_address
                job_title
                job_valid_through
                job_zip_code
                meta_title
                meta_description
            }
        }
    }
`