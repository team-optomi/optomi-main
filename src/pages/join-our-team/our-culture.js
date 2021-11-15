import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const OurCulturePage = () => {

    const data = useStaticQuery(graphql`
        query {
            pageContent: allWordpressWpCustomPage(filter: {wordpress_id: {eq: 1736}}) {
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
                            cp_section_one_copy
                            cp_section_one_background {
                                title
                                localFile {
                                  childImageSharp {
                                    sizes(maxWidth: 1800) {
                                        ...GatsbyImageSharpSizes
                                    }
                                  }
                                }
                              }
                            cp_values_copy
                            cp_value_one {
                                title
                                localFile {
                                  childImageSharp {
                                    sizes(maxWidth: 1000) {
                                        ...GatsbyImageSharpSizes
                                    }
                                  }
                                }
                              }
                            cp_value_two {
                                title
                                localFile {
                                  childImageSharp {
                                    sizes(maxWidth: 1000) {
                                        ...GatsbyImageSharpSizes
                                    }
                                  }
                                }
                              }
                            cp_value_three {
                                title
                                localFile {
                                  childImageSharp {
                                    sizes(maxWidth: 1000) {
                                        ...GatsbyImageSharpSizes
                                    }
                                  }
                                }
                              }
                            cp_value_four {
                                title
                                localFile {
                                  childImageSharp {
                                    sizes(maxWidth: 1000) {
                                        ...GatsbyImageSharpSizes
                                    }
                                  }
                                }
                              }
                            cp_value_five {
                                title
                                localFile {
                                  childImageSharp {
                                    sizes(maxWidth: 1000) {
                                        ...GatsbyImageSharpSizes
                                    }
                                  }
                                }
                              }
                            cp_value_six {
                                title
                                localFile {
                                  childImageSharp {
                                    sizes(maxWidth: 1000) {
                                        ...GatsbyImageSharpSizes
                                    }
                                  }
                                }
                              }
                            cp_section_three_title
                            cp_section_three_copy
                            cp_section_three_background {
                                title
                                localFile {
                                  childImageSharp {
                                    sizes(maxWidth: 1000) {
                                        ...GatsbyImageSharpSizes
                                    }
                                  }
                                }
                              }
                            cp_committee_title
                            cp_committee_one_icon {
                                title
                                localFile {
                                  childImageSharp {
                                    sizes(maxWidth: 400) {
                                        ...GatsbyImageSharpSizes
                                    }
                                  }
                                }
                              }
                            cp_committee_one_title
                            cp_committee_one_copy
                            cp_committee_two_icon {
                                title
                                localFile {
                                  childImageSharp {
                                    sizes(maxWidth: 400) {
                                        ...GatsbyImageSharpSizes
                                    }
                                  }
                                }
                              }
                            cp_committee_two_title
                            cp_committee_two_copy
                            cp_committee_three_icon {
                                title
                                localFile {
                                  childImageSharp {
                                    sizes(maxWidth: 400) {
                                        ...GatsbyImageSharpSizes
                                    }
                                  }
                                }
                              }
                            cp_committee_three_title
                            cp_committee_three_copy
                            cp_committee_four_icon {
                                title
                                localFile {
                                  childImageSharp {
                                    sizes(maxWidth: 400) {
                                        ...GatsbyImageSharpSizes
                                    }
                                  }
                                }
                              }
                            cp_committee_four_title
                            cp_committee_four_copy
                            cp_committee_five_icon {
                                title
                                localFile {
                                  childImageSharp {
                                    sizes(maxWidth: 400) {
                                        ...GatsbyImageSharpSizes
                                    }
                                  }
                                }
                              }
                            cp_committee_five_title
                            cp_committee_five_copy
                            cp_committee_six_icon {
                                title
                                localFile {
                                  childImageSharp {
                                    sizes(maxWidth: 400) {
                                        ...GatsbyImageSharpSizes
                                    }
                                  }
                                }
                              }
                            cp_committee_six_title
                            cp_committee_six_copy
                            cp_committee_purpose_copy
                            cp_committee_background {
                              title
                              localFile {
                                childImageSharp {
                                  sizes(maxWidth: 2000) {
                                      ...GatsbyImageSharpSizes
                                  }
                                }
                              }
                            }
                            cp_committee_arrow {
                              title
                              localFile {
                                childImageSharp {
                                  sizes(maxWidth: 400) {
                                      ...GatsbyImageSharpSizes
                                  }
                                }
                              }
                            }
                            meta_title
                            meta_description
                        }
                    }
                }
            }
        }
    `)

    return(
        
        data.pageContent.edges.map(post => (
            <Layout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />
                <HeroBanner>
                    
                    <ImageBackground>
                        <HeroImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                    </ImageBackground>

                    <HeroTitle
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                    >
                        <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
                    </HeroTitle>

                </HeroBanner>

                <SectionOne>

                    <Img className="bg-image" sizes={post.node.acf.cp_section_one_background.localFile.childImageSharp.sizes} alt={post.node.acf.cp_section_one_background.title}  />

                    <div dangerouslySetInnerHTML={{ __html: post.node.acf.cp_section_one_copy}} />

                </SectionOne>

                <SectionTwo>

                    <div dangerouslySetInnerHTML={{ __html: post.node.acf.cp_values_copy}} />
                    <div class="value-box">
                      <Img className="value value-one" sizes={post.node.acf.cp_value_one.localFile.childImageSharp.sizes} alt={post.node.acf.cp_value_one.title}  />
                      <Img className="value value-two" sizes={post.node.acf.cp_value_two.localFile.childImageSharp.sizes} alt={post.node.acf.cp_value_two.title}  />
                      <Img className="value value-three" sizes={post.node.acf.cp_value_three.localFile.childImageSharp.sizes} alt={post.node.acf.cp_value_three.title}  />
                      <Img className="value value-four" sizes={post.node.acf.cp_value_four.localFile.childImageSharp.sizes} alt={post.node.acf.cp_value_four.title}  />
                      <Img className="value value-five" sizes={post.node.acf.cp_value_five.localFile.childImageSharp.sizes} alt={post.node.acf.cp_value_five.title}  />
                      <Img className="value value-six" sizes={post.node.acf.cp_value_six.localFile.childImageSharp.sizes} alt={post.node.acf.cp_value_six.title}  />
                    </div>
                </SectionTwo>

                <SectionThree>

                    <h2 dangerouslySetInnerHTML={{ __html: post.node.acf.cp_section_three_title}} />
                    <div class="section-content">
                      <Img className="bg-image" sizes={post.node.acf.cp_section_three_background.localFile.childImageSharp.sizes} alt={post.node.acf.cp_section_three_background.title}  />
                      <div class="section-copy" dangerouslySetInnerHTML={{ __html: post.node.acf.cp_section_three_copy}} />
                    </div>

                </SectionThree>

                <SectionFour>

                <div class="bottom-copy" dangerouslySetInnerHTML={{ __html: post.node.acf.cp_committee_purpose_copy}} />

                    <h2 dangerouslySetInnerHTML={{ __html: post.node.acf.cp_committee_title}} />

                    <div class="icon-row">
                        <div class="icon-col">
                            <Img className="icon" sizes={post.node.acf.cp_committee_one_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cp_committee_one_icon.title}  />
                            <h3 dangerouslySetInnerHTML={{ __html: post.node.acf.cp_committee_one_title}} />
                            <div class="hover-copy" dangerouslySetInnerHTML={{ __html: post.node.acf.cp_committee_one_copy}} />
                        </div>
                        <div class="icon-col">
                            <Img className="icon" sizes={post.node.acf.cp_committee_two_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cp_committee_two_icon.title}  />
                            <h3 dangerouslySetInnerHTML={{ __html: post.node.acf.cp_committee_two_title}} />
                            <div class="hover-copy" dangerouslySetInnerHTML={{ __html: post.node.acf.cp_committee_two_copy}} />
                        </div>
                        <div class="icon-col">
                            <Img className="icon" sizes={post.node.acf.cp_committee_three_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cp_committee_three_icon.title}  />
                            <h3 dangerouslySetInnerHTML={{ __html: post.node.acf.cp_committee_three_title}} />
                            <div class="hover-copy" dangerouslySetInnerHTML={{ __html: post.node.acf.cp_committee_three_copy}} />
                        </div>
                        <div class="icon-col">
                            <Img className="icon" sizes={post.node.acf.cp_committee_four_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cp_committee_four_icon.title}  />
                            <h3 dangerouslySetInnerHTML={{ __html: post.node.acf.cp_committee_four_title}} />
                            <div class="hover-copy" dangerouslySetInnerHTML={{ __html: post.node.acf.cp_committee_four_copy}} />
                        </div>
                        <div class="icon-col">
                            <Img className="icon" sizes={post.node.acf.cp_committee_five_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cp_committee_five_icon.title}  />
                            <h3 dangerouslySetInnerHTML={{ __html: post.node.acf.cp_committee_five_title}} />
                            <div class="hover-copy" dangerouslySetInnerHTML={{ __html: post.node.acf.cp_committee_five_copy}} />
                        </div>
                        <div class="icon-col">
                            <Img className="icon" sizes={post.node.acf.cp_committee_six_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cp_committee_six_icon.title}  />
                            <h3 dangerouslySetInnerHTML={{ __html: post.node.acf.cp_committee_six_title}} />
                            <div class="hover-copy" dangerouslySetInnerHTML={{ __html: post.node.acf.cp_committee_six_copy}} />
                        </div>
                        <Img className="committee-arrow" sizes={post.node.acf.cp_committee_arrow.localFile.childImageSharp.sizes} alt={post.node.acf.cp_committee_arrow.title}  />
                    </div>

                    <Img className="bg-image" sizes={post.node.acf.cp_committee_background.localFile.childImageSharp.sizes} alt={post.node.acf.cp_committee_background.title}  />

                </SectionFour>


            </Layout>
            
        ))
    )
}

