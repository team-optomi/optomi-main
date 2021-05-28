import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const JobPortal = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 5}}}}) {
                edges {
                    node {
                        content
                        acf {
                            jp_column_one_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            jp_column_one_content
                            jp_column_two_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            jp_column_two_content
                            jp_column_three_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            jp_column_three_content
                        }
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

                <FlexRow>
                    <div
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <Img sizes={post.node.acf.jp_column_one_icon.localFile.childImageSharp.sizes} alt={post.node.acf.jp_column_one_icon.title} />
                        <div dangerouslySetInnerHTML={{ __html: post.node.acf.jp_column_one_content }} />
                    </div>
                    <div
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    >
                        <Img sizes={post.node.acf.jp_column_two_icon.localFile.childImageSharp.sizes} alt={post.node.acf.jp_column_two_icon.title} />
                        <div dangerouslySetInnerHTML={{ __html: post.node.acf.jp_column_two_content }} />
                    </div>
                    <div
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="900"
                    data-sal-easing="ease"
                    >
                        <Img sizes={post.node.acf.jp_column_three_icon.localFile.childImageSharp.sizes} alt={post.node.acf.jp_column_three_icon.title} />
                        <div dangerouslySetInnerHTML={{ __html: post.node.acf.jp_column_three_content }} />
                    </div>
                </FlexRow>
                    
            </MainSection>
        ))
    )
}

const MainSection = styled.div`
    background-color: #000;
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
    max-width: 1340px;
    padding: 50px 120px;
    padding-bottom: 0;
    width: 100%;
    margin: 0 auto;
    h2 {
        font-family: "BonVivant";
        color: #fff;
        text-align: center;
        font-size: 72px;
        font-weight: 100;
        margin-bottom: 0px;
        @media(max-width:1020px) {
            font-size: 60px;
        }
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
                display: inline-block;
                margin-top: 10px;
                @media(max-width:500px) {
                    font-size: 18px;
                    padding: 15px 35px;
                }
            }
            @media(max-width:500px) {
                font-size: 24px;
            }
        }
        &.jobs-bottom {
            font-family: "Helvetica Thin";
            color: #fff;
            font-size: 32px;
            line-height: 1.3;
            text-align: center;
            @media(max-width:500px) {
                font-size: 24px;
            }
        }
    }
    @media(max-width:1200px) {
        max-width: 1100px;
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
    @media(max-width:768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

const FlexRow = styled.div`
    max-width: 1540px;
    padding: 60px 120px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    > div {
        width: 30%;
        text-align: center;
        .gatsby-image-wrapper {
            max-width: 200px;
            max-height: 120px;
            margin: 0 auto;
            margin-bottom: 15px;
            img {
                max-width: 200px;
                max-height: 120px;
                object-fit: contain !important;
            }
        }
        h3 {
            font-family: "Helvetica Thin";
            color: #fff;
            font-size: 18px;
            letter-spacing: 3px;
            line-height: 1.3;
            text-align: center;
            text-transform: uppercase;
            text-decoration: none;
            margin-bottom: 5px;
        }
        p {
            font-family: "Helvetica Thin";
            color: #fff;
            font-size: 16px;
            line-height: 1.3;
            text-align: center;
        }
        a {
            font-family: "Helvetica Thin";
            background-color: #298fc2;
            padding: 15px 30px;
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 2px;
            display: inline-block;
        }
    }
    @media(max-width:1200px) {
        max-width: 1140px;
        flex-wrap: wrap;
        justify-content: center;
        > div {
            width: 50%;
            padding: 0 20px;
            margin-bottom: 35px;
        }
    }
    @media(max-width:1150px) {
        max-width: 940px;
    }
    @media(max-width:980px) {
        > div {
            width: 100%;
        }
    }
    @media(max-width:768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

export default JobPortal