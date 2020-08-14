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
            <ThreeColSection id={"optomi-provalus-section"}>

                <ThreeColContent 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                />
                    
            </ThreeColSection>
        ))
    )
}

const ThreeColSection = styled.div`
    background-color: #000;
    padding-top: 60px;
    padding-bottom: 80px;
    position: relative;
    z-index: 1;
    border-top: 1px solid #8c9192;
`

const ThreeColContent = styled.div`
    max-width: 1140px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    h2 {
        font-family: "Helvetica Thin";
        color: #fff;
        text-align: center;
        font-size: 52px;
        font-weight: 300;
        line-height: 1;
        span {
            font-size: 25px;
        }
        @media(max-width:500px) {
            font-size: 32px;
            line-height: 1.1;
        }
    }
    p {
        font-family: "Helvetica Thin";
        font-size: 38px;
        color: #fff;
        font-weight: normal;
        line-height: 40px;
        text-align: center;
        @media(max-width:500px) {
            font-size: 28px;
            line-height: 1.1;
        }
    }
    @media(max-width:1200px) {
        max-width: 990px;
    }
`


export default SkillFocused