import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import DownloadFileOne from "../../downloads/employDrive_new_employee_self_serve_instructions.pdf"
import DownloadFileThree from "../../downloads/Optomi-2018-Consultant-Benefits-Guide.pdf"
import DownloadFileFour from "../../downloads/Nationwide-401k-Everybody-wants-in1.pdf"
import DownloadFileFive from "../../downloads/Consultants-FAQ-sheet.pdf"


const OOCCResources = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 47}}}}) {
                edges {
                    node {
                        acf {
                            optomi_resources_v2 {
                                resource_link
                                resource_name
                                resource_url
                              }
                        }
                    }
                }
            }
        }
    `)

    return(
        data.allWordpressWpCustomPage.edges.map(post => (
            <OOResourcesSection>
                <OOResourcesCopy>
                    <h2>Resources</h2>
                    {post.node.acf.optomi_resources_v2.map(resource => (
                        <p><a href={resource.resource_url} target="_blank" rel="noopener noreferrer">{resource.resource_name}</a></p>
                    ))}
                </OOResourcesCopy>
            </OOResourcesSection>
        ))
    )
}

const OOResourcesSection = styled.div`
    background-color: #000;
    padding: 100px 20px;
`

const OOResourcesCopy = styled.div`
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    h2 {
        color: #ffffff;
        font-family: 'Raleway', sans-serif;
        font-size: 30px;
        line-height: 35px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0px;
        text-transform: uppercase;
    }
    p {
        margin-bottom: 5px;
    }
    a {
        color: #ffffff;
        font-family: 'Raleway', sans-serif;
        font-size: 14px;
        line-height: 24px;
        font-style: normal;
        font-weight: 300;
    }
`

export default OOCCResources