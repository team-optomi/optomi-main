import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import OOLayout from "../components/optomi-opportunities/oo-layout"
import OOSectionOne from "../components/optomi-opportunities/oo-section-one"
import OOSectionTwo from "../components/optomi-opportunities/oo-section-two"
import SEO from "../components/seo"

const OptomiOpportunitiesPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 47}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 1920) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                        acf {
                            meta_title
                            meta_description
                        }
                    }
                }
            }
        }
    `)

    return(
        
        data.allWordpressWpCustomPage.edges.map(post => (
            <OOLayout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />
                <SliderPlaceholder>
                    <p>Slider Placeholder</p>
                </SliderPlaceholder>
                <OOSectionOne/>
                <OOSectionTwo/>
            </OOLayout>
        ))
    )

}

const SliderPlaceholder = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-family: "Helvetica Thin";
        font-size: 24px;
        color: #fff;
        line-height: 1.2;
    }
`

export default OptomiOpportunitiesPage