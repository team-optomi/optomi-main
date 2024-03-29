import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import JoinSectionOne from "../components/join-sections/join-section-one"
import JoinSectionTwo from "../components/join-sections/join-section-two"
import JoinSectionThree from "../components/join-sections/join-section-three"
import JoinSectionFour from "../components/join-sections/join-section-four"
import JoinPositionsSection from "../components/join-sections/join-positions-section"
import JoinTestimonialSlider from "../components/join-sections/join-testimonial-slider"
import JoinBlogSlider from "../components/join-sections/join-blog-slider"
import JoinSectionSeven from "../components/join-sections/join-section-seven"
import JoinAwardsSection from "../components/join-sections/join-awards-section"
import JoinSectionEight from "../components/join-sections/join-section-eight"
import JoinDirectionsSection from "../components/join-sections/join-directions-section-v2"

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
                <JoinSectionThree/>
                <JoinPositionsSection/>
                <JoinSectionTwo/>
                <JoinSectionFour/>
                <JoinTestimonialSlider/>
                <JoinBlogSlider/>
                <JoinSectionSeven/>
                <JoinAwardsSection/>
                <JoinSectionEight/>
                <JoinDirectionsSection/>
                
            </Layout>
        ))
    )

}

export default JoinPage