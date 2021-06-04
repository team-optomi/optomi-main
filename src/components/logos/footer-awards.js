import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FooterAwards = () => {
  const data = useStaticQuery(graphql`
    query {
      footerContent: allWordpressWpFooterSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 82}}}}) {
        edges {
          node {
            acf {
              awards_image {
                localFile {
                  childImageSharp {
                    fixed(width: 550, height: 44) {
                      ...GatsbyImageSharpFixed
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
    data.footerContent.edges.map(content => (
      <Img fluid={content.node.acf.awards_image.localFile.childImageSharp.fixed} />
    ))
  ) 
}

export default FooterAwards