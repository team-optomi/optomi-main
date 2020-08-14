import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const HomeFooter = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 2}}}}) {
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
            <BottomSection>
                <div 
                    class={"bottom-row"}
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                >
                <BottomContent dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                </div>
            </BottomSection>
        ))
    )
}

const BottomSection = styled.div`
    background-color: #000;
    padding-bottom: 70px;
    position: relative;
    z-index: 1;
    .bottom-row {
        max-width: 1140px;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0 auto;
    }
`

const BottomContent = styled.div`
    text-align: center;
    h2 {
        font-family: "Helvetica Thin";
        color: #5ab3e8;
        font-size: 45px;
        line-height: 1.375em;
        font-weight: 100;
        margin-bottom: 0;
    }
    p {
        font-family: "Helvetica Thin";
        color: #9b9b9b;
        font-size: 30px;
        line-height: 1;
        margin-bottom: 5px;
    }
    .blue {
        font-family: "Helvetica Thin";
        font-size: 35px;
        color: #5ab3e8;
        margin-bottom: 0;
        a {
            color: #5ab3e8;
            text-decoration: none !important;
        }
        @media(max-width:420px) {
            font-size: 28px;
        }
    }
`

export default HomeFooter