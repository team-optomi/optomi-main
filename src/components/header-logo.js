import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Logo-noTag.png" }) {
        childImageSharp {
          fixed(width: 90, height: 34) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fixed} />
}

export default HeaderLogo
