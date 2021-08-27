import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const GivingPageV2 = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 86}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 2000) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                        acf {
                            meta_title
                            meta_description
                            top_heart {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 375) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            page_background {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1707) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            gvtwo_hero_logo {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            gvtwo_hero_content
                            gvtwo_section_one_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1920) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            gvtwo_section_one_logo {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            gvtwo_section_one_text
                            gvtwo_section_one_tgb_logo {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            gvtwo_section_one_link
                            gvtwo_section_two_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1800) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            gvtwo_section_two_logo {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            gvtwo_section_two_text
                            gvtwo_section_two_link
                            gvtwo_section_three_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1800) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            gvtwo_section_three_logo {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            gvtwo_section_three_text
                            gvtwo_section_three_link
                            gvtwo_bottom_text
                            gvtwo_bottom_arrow {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 175) {
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
            <Layout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />

                <PageBackground>
                    <Img sizes={post.node.acf.page_background.localFile.childImageSharp.sizes} alt="Digital Grid Background" />
                </PageBackground>

                <TopBar>
                    <h1>Giving Back</h1>
                    <Img sizes={post.node.acf.top_heart.localFile.childImageSharp.sizes} alt="Digital Heart" />
                </TopBar>

                <HeroSection>
                    <a href="https://thetgbfoundation.org/" target="_blank" rel="noopener noreferrer">
                        <div 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="hero-background">
                            <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt="Giving Back Hero Background" />
                        </div>

                        <div class="hero-content">
                            <div class="hero-flex">
                            <div 
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-easing="ease"
                            class="hero-left">
                                <Img sizes={post.node.acf.gvtwo_hero_logo.localFile.childImageSharp.sizes} alt="TGB Foundation Logo" />
                            </div>
                            <div 
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-easing="ease"
                            class="hero-right">
                                <div dangerouslySetInnerHTML={{ __html: post.node.acf.gvtwo_hero_content }}/>
                            </div>
                            </div>
                        </div>
                    </a>
                </HeroSection>
                <MainSection>
                    <div class="half-col-image">
                        <Img sizes={post.node.acf.gvtwo_section_one_image.localFile.childImageSharp.sizes} alt="Opt2Give Image" />
                    </div>
                    <div class="half-col">
                        <div class="half-copy">
                            <Img sizes={post.node.acf.gvtwo_section_one_logo.localFile.childImageSharp.sizes} alt="Opt2Give Logo" className={"opt2give-logo"} />
                            <div dangerouslySetInnerHTML={{ __html: post.node.acf.gvtwo_section_one_text }}/>
                            <Img sizes={post.node.acf.gvtwo_section_one_tgb_logo.localFile.childImageSharp.sizes} alt="TGB Mini Logo" className={"tgb-mini-logo"} />
                            <Link to={post.node.acf.gvtwo_section_one_link}>Learn More</Link>
                        </div>
                    </div>
                </MainSection>
                <MainSection>
                    <div class="half-col">
                        <div class="half-copy">
                            <Img sizes={post.node.acf.gvtwo_section_two_logo.localFile.childImageSharp.sizes} alt="Opt2Give Day Logo" className={"opt2give-day-logo"} />
                            <div dangerouslySetInnerHTML={{ __html: post.node.acf.gvtwo_section_two_text }}/>
                            <Link to={post.node.acf.gvtwo_section_two_link}>Learn More</Link>
                        </div>
                    </div>
                    <div class="half-col-image">
                        <Img sizes={post.node.acf.gvtwo_section_two_image.localFile.childImageSharp.sizes} alt="Opt2Give Day Image" />
                    </div>
                </MainSection>
                <MainSection>
                    <div class="half-col-image">
                        <Img sizes={post.node.acf.gvtwo_section_three_image.localFile.childImageSharp.sizes} alt="Opt2Give withU Image" />
                    </div>
                    <div class="half-col">
                        <div class="half-copy">
                            <Img sizes={post.node.acf.gvtwo_section_three_logo.localFile.childImageSharp.sizes} alt="Opt2Give withU Logo" className={"opt2give-withu-logo"} />
                            <div dangerouslySetInnerHTML={{ __html: post.node.acf.gvtwo_section_three_text }}/>
                            <Link to={post.node.acf.gvtwo_section_three_link}>Learn More</Link>
                        </div>
                    </div>
                </MainSection>

            </Layout>
            
        ))

    )

}

const PageBackground = styled.div`
    background-color: #000;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
    }
`

