import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const FooterSocials = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 15}}}}) {
                edges {
                    node {
                        acf {
                            linkedin_link
                            linkedin_icon {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 188) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            facebook_link
                            facebook_icon {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 188) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            twitter_link
                            twitter_icon {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 188) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            instagram_link
                            instagram_icon {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 188) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            glassdoor_link
                            glassdoor_icon {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 188) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            youtube_link
                            youtube_icon {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 188) {
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
    `)

    return(
        
        data.allWordpressWpHomeSection.edges.map(post => (
                <SocialBox>
                    <SocialIcon>
                        <a href={post.node.acf.linkedin_link} target="_blank" rel="noopener noreferrer" aria-label="Link">
                            <IconImage sizes={post.node.acf.linkedin_icon.localFile.childImageSharp.sizes}/>
                        </a>
                    </SocialIcon>
                    <SocialIcon>
                        <a href={post.node.acf.facebook_link} target="_blank" rel="noopener noreferrer" aria-label="Link">
                            <IconImage sizes={post.node.acf.facebook_icon.localFile.childImageSharp.sizes}/>
                        </a>
                    </SocialIcon>
                    <SocialIcon>
                        <a href={post.node.acf.twitter_link} target="_blank" rel="noopener noreferrer" aria-label="Link">
                            <IconImage sizes={post.node.acf.twitter_icon.localFile.childImageSharp.sizes}/>
                        </a>
                    </SocialIcon>
                    <SocialIcon>
                        <a href={post.node.acf.instagram_link} target="_blank" rel="noopener noreferrer" aria-label="Link">
                            <IconImage sizes={post.node.acf.instagram_icon.localFile.childImageSharp.sizes}/>
                        </a>
                    </SocialIcon>
                    <SocialIcon>
                        <a href={post.node.acf.glassdoor_link} target="_blank" rel="noopener noreferrer" aria-label="Link">
                            <IconImage sizes={post.node.acf.glassdoor_icon.localFile.childImageSharp.sizes}/>
                        </a>
                    </SocialIcon>
                    <SocialIcon>
                        <a href={post.node.acf.youtube_link} target="_blank" rel="noopener noreferrer" aria-label="Link">
                            <IconImage sizes={post.node.acf.youtube_icon.localFile.childImageSharp.sizes}/>
                        </a>
                    </SocialIcon>
                </SocialBox>
        ))
    )
}

const SocialBox = styled.div`
    position: absolute;
    top: 200px;
    left: 240px;
    display: flex;
    width: 110px;
    flex-wrap: wrap;
`

const SocialIcon = styled.div`
    width: 45px;
    height: 45px;
    margin: 5px;
`

const IconImage = styled(Img)`
    width: 45px !important;
    height: 45px !important;
    img {
        width: 45px !important;
        height: 45px !important;
        margin-bottom: 0;
    }
`

export default FooterSocials