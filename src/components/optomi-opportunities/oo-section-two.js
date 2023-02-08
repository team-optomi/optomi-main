import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import DownloadFile from "../../downloads/Optomi Brochure - Consultants - 2021-Final.pdf"

const OOSectionTwo = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 47}}}}) {
                edges {
                    node {
                        acf {
                            section_two {
                                icon_one {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 175) {
                                            ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                text_one
                                icon_two {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 174) {
                                            ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                text_two
                                icon_three {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 172) {
                                            ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                text_three
                                icon_four {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 174) {
                                            ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                text_four
                                icon_five {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 177) {
                                            ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                text_five
                                icon_six {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 175) {
                                            ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                text_six
                                icon_seven {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 182) {
                                            ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                text_seven
                                icon_eight {
                                    localFile {
                                      childImageSharp {
                                        sizes(maxWidth: 179) {
                                            ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                text_eight
                                cc_bottom_link_file {
                                    url {
                                      localFile {
                                        publicURL
                                      }
                                    }
                                }
                                cc_bottom_link_text
                            }
                        }
                    }
                }
            }
        }
    `)

    return(
        
        data.allWordpressWpCustomPage.edges.map(post => (
            <SectionTwo>
                <h2>Benefits</h2>
                <IconRow>
                    <IconFull>
                        <IconImage sizes={post.node.acf.section_two.icon_one.localFile.childImageSharp.sizes} alt={"On-Boarding"}/>
                        <IconText>
                            <div>
                            <p>{post.node.acf.section_two.text_one}</p>
                            <hr/>
                            </div>
                        </IconText>
                    </IconFull>
                    <IconFull>
                        <IconImage sizes={post.node.acf.section_two.icon_two.localFile.childImageSharp.sizes} alt={"On-Boarding"}/>
                        <IconText>
                            <div>
                            <p>{post.node.acf.section_two.text_two}</p>
                            <hr/>
                            </div>
                        </IconText>
                    </IconFull>
                    <IconFull>
                        <IconImage sizes={post.node.acf.section_two.icon_three.localFile.childImageSharp.sizes} alt={"On-Boarding"}/>
                        <IconText>
                            <div>
                            <p>{post.node.acf.section_two.text_three}</p>
                            <hr/>
                            </div>
                        </IconText>
                    </IconFull>
                    <IconFull>
                        <IconImage sizes={post.node.acf.section_two.icon_four.localFile.childImageSharp.sizes} alt={"On-Boarding"}/>
                        <IconText>
                            <div>
                            <p>{post.node.acf.section_two.text_four}</p>
                            <hr/>
                            </div>
                        </IconText>
                    </IconFull>
                    <IconFull>
                        <IconImage sizes={post.node.acf.section_two.icon_five.localFile.childImageSharp.sizes} alt={"On-Boarding"}/>
                        <IconText>
                            <div>
                            <p>{post.node.acf.section_two.text_five}</p>
                            <hr/>
                            </div>
                        </IconText>
                    </IconFull>
                    <IconFull>
                        <IconImage sizes={post.node.acf.section_two.icon_six.localFile.childImageSharp.sizes} alt={"On-Boarding"}/>
                        <IconText>
                            <div>
                            <p>{post.node.acf.section_two.text_six}</p>
                            <hr/>
                            </div>
                        </IconText>
                    </IconFull>
                    <IconFull>
                        <IconImage sizes={post.node.acf.section_two.icon_seven.localFile.childImageSharp.sizes} alt={"On-Boarding"}/>
                        <IconText>
                            <div>
                            <p>{post.node.acf.section_two.text_seven}</p>
                            <hr/>
                            </div>
                        </IconText>
                    </IconFull>
                    <IconFull>
                        <IconImage sizes={post.node.acf.section_two.icon_eight.localFile.childImageSharp.sizes} alt={"On-Boarding"}/>
                        <IconText>
                            <div>
                            <p>{post.node.acf.section_two.text_eight}</p>
                            <hr/>
                            </div>
                        </IconText>
                    </IconFull>
                </IconRow>
                <p class="bottom-link"><a href={post.node.acf.section_two.cc_bottom_link_file.url.localFile.publicURL} target="_blank" rel="noopener noreferrer">{post.node.acf.section_two.cc_bottom_link_text}</a></p>
            </SectionTwo>
        ))
    )

}

const IconRow = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media(max-width:768px) {
        flex-wrap: wrap;
    }
`

const IconImage = styled(Img)`
    width: 100%;
`

const IconText = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(21,21,21,0.78);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition-duration: .3s;
    p {
        color: #ffffff;
        font-family: 'Raleway', sans-serif;
        font-size: 12px;
        line-height: 1.4;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0px;
        text-align: center;
        padding: 0 15px;
        margin-bottom: 15px;
        width: 100%;
    }
    hr {
        height: 1px;
        width: 100%;
        max-width: 50px;
        padding: 0 15px;
        background-color: #fff;
        margin: 0 auto;
    }
`

const IconFull = styled.div`
    width: 12%;
    max-width: 200px;
    position: relative;
    &:hover {
        ${IconText} {
            opacity: 1;
        }
    }
    @media(max-width:768px) {
        width: 24%;
    }
    @media(max-width:460px) {
        width: 48%;
    }
`

const SectionTwo = styled.div`
    padding: 35px 20px;
    h2 {
        color: #ffffff;
        font-family: 'Raleway', sans-serif;
        font-size: 30px;
        line-height: 35px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0px;
        text-transform: uppercase;
        text-align: center;
    }
    p.bottom-link {
        color: #ffffff;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        margin: 30px auto;
        display: block;
        text-align: center;
        text-decoration: none;
        a {
            color: #ffffff;
            text-decoration: none;
            &:hover {
                color: #00aeef;
            }
        }
    }
`

export default OOSectionTwo