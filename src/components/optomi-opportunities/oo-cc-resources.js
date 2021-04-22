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
                            optomi_resources
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
                    <p><a href="https://optomi.bbo.bullhornstaffing.com/Login/" target="_blank" rel="noopener noreferrer">Bullhorn Timekeeping Portal</a></p>
                    <p><a href={DownloadFileOne} target="_blank" rel="noopener noreferrer">EmployDrive Self-Serve Instructions</a></p>
                    <p><a href="https://employdrive.myisolved.com/UserLogin.aspx" target="_blank" rel="noopener noreferrer">Log In to Select Benefits</a></p>
                    <p><a href="https://employdrive.myisolved.com/UserLogin.aspx" target="_blank" rel="noopener noreferrer">Log In to Set Up Direct Deposit</a></p>
                    <p><a href="/optomi-opportunities/referral" target="_blank" rel="noopener noreferrer">Referral Sheet</a></p>
                    <p><a href={DownloadFileThree} target="_blank" rel="noopener noreferrer">Benefits Guide</a></p>
                    <p><a href="https://www.nationwide.com/401k-retirement-plans.jsp" target="_blank" rel="noopener noreferrer">401K Website</a></p>
                    <p><a href={DownloadFileFour} target="_blank" rel="noopener noreferrer">401K Details</a></p>
                    <p><a href={DownloadFileFive} target="_blank" rel="noopener noreferrer">FAQ Sheet</a></p>
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