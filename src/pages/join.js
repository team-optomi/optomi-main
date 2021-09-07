import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import JoinSectionOne from "../components/join-sections/join-section-one"

const JoinPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 91}}}}) {
                edges {
                    node {
                        acf {
                            meta_title
                            meta_description
                        }
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 1262) {
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
        data.allWordpressWpCustomPage.edges.map(post => (
            <Layout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />

                <JoinSectionOne/>
                
            </Layout>
        ))
    )

}

export default JoinPage