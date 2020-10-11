import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const JobPortal = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 24}}}}) {
                edges {
                    node {
                        title
                        content
                        acf {
                            button_one_text
                            button_one_link
                            button_two_text
                            button_two_link
                            button_three_text
                            button_three_link
                        }
                    }
                }
            }
        }
    `)

    return(
        
        data.allWordpressWpHomeSection.edges.map(post => (
            <MainSection>

                <MainContent>
                    <h2
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >{post.node.title}</h2>
                    <MainCopy 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                    <ButtonSection>
                        <ButtonLink
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        to={post.node.acf.button_one_link}
                        >{post.node.acf.button_one_text}
                        </ButtonLink>
                        <ButtonLink
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        to={post.node.acf.button_two_link}
                        >{post.node.acf.button_two_text}
                        </ButtonLink>
                        <ButtonLink
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        to={post.node.acf.button_three_link}
                        >{post.node.acf.button_three_text}
                        </ButtonLink>
                    </ButtonSection>
                </MainContent>
                    
            </MainSection>
        ))
    )
}

const MainSection = styled.div`
    background-color: #333;
    padding-top: 0px;
    padding-bottom: 0px;
    position: relative;
    z-index: 3;
    @media(max-width:1200px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`


const MainContent = styled.div`
    max-width: 1540px;
    padding: 60px 120px;
    width: 100%;
    margin: 0 auto;
    h2 {
        font-family: "BonVivant";
        color: #a6aaab;
        font-size: 72px;
        font-weight: 100;
        margin-bottom: 0;
        margin-left: -50px;
        text-transform: lowercase;
    }
    @media(max-width:1500px) {
        max-width: 1300px;
    }
    @media(max-width:1200px) {
        max-width: 1100px;
    }
    @media(max-width:1020px) {
        h2 {
            font-size: 60px;
            margin-left: 0;
        }
    }
    @media(max-width:770px) {
        h2 {
            text-align: center;
            margin-bottom: 30px;
        }
    }
    @media(max-width:768px) {
        padding-left: 20px;
        padding-right: 20px;
      }
`

const MainCopy = styled.div`
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 24px;
        line-height: 1.3;
        text-align: center;
        @media(max-width:1020px) {
            padding-left: 50px;
        }
        @media(max-width:770px) {
            padding-left: 0;
        }
        @media(max-width:500px) {
            font-size: 20px;
        }
    }
`

const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:1000px) {
        flex-wrap: wrap;
    }
`

const ButtonLink = styled(Link)`
    font-family: "Helvetica Thin";
    color: #298fc2;
    font-size: 24px;
    letter-spacing: 5px;
    line-height: 1.3;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    padding: 20px 40px;
    @media(max-width:1000px) {
        width: 100%;
        padding: 20px 0px;
    }
    &:nth-child(2) {
        max-width: 350px;
    }
    &:nth-child(3) {
        max-width: 375px;
    }
`

export default JobPortal