const HeroBanner = styled.div`
    position: relative; 
    min-height: 100vh;
    min-width: 100%;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width:770px) {
        align-items: flex-start;
    }
    @media (max-width:600px) {
        display: block;
    }
`

const ImageBackground = styled.div`
    background-color: #000;
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
`

const HeroImg = styled(Img)`
    height: 100vh;
    width: 100%;
    img {
        margin-bottom: 0;
    }
`

const HeroTitle = styled.div`
    position: absolute;
    top: 100px;
    left: 150px;
    h1 {
      font-family: "Helvetica Thin";
      color: #fff;
      margin-bottom: 0;
      font-size: 72px;
      font-weight: 100;
      line-height: 1;
      text-transform: uppercase;
      position: relative;
      z-index: 2;
        span {
          font-family: BonVivant;
          font-size: 160px;
          color: rgb(41,143,194);
          text-transform: capitalize;
          position: relative;
          left: -55px;
          top: 40px;
          z-index: 1;
        }
        @media(max-width:1200px) {
            font-size: 62px;
        }
        @media(max-width:770px) {
            font-size: 52px;
        }
        @media(max-width:360px) {
            font-size: 36px;
        }
    }
    p {
        font-family: "Helvetica Thin";
        letter-spacing: 2px;
        width: 100%;
        text-align: center;
        z-index: 1;
        font-size: 20px;
        color: rgb(140,145,146);
        span {
            color: #5ab3e8;
        }
        @media(max-width:770px) {
            font-size: 18px;
        }
    }
    @media(max-width: 770px) {
        position: relative;
        top: auto;
        left: auto;
        padding: 20px;
        padding-top: 100px;
        text-align: center;
        width: 100%;
    }
`

