import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const JoinPositionsSection = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpJoinSection(filter: {wordpress_id: {eq: 1797}}) {
                edges {
                    node {
                        content
                    }
                }
            }
        }
    `)

    return(
        
        data.allWordpressWpJoinSection.edges.map(post => (
            <MainSection>

                <div class="section-row" dangerouslySetInnerHTML={{ __html: post.node.content}} />
                    
            </MainSection>
        ))
    )

}

const MainSection = styled.section`
    background-color: #003354;
    padding: 100px 20px;
    margin-bottom: 50px;
    .section-row {
        max-width: 1500px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .position-col {
            width: 25%;
            min-height: 300px;
            text-align: center;
            padding: 10px 50px;
            border-right: 2px solid #fff;
            &:last-child {
                border-right: none;
            }
            h3 {
                font-family: "Helvetica Thin";
                letter-spacing: 2px;
                font-weight: 100;
                color: rgb(255,255,255);
                line-height: 1.3;
            }
            p {
                font-family: "Helvetica Thin";
                color: rgb(255,255,255);
                line-height: 1.3;
                margin-bottom: 0;
            }
        }
    }
    @media(max-width: 1520px) {
        .section-row {
            .position-col {
                min-height: 340px;
            }
        }
    }
    @media(max-width: 1300px) {
        .section-row {
            .position-col {
                min-height: 390px;
            }
        }
    }
    @media(max-width: 1200px) {
        padding-bottom: 50px;
        .section-row {
            max-width: 800px;
            flex-wrap: wrap;
            .position-col {
                width: 50%;
                border-right: none;
                min-height: auto;
                padding-bottom: 50px;
            }
        }
    }
    @media(max-width: 680px) {
        .section-row {
            max-width: 400px;
            .position-col {
                width: 100%;
                padding: 20px;
                padding-bottom: 50px;
            }
        }
    }
`

export default JoinPositionsSection