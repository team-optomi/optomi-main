import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

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

            </SectionOne>
        ))
    )

}

const SectionOne = styled.div``

export default OOSectionOne