const TopBar = styled.div`
    width: 100%;
    padding: 50px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-family: "BonVivant";
        color: #fff;
        font-weight: 100;
        font-size: 90px;
        line-height: 2;
        margin-bottom: 0;
        margin-right: -80px;
        z-index: 1;
    }
    .gatsby-image-wrapper {
        max-width: 280px;
        width: 100%;
    }
    @media(max-width:768px) {
        padding-top: 100px;
    }
    @media(max-width:767px) {
        h1 {
            font-size: 60px;
            margin-right: -40px;
        }
        .gatsby-image-wrapper {
            max-width: 150px;
        }
    }
    @media(max-width:530px) {
        h1 {
            font-size: 32px;
            margin-right: -20px;
        }
        .gatsby-image-wrapper {
            max-width: 100px;
        }
    }
`

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #000;
      opacity: .85;
      z-index: 2;
    }
    .gatsby-image-wrapper {
      height: 100vh;
      width: 100%;
    }
  }
  .hero-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 3;
    .hero-flex {
      max-width: 1820px;
      width: 100%;
      height: 100vh;
      padding: 0 20px;
      margin: 0 auto;
      display: flex;
      .hero-left {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition-delay: 1s;
        .gatsby-image-wrapper {
          max-width: 800px;
          width: 100%;
          margin-top: 50px;
        }
      }
      .hero-right {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 50px;
        transition-delay: 1.5s;
        > div {
          text-align: right;
          h2 {
            font-family: "Stay Bright Script";
            color: #fff;
            font-size: 90px;
            font-weight: 100;
            line-height: 1.2;
            transition-duration: .3s;
          }
          p {
            font-family: "Bodoni Classic";
            color: #fff;
            text-transform: uppercase;
            font-weight: 100;
            font-size: 20px;
            line-height: 1.3;
            letter-spacing: 1px;
            transition-duration: .3s;
          }
        }
      }
    }
  }
  @media(max-width:1200px) {
    .hero-content {
      .hero-flex {
        .hero-right {
          > div {
            h2 {
              font-size: 72px;
            }
            p {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
  @media(max-width:992px) {
    .hero-content {
      .hero-flex {
        flex-wrap: wrap;
        .hero-left {
          width: 100%;
          .gatsby-image-wrapper {
            margin-top: 20vh;
            margin-left: 0;
            max-width: 400px;
            width: 100%;
          }
        }
        .hero-right {
          width: 100%;
          align-items: flex-start;
          > div {
            text-align: center;
          }
        }
      }
    }
  }
  @media(max-width: 560px) {
    .hero-content {
      .hero-flex {
        .hero-right {
          > div {
            h2 {
              font-size: 44px;
              margin-top: 0;
            }
            p {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`

const MainSection = styled.section`
  display: flex;
  .half-col-image {
      width: 50%;
      .gatsby-image-wrapper {
          height: 100%;
      }
  }
  .half-col {
      width: 50%;
      padding: 30px;
      text-align: center;
      .opt2give-logo {
          max-width: 400px;
          width: 100%;
          margin: 0 auto;
      }
      .tgb-mini-logo {
          max-width: 200px;
          width: 100%;
          margin: 0 auto;
          margin-top: -20px;
      }
      .opt2give-day-logo {
        max-width: 700px;
        width: 100%;
        margin: 0 auto;
      }
      .opt2give-withu-logo {
        max-width: 700px;
        width: 100%;
        margin: 0 auto;
      }
      .half-copy {
        position: relative;
        p {
            font-family: "Helvetica Thin";
            color: #fff;
            font-size: 20px;
            line-height: 1.3;
            span.fancy {
                font-family: "Stay Bright Script";
                font-weight: 100;
                font-size: 44px;
                color: #801a20;
                width: 100%;
                display: inline-block;
            }
            @media(max-width:1240px) {
                br {
                    display: none;
                }
            }
        }
        a {
            font-family: "Helvetica Thin";
            padding: 10px 35px;
            display: inline-block;
            color: #fff;
            background-color: #801a20;
            margin-top: 20px;
            text-decoration: none;
            text-transform: uppercase;
            border: 1px solid #fff;
            border-radius: 15px;
        }
      }
    }
    @media(max-width:767px) {
        flex-wrap: wrap;
        .half-col {
            width: 100%;
            order: 1;
        }
        .half-col-image {
            width: 100%;
            order: 2;
        }
    }
`

export default GivingPageV2