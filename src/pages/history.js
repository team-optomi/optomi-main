import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

import TimelineHero from "../components/timeline-sections/hero"
import Section2012 from "../components/timeline-sections/section-2012"
import Section2014 from "../components/timeline-sections/section-2014"
import Section2015 from "../components/timeline-sections/section-2015"
import Section2016 from "../components/timeline-sections/section-2016"
import Section2017 from "../components/timeline-sections/section-2017"
import Section2018 from "../components/timeline-sections/section-2018"
import Section2019 from "../components/timeline-sections/section-2019"
import Section2020 from "../components/timeline-sections/section-2020"
import Section2021 from "../components/timeline-sections/section-2021"
import Section2022 from "../components/timeline-sections/section-2022"

const HistoryPage = () => {

    const data = useStaticQuery(graphql`
        query {
            pageData: wordpressWpCustomPage(wordpress_id: {eq: 2221}) {
                acf {
                    meta_title
                    meta_description
                }
                featured_media {
                    localFile {
                        childImageSharp {
                            sizes(maxWidth: 2000) {
                                ...GatsbyImageSharpSizes
                            }
                        }
                    }
                }
            }
        }
    `)
    return(
        <Layout>
            <SEO 
            title={data.pageData.acf.meta_title} 
            description={data.pageData.acf.meta_description}
            image={data.pageData.featured_media.localFile.childImageSharp.sizes}
            />
            <div style={{backgroundColor: '#fff'}}>
            <TimelineHero/>
            <Section2012/>
            <Section2014/>
            <Section2015/>
            <Section2016/>
            <Section2017/>
            <Section2018/>
            <Section2019/>
            <Section2020/>
            <Section2021/>
            <Section2022/>
            </div>
        </Layout>
    )
}

export default HistoryPage