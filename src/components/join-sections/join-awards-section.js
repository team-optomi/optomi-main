import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const JoinAwardsSection = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpJoinSection(filter: {wordpress_id: {eq: 1800}}) {
                edges {
                    node {
                        content
                        acf {
                            awards_row_one_image {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            awards_row_one_copy
                            awards_row_two_image {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            awards_row_two_copy
                            awards_row_three_image {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            awards_row_three_copy
                            awards_row_four_image {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            awards_row_four_copy
                            awards_row_five_image {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            awards_row_five_copy
                            awards_row_six_image {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            awards_row_six_copy
                        }
                    }
                }
            }
        }
    `)

    return(
        
        data.allWordpressWpJoinSection.edges.map(post => (
            <MainSection>

                <div class="section-row">
                    <div class="section-col">
                        <div 
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="award">
                            <Img sizes={post.node.acf.awards_row_one_image.localFile.childImageSharp.sizes} alt={post.node.acf.awards_row_one_copy.title} />
                            <div class="copy" dangerouslySetInnerHTML={{ __html: post.node.acf.awards_row_one_copy }}/>
                        </div>
                        <div 
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="award">
                            <div class="copy" dangerouslySetInnerHTML={{ __html: post.node.acf.awards_row_two_copy }}/>
                            <Img sizes={post.node.acf.awards_row_two_image.localFile.childImageSharp.sizes} alt={post.node.acf.awards_row_two_copy.title} />
                        </div>
                        <div 
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="award">
                            <Img sizes={post.node.acf.awards_row_five_image.localFile.childImageSharp.sizes} alt={post.node.acf.awards_row_five_copy.title} />
                            <div class="copy" dangerouslySetInnerHTML={{ __html: post.node.acf.awards_row_five_copy }}/>
                        </div>
                    </div>
                    <div class="section-col">
                        <div 
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="award">
                            <Img sizes={post.node.acf.awards_row_three_image.localFile.childImageSharp.sizes} alt={post.node.acf.awards_row_three_copy.title} />
                            <div class="copy" dangerouslySetInnerHTML={{ __html: post.node.acf.awards_row_three_copy }}/>
                        </div>
                        <div 
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="award">
                            <Img sizes={post.node.acf.awards_row_four_image.localFile.childImageSharp.sizes} alt={post.node.acf.awards_row_four_copy.title} />
                            <div class="copy" dangerouslySetInnerHTML={{ __html: post.node.acf.awards_row_four_copy }}/>
                        </div>
                        <div 
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="award">
                            <Img sizes={post.node.acf.awards_row_six_image.localFile.childImageSharp.sizes} alt={post.node.acf.awards_row_six_copy.title} />
                            <div class="copy" dangerouslySetInnerHTML={{ __html: post.node.acf.awards_row_six_copy }}/>
                        </div>
                    </div>
                </div>

            </MainSection>
        ))
    )

}

const MainSection = styled.section`
    background-color: #000;
    padding: 20px;
    margin-bottom: 50px;
    .section-row {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .section-col {
            width: 50%;
            padding: 0 20px;
            &:last-child {
                .award {
                    &:nth-child(2) {
                        padding-left: 80px;
                    }
                }
            }
        }
        .award {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 35px;
        }
        .gatsby-image-wrapper {
            max-width: 150px;
            max-height: 150px;
            height: 100%;
            width: 100%;
            img {
                object-fit: contain !important;
            }
        }
        .copy {
            max-width: calc(100% - 150px);
            width: 100%;
            p {
                font-family: "Helvetica Thin";
                font-size: 16px;
                color: rgb(255,255,255);
                line-height: 1.3;
                margin-bottom: 0;
                max-width: 600px;
                padding: 0 30px;
            }
        }
    }
    @media(max-width:1100px) {
        .section-row {
            .section-col {
                &:first-child {
                    .award {
                        &:nth-child(2) {
                            .gatsby-image-wrapper {
                                order: 1;
                            }
                            .copy {
                                order: 2;
                            }
                        }
                    }
                }
                &:last-child {
                    .award {
                        &:nth-child(2) {
                            padding-left: 0px;
                        }
                    }
                }
            }
            .award {
                flex-wrap: wrap;
                .gatsby-image-wrapper {
                    margin: 0 auto;
                    margin-bottom: 20px;
                }
            }
            .copy {
                max-width: 100%;
            }
        }
    }
    @media(max-width:767px) {
        .section-row {
            flex-wrap: wrap;
            padding-bottom: 30px;
            .section-col { 
                max-width: 100%;
                width: 100%;
            }
            .copy {
                max-width: 100%;
                p {
                    text-align: center !important;
                    padding: 0;
                }
            }
            &:nth-child(even) {
                .gatsby-mage-wrapper {
                    order: 1;
                }
                .copy {
                    order: 2;
                }
            }
        }
    }
`

export default JoinAwardsSection