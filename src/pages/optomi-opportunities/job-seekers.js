import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import OOLayout from "../../components/optomi-opportunities/oo-layout"
import OOSliderParallax from "../../components/optomi-opportunities/oo-slider-parallax"
import OOSectionOne from "../../components/optomi-opportunities/oo-section-one"
import OOSectionTwo from "../../components/optomi-opportunities/oo-section-two"
import OOTestimonialsParallax from "../../components/optomi-opportunities/oo-testimonials-parallax"
import OOJSResources from "../../components/optomi-opportunities/oo-js-resources"
import OOContactForm from "../../components/optomi-opportunities/oo-contactform"
import SEO from "../../components/seo"

const JobSeekersPage = () => {

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
                <OOSliderParallax/>
                <OOSectionOne/>
                <OOSectionTwo/>
                <OOTestimonialsParallax/>
                <OOJSResources/>
                <OOContactForm />
            </OOLayout>
        ))
    )

}

export default JobSeekersPage