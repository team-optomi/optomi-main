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
            <MainSection>
                <MainRow 
                    class={"bottom-row"}
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                >
                <MainContent dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                </MainRow>
            </MainSection>
        ))
    )
}

const MainSection = styled.div`
    background-color: #000;
    padding-top: 100px;
    padding-bottom: 100px;
    position: relative;
    z-index: 2;
`

const MainRow = styled.div`
    max-width: 1340px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    z-index: 2;
    @media(max-width:1500px) {
        max-width: 1140px;
    }
    @media(max-width:1200px) {
        max-width: 940px;
    }
`

const MainContent = styled.div`
    text-align: center;
    h2 {
        font-family: "Helvetica Thin";
        font-size: 60px;
        color: #fff;
        font-weight: 100;
        line-height: 1.2;
        letter-spacing: 1px;
        margin-bottom: 50px;
        transition-duration: .3s;
        .bonvivant {
            font-family: "BonVivant";
            font-size: 80px;
            padding: 0 10px;
            transition-duration: .3s;
        }
    }
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 24px;
        line-height: 1.3;
        max-width: 1000px;
        margin: 0 auto;
        transition-duration: .3s;
    }
    @media(max-width:1500px) {
        h2 {
            font-size: 42px;
            .bonvivant {
                font-size: 60px;
            }
        }
        p {
            font-size: 20px;
        }
    }
`

export default HomeFooter