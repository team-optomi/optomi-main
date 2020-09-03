import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const JobPortal = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 5}}}}) {
                edges {
                    node {
                        content
                    }
                }
            }
        }
    `)
    
    return(
        
        data.allWordpressWpHomeSection.edges.map(post => (
            <MainSection>

                <MainContent 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                />
                    
            </MainSection>
        ))
    )
}

const MainSection = styled.div`
    background-color: #000;
    padding-top: 80px;
    padding-bottom: 0px;
    position: relative;
    z-index: 3;
    @media(max-width:1200px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

const MainContent = styled.div`
    max-width: 1140px;
    padding: 50px 20px;
    width: 100%;
    margin: 0 auto;
    border-top: 1px solid #a6aaab;
    h2 {
        font-family: "BonVivant";
        color: #fff;
        text-align: center;
        font-size: 72px;
        font-weight: 100;
        margin-bottom: 50px;
    }
    p {
        &.button-section {
            font-family: "Helvetica Thin";
            color: #fff;
            font-size: 32px;
            line-height: 1.3;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 5px;
            a {
                background-color: #298fc2;
                padding: 15px 70px;
                font-size: 24px;
                color: #fff;
                text-decoration: none;
                text-transform: lowercase;
            }
        }
        &.jobs-bottom {
            font-family: "Helvetica Thin";
            color: #fff;
            font-size: 32px;
            line-height: 1.3;
            text-align: center;
        }
    }
    @media(max-width:1200px) {
        max-width: 900px;
        padding-left: 0;
        padding-right: 0;
    }
    @media(max-width:1000px) {
        h2 {
            font-size: 60px;
        }
        a {
            display: inline-block;
            margin-top: 20px;
        }
        p {
            .jobs-bottom {
                font-size: 24px;
            }
        }
    }
`

export default JobPortal