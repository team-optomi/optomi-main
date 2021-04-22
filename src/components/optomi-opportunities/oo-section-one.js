import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll'

const OOSectionOne = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 47}}}}) {
                edges {
                    node {
                        acf {
                            section_one {
                                row_one_copy
                                row_one_image {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 960) {
                                            ...GatsbyImageSharpSizes
                                          }
                                      }
                                    }
                                  }
                                row_two_copy
                                row_two_image {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 960) {
                                            ...GatsbyImageSharpSizes
                                          }
                                      }
                                    }
                                  }
                                row_three_copy
                                row_three_link
                                row_three_image {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 960) {
                                            ...GatsbyImageSharpSizes
                                          }
                                      }
                                    }
                                  }
                                row_four_copy
                                row_four_link
                                row_four_image {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 960) {
                                            ...GatsbyImageSharpSizes
                                          }
                                      }
                                    }
                                  }
                                row_five_copy
                                row_five_link
                                row_five_image {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 960) {
                                            ...GatsbyImageSharpSizes
                                          }
                                      }
                                    }
                                  }
                                row_six_copy
                                row_six_link
                                row_six_image {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 960) {
                                            ...GatsbyImageSharpSizes
                                          }
                                      }
                                    }
                                  }
                            }
                        }
                    }
                }
            }
        }
    `)

    return(
        
        data.allWordpressWpCustomPage.edges.map(post => (
            <SectionOne>
                <ImageLeftRow>
                    <SectionImage sizes={post.node.acf.section_one.row_one_image.localFile.childImageSharp.sizes} alt={"On-Boarding"} />
                    <SectionCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_one.row_one_copy }} />
                </ImageLeftRow>
                <ImageRightRow>
                    <SectionCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_one.row_two_copy }} />
                    <SectionImage sizes={post.node.acf.section_one.row_two_image.localFile.childImageSharp.sizes} alt={"Off-Boarding"} />
                </ImageRightRow>
                <ImageLeftRow>
                    <a class="image-link" href={post.node.acf.section_one.row_three_link}>
                    <SectionImage sizes={post.node.acf.section_one.row_three_image.localFile.childImageSharp.sizes} alt={"Consultant Community"} />
                    </a>
                    <SectionCopy>
                        <div  dangerouslySetInnerHTML={{ __html: post.node.acf.section_one.row_three_copy }} />
                        <p><button onClick={() => scrollTo('#oo_newsletter')} aria-label="Scroll">Sign Up</button> to get our NEWSLETTER and let’s stay connected.</p>
                    </SectionCopy>
                </ImageLeftRow>
                <ImageRightRow>
                    <SectionCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_one.row_four_copy }} />
                    <a class="image-link" href={post.node.acf.section_one.row_four_link}>
                    <SectionImage sizes={post.node.acf.section_one.row_four_image.localFile.childImageSharp.sizes} alt={"Opt2Give"} />
                    </a>
                </ImageRightRow>
                <ImageLeftRow>
                    <a class="image-link" href={post.node.acf.section_one.row_five_link}>
                    <SectionImage sizes={post.node.acf.section_one.row_five_image.localFile.childImageSharp.sizes} alt={"Consultant of the Quarter"} />
                    </a>
                    <SectionCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_one.row_five_copy }} />
                </ImageLeftRow>
                <ImageRightRow>
                    <SectionCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_one.row_six_copy }} />
                    <a class="image-link" href={post.node.acf.section_one.row_six_link}>
                    <SectionImage sizes={post.node.acf.section_one.row_six_image.localFile.childImageSharp.sizes} alt={"Referral"} />
                    </a>
                </ImageRightRow>
            </SectionOne>
        ))
    )

}

const ImageLeftRow = styled.div`
    display: flex;
    align-items: center;
    @media(max-width: 1100px) {
        flex-wrap: wrap;
    }
`

const SectionImage = styled(Img)`
    width: 50%;
    @media(max-width: 1100px) {
        margin: 0 auto;
    }
    @media(max-width:620px) {
        width: 80%;
    }
    @media(max-width:420px) {
        width: 90%;
    }
`

const SectionCopy = styled.div`
    width: 50%;
    padding: 20px 9% 30px 9%;
    h3 {
        color: #ffffff;
        font-family: 'Raleway', sans-serif;
        font-size: 30px;
        line-height: 35px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0px;
        text-transform: uppercase;
    }
    p {
        color: #ffffff;
        font-family: 'Raleway', sans-serif;
        font-size: 18px;
        line-height: 1.3;
        font-style: normal;
        font-weight: 300;
        a {
            color: #fff;
            &:hover {
                color: #00aeef;
            }
        }
    }
    button {
        padding: 0;
        margin: 0;
        background: transparent;
        border: none;
        color: #fff;
        text-decoration: underline;
        outline: 0;
        &:hover {
            cursor: pointer;
            color: #00aeef;
        }
    }
    @media(max-width: 1100px) {
        width: 51%;
        margin: 0 auto;
        text-align: center;
    }
    @media(max-width:620px) {
        width: 80%;
    }
    @media(max-width:420px) {
        width: 100%;
    }
`

const ImageRightRow = styled.div`
    display: flex;
    align-items: center;
    @media(max-width: 1100px) {
        flex-wrap: wrap;
        .image-link {
            order: 1;
        }
        ${SectionImage} {
            order: 1;
        }
        ${SectionCopy} {
            order: 2;
        }
    }
`

const SectionOne = styled.div`
    .image-link {
        width: 50%;
        ${SectionImage} {
            width: 100%;
        }
        @media(max-width: 1100px) {
            margin: 0 auto;
        }
        @media(max-width:620px) {
            width: 80%;
        }
        @media(max-width:420px) {
            width: 90%;
        }
    }
`

export default OOSectionOne