const SectionOne = styled.section`
    background-color: #00385c;
    position: relative;
    padding: 100px 20px 65px;
    width: 100%;
    .bg-image {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: .2;
    }
    p {
      position: relative;
      font-family: "Helvetica Thin";
      color: rgb(255, 255, 255);
      font-size: 24px;
      line-height: 1.3;
      text-align: left;
      z-index: 1;
      max-width: 1000px;
      margin: 0 auto;
      margin-bottom: 20px;
      span {
        font-family: BonVivant;
        font-size: 50px;
      }
    }
`

const SectionTwo = styled.section`
  background-color: #211e1e;
  position: relative;
  padding: 100px 20px;
  width: 100%;
  p {
    position: relative;
    font-family: "Helvetica Thin";
    color: rgb(255, 255, 255);
    font-size: 24px;
    line-height: 1.3;
    text-align: center;
    z-index: 1;
    max-width: 1000px;
    margin: 0 auto;
  }
  .value-box {
    position: relative;
    width: 100%;
    max-width: 1400px;
    height: 700px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 50px;
    .value {
      position: absolute !important;
      width: 100%;
    }
    .value-one {
      top: 0;
      left: 0;
      max-width: 780px;
    }
    .value-two {
      top: -9px;
      right: 0;
      max-width: 894px;
    }
    .value-three {
      top: 125px;
      left: 94px;
      max-width: 893px;
    }
    .value-four {
      top: 230px;
      right: -29px;
      max-width: 1040px;
    }
    .value-five {
      top: 323px;
      left: -45px;
      max-width: 904px;
    }
    .value-six {
      top: 430px;
      right: 116px;
      max-width: 1000px;
    }
  }
`

