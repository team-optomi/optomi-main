import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'

const ServiceOfferingButtons = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpService(sort: {order: DESC, fields: date}) {
                edges {
                  node {
                    title
                    slug
                  }
                }
              }
        }
    `)

    return(

        <ButtonSection>
            {data.allWordpressWpService.edges.map((post, i) => (
                <Button onClick={() => scrollTo(`#${post.node.slug}`)} aria-label="Scroll" dangerouslySetInnerHTML={{ __html: post.node.title }}/>
            ))}
        </ButtonSection>

    )

}

const ButtonSection = styled.div`
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    @media(max-width:960px) {
        margin-top: 30px;
    }
`

const Button = styled.button`
    width: 25%;
    text-align: left;
    background: transparent;
    border: none;
    outline: 0;
    font-family: "Helvetica Thin";
    color: #298fc2;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    padding-bottom: 20px;
    padding-right: 20px;
    margin-bottom: 10px;
    &:hover {
        cursor: pointer;
    }
    @media(max-width:1200px) {
        text-align: center;
        width: 33.33%;
        padding-right: 10px;
        padding-left: 10px;
    }
    @media(max-width:960px) {
        width: 50%;
    }
    @media(max-width:480px) {
        width: 100%;
        font-size: 18px;
        padding-right: 0px;
        padding-left: 0px;
        margin-bottom: 0px;
    }
`

export default ServiceOfferingButtons