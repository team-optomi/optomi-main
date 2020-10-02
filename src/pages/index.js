import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import HomeLayout from "../components/home-layout"
import SEO from "../components/seo"

import HomeHero from "../components/home-sections/home-hero"
import MissionStatement from "../components/home-sections/mission-statement-v2"
import HomeDifs from "../components/home-sections/home-difs"
import Explore from "../components/home-sections/explore"
import JobPortal from "../components/home-sections/job-portal"
import Acadomi from "../components/home-sections/home-acadomi"
import CaseStudies from "../components/case-studies"
import GivingBack from "../components/home-sections/giving-back-v2"
import HomeFooter from "../components/home-sections/home-footer"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 8}}}}) {
                edges {
                    node {
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 1912) {
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
      data.allWordpressWpHomeSection.edges.map(post => (
      <HomeLayout>
        <SEO 
        title="Optomi IT Staffing Services, providing IT Consultants and Technology Services" 
        image={post.node.featured_media.localFile.childImageSharp.sizes}
        />
        <HomeHero/>
        <MissionStatement/>
        <HomeDifs/>
        <Explore/>
        <JobPortal/>
        <Acadomi/>
        <CaseStudies/>
        <GivingBack/>
        <HomeFooter/>
      </HomeLayout>
    ))
  )
}

export default IndexPage
