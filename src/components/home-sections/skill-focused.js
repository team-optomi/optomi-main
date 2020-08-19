import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const SkillFocused = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 4}}}}) {
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
                    data-sal="slide-right"
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
    background-color: #a6aaab;
    padding-top: 60px;
    padding-bottom: 80px;
    position: relative;
    z-index: 1;
`

const MainContent = styled.div`
    max-width: 1340px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    h2 {
        font-family: "Helvetica Thin";
        font-size: 60px;
        color: #000;
        font-weight: 100;
        line-height: 1.2;
        letter-spacing: 1px;
        .bonvivant {
            font-family: "BonVivant";
            font-size: 80px;
            padding: 0 10px;
        }
    }
    p {
        font-family: "Helvetica Thin";
        color: #000;
        font-size: 32px;
        line-height: 1.3;
        max-width: 760px;
    }
`


export default SkillFocused