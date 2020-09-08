import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import SkillLine from './skill-focused-line-v2'

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
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                />
                    
                <SkillLine/>

            </MainSection>
        ))
    )
}

const MainSection = styled.div`
    background-color: #8a8d8f;
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
    @media(max-width:1500px) {
        max-width: 1140px;
    }
    @media(max-width:1200px) {
        max-width: 940px;
        h2 {
            font-size: 42px;
            .bonvivant {
                font-size: 60px;
            }
        }
        p {
            font-size: 24px;
            max-width: 80%;
        }
    }
    @media(max-width:1000px) {
        text-align: center;
        p {
            margin-left: auto;
            margin-right: auto;
        }
    }
`


export default SkillFocused