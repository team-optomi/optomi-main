import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const SectionSeven = () => {

    const data = useStaticQuery(graphql`
        query {
            wordpressWpCustomPage(wordpress_id: {eq: 2088}) {
                acf {
                    cv2_committee_icons {
                        cv2_commi_icon  {
                            title
                            localFile {
                              childImageSharp {
                                sizes(maxWidth: 775) {
                                    ...GatsbyImageSharpSizes
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
        <CommitteeSection>
            <h2>Our Culture Committees</h2>
            <div class="flex-row">
                {data.wordpressWpCustomPage.acf.cv2_committee_icons.map(iconSrc => {
                    return(
                        <Img sizes={iconSrc.cv2_commi_icon.localFile.childImageSharp.sizes} alt={iconSrc.cv2_commi_icon.title} />
                    )
                })}
            </div>
        </CommitteeSection>
    )

}

const CommitteeSection = styled.section`
    padding: 50px 20px;
    h2 {
        font-family: "Helvetica Thin";
        color: #fff;
        text-align: center;
        font-weight: 100;
    }
    .flex-row {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        .gatsby-image-wrapper {
            width: 16.66%
        }
    }
    @media(max-width:991px) {
        .flex-row {
            flex-wrap: wrap;
            .gatsby-image-wrapper {
                width: 33.33%;
            }
        }
    }
    @media(max-width:600px) {
        .flex-row {
            .gatsby-image-wrapper {
                width: 50%;
            }
        }
    }
`

export default SectionSeven