const SectionThree = styled.section`
  background-color: #211e1e;
  padding: 0 20px;
  h2 {
    font-family: "Helvetica Thin";
    color: #fff;
    margin-bottom: 0;
    font-size: 36px;
    font-weight: 100;
    line-height: 1;
    position: relative;
    z-index: 2;
    text-align: center;
      span {
        font-family: BonVivant;
        font-size: 72px;
        text-transform: capitalize;
        position: relative;
        left: -10px;
        top: 0px;
        z-index: 1;
      }
  }
  .section-content {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .bg-image {
      max-width: 800px;
      width: 100%;
      opacity: .7;
    }
    .section-copy {
      max-width: 644px;
      width: 100%;
      margin-left: -244px;
      p {
        position: relative;
        font-family: "Helvetica Thin";
        color: rgb(255,255,255);
        font-size: 22px;
        line-height: 1.3;
        text-align: right;
      }
    }
  }
`

const SectionFour = styled.section`
  background-color: #211e1e;
  padding: 100px 20px;
  position: relative;
  h2 {
    font-family: "Helvetica Thin";
    color: #fff;
    margin-bottom: 35px;
    font-size: 36px;
    font-weight: 100;
    line-height: 1;
    position: relative;
    z-index: 2;
    text-align: center;
    span {
      font-family: BonVivant;
      font-size: 72px;
      text-transform: capitalize;
      position: relative;
      left: -10px;
      top: 0px;
      z-index: 1;
    }
  }
  .icon-row {
    width: 100%;
    max-width: 1420px;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    z-index: 2;
    .icon-col {
      width: 16.66%;
      padding: 0 10px;
      transition-duration: .3s;
      h3 {
        position: relative;
        font-family: "Helvetica Thin";
        color: rgb(255,255,255);
        font-size: 24px;
        line-height: 1.3;
        text-align: center;
      }
      .hover-copy {
        position: absolute;
        width: 100%;
        bottom: -240px;
        left: 0;
        opacity: 0;
        visibility: hidden;
        transition-duration: .3s;
        p, ul {
          font-family: "Helvetica Thin";
          color: rgb(255,255,255);
          font-size: 24px;
          line-height: 1.3;
        }
        p {
          text-align: center;
        }
        ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          max-width: 400px;
          margin-left: auto;
          margin-right: 250px;
          li {
            width: 50%;
          }
        }
      }
      &:hover {
        .hover-copy {
          opacity: 0;
          visibility: hidden;
        }
      }
    }
    .committee-arrow {
      position: absolute !important;
      bottom: -200px;
      left: 250px;
      width: 100%;
      max-width: 400px;
      transition-duration: .3s;
      opacity: 0;
      visibility: hidden;
    }
    &:hover {
      .committee-arrow {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
  .bottom-copy {
    max-width: 1400px;
    margin: 0 auto;
    margin-bottom: 100px;
    h2 {
      font-family: BonVivant;
      font-size: 90px;
      position: relative;
      z-index: 1;
      text-align: center;
      color: rgb(41, 143, 194);
    }
    p {
      font-family: "Helvetica Thin";
      color: rgb(255,255,255);
      font-size: 24px;
      line-height: 1.3;
      max-width: 735px;
      margin: 0 auto;
      margin-left: 475px;
      margin-top: -50px;
      position: relative;
      z-index: 2;  
    }
  }
  .bg-image {
    position: absolute !important;
    width: 120%;
    top: 440px;
    left: -10%;
    opacity: .3;
    z-index: 1;
  }
`


export default OurCulturePage