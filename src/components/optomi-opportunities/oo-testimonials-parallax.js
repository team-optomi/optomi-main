import React, { useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import OOTestimonials from "../../components/optomi-opportunities/oo-testimonials"


const OOTestimonialsParallax = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#testimonial_trigger',
                start: 'top bottom',
                end: 'bottom top',
                id: 'testimonial-parallax',
                scrub: true,
                },
            })
            tl.to('.testimonial-background', {y: 300 })

      }, []);

      const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "icon_quotation.png" }) {
                childImageSharp {
                  fixed(width: 70, height: 43) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 47}}}}) {
                edges {
                    node {
                        acf {
                            testimonial_background {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1920) {
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
    `)

    return(
        data.allWordpressWpCustomPage.edges.map(post => (
            <TestimonialSection id={"testimonial_trigger"} >
                <ImageBackground>
                    <BackgroundImg sizes={post.node.acf.testimonial_background.localFile.childImageSharp.sizes} alt={"testimonial background"} className={"testimonial-background"}  />
                </ImageBackground>

                <TestimonialMain>
                    <QuoteImage fluid={data.placeholderImage.childImageSharp.fixed} />
                    <OOTestimonials/>
                </TestimonialMain>
                
            </TestimonialSection>
        ))
    );

}

const TestimonialSection = styled.div`
    position: relative;
    padding: 80px 0;
    width: 100%;
    overflow: hidden;
`

const ImageBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
`

const BackgroundImg = styled(Img)`
    position: absolute;
    width: 100%;
    height: 110vh;
    top: -500px;
    left: 0;
    @media(max-width:500px) {
        top: -250px;
    }
`

const QuoteImage = styled(Img)`
    width: 70px;
    height: 43px;
    margin: 0 auto;
`

const TestimonialMain = styled.div``

export default OOTestimonialsParallax