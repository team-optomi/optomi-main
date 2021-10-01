import React from "react"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const AcadomiInfoPage = ({ data }) => (
    <Layout>
      {data.pageContent.edges.map(post => (
          <div>
            <SEO 
            title={post.node.acf.meta_title} 
            description={post.node.acf.meta_description}
            image={post.node.featured_media.localFile.childImageSharp.sizes}
            />
            <SectionOne>
                <Img className={"section-background"} sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.featured_media.title}/>
                <div class="section-content">
                    <Img className={"section-icon"} sizes={post.node.acf.ai_section_one_icon.localFile.childImageSharp.sizes} alt={post.node.acf.ai_section_one_icon.title}/>
                    <div dangerouslySetInnerHTML={{ __html: post.node.acf.ai_section_one_copy }} />
                </div>
            </SectionOne>
            <SectionTwo>
                <Img className={"section-background"} sizes={post.node.acf.ai_section_two_background.localFile.childImageSharp.sizes} alt={post.node.acf.ai_section_two_background.title}/>
                <div class="section-content">
                    <div dangerouslySetInnerHTML={{ __html: post.node.acf.ai_section_two_copy }} />
                </div>
            </SectionTwo>
            <SectionThree>
                <Img className={"section-background"} sizes={post.node.acf.ai_section_three_background.localFile.childImageSharp.sizes} alt={post.node.acf.ai_section_three_background.title}/>
                <div class="section-content">
                    <div dangerouslySetInnerHTML={{ __html: post.node.acf.ai_section_three_copy }} />
                </div>
            </SectionThree>
            <SectionFour>
                <Img className={"section-background"} sizes={post.node.acf.ai_section_four_background.localFile.childImageSharp.sizes} alt={post.node.acf.ai_section_four_background.title}/>
                <div class="section-content">
                    <div dangerouslySetInnerHTML={{ __html: post.node.acf.ai_section_four_copy }} />
                </div>
            </SectionFour>
          </div>
      ))}
      
    </Layout>
  )

const SectionOne = styled.section`
    position: relative;
    background-color: #000;
    padding: 100px 20px 50px;
    .section-background {
        position: absolute !important;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0,0,0,.5);
        }
    }
    .section-content {
        position: relative;
        width: 100%;
        text-align: center;
        z-index: 2;
        .section-icon {
            max-width: 400px;
            margin: 0 auto;
            margin-bottom: 15px;
        }
        h1 {
            font-family: 'Helvetica Thin';
            font-weight: 300;
            font-size: 44px;
            color: #fff;
            text-transform: lowercase;
            line-height: 1.2;
            span {
                font-family: 'BonVivant';
                font-size: 72px;
            }
        }
    }
    @media(max-width:767px) {
        .section-content {
            h1 {
                font-size: 28px;
                span {
                    display: block;
                    font-size: 44px;
                }
            }
        }
    }
`

const SectionTwo = styled.section`
    position: relative;
    background-color: #211e1e;
    padding: 100px 20px 50px;
    .section-background {
        position: absolute !important;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }
    .section-content {
        position: relative;
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        z-index: 2;
        h2 {
            font-family: 'Helvetica Thin';
            font-weight: 300;
            font-size: 40px;
            color: #fff;
            text-transform: lowercase;
            text-align: right;
            line-height: 1.2;
            span {
                font-family: 'BonVivant';
                font-size: 64px;
            }
        }
        a {
            font-family: 'Helvetica Thin';
            color: #fff;
            background-color: #003354;
            position: relative;
            display: block;
            margin: 0 auto;
            width: 200px;
            text-align: center;
            padding: 12px 0;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 1px;
            border: 2px solid #fff;
            border-radius: 10px;
        }
    }
    @media(max-width:900px) {
        .section-content {
            h2 {
                font-size: 28px;
                text-align: center;
                span {
                    font-size: 44px;
                }
            }
        }
    }
    @media(max-width:767px) {
        .section-content {
            h2 {
                font-size: 24px;
                span {
                    display: block;
                    font-size: 36px;
                }
            }
        }
    }
`

const SectionThree = styled.section`
    position: relative;
    background-color: #000;
    padding: 100px 20px;
    .section-background {
        position: absolute !important;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }
    .section-content {
        position: relative;
        width: 100%;
        z-index: 2;
        > div {
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            .col-one {
                width: 33.33%;
            }
            .col-two {
                width: 33.33%;
            }
            .col-three {
                width: 33.33%;
            }
        }
        h2 {
            font-family: 'Helvetica Thin';
            font-weight: 300;
            font-size: 44px;
            color: #fff;
            line-height: 1.2;
            span {
                font-family: 'BonVivant';
                font-size: 90px;
            }
        }
        ul {
            list-style: none;
            li {
                font-family: 'Helvetica Thin';
                font-weight: 300;
                font-size: 20px;
                color: #fff;
                line-height: 1.2;
                margin-bottom: 0;
            }
        }
    }
    @media(max-width:900px) {
        .section-content {
            > div {
                text-align: center;
                .col-one {
                    width: 100%;
                }
                .col-two {
                    width: 100%;
                }
                .col-three {
                    width: 100%;
                }
                ul {
                    margin: 0;
                }
            }
        }
    }
    @media(max-width:767px) {
        .section-content {
            h2 {
                span {
                    font-size: 44px;
                }
            }
        }
    }
`

const SectionFour = styled.section`
    position: relative;
    background-color: #211e1e;
    padding: 100px 20px;
    .section-background {
        position: absolute !important;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }
    .section-content {
        position: relative;
        width: 100%;
        text-align: center;
        z-index: 2;
        h2 {
            font-family: 'Helvetica Thin';
            font-weight: 300;
            font-size: 32px;
            color: #fff;
            line-height: 1.2;
            span.acadomi-title {
                font-size: 72px;
                letter-spacing: 20px;
                color: #666767;
            }
            span.bonvivant {
                font-family: 'BonVivant';
                font-size: 72px;
                color: #fff;
            }
        }
        ul {
            list-style: none;
            li {
                font-family: 'Helvetica Thin';
                font-weight: 300;
                font-size: 24px;
                color: #fff;
                line-height: 1.2;
                margin-bottom: 5px;
            }
        }
        p {
            font-family: 'Helvetica Thin';
            font-weight: 300;
            font-size: 24px;
            color: #fff;
            line-height: 1.2;
            margin-bottom: 0;
            span {
                font-family: 'BonVivant';
                font-size: 56px;
            }
        }
        a {
            font-family: 'Helvetica Thin';
            color: #fff;
            background-color: #003354;
            position: relative;
            display: block;
            margin: 0 auto;
            width: 200px;
            text-align: center;
            padding: 12px 0;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 1px;
            border: 2px solid #fff;
            border-radius: 10px;
        }
    }
    @media(max-width:900px) {
        .section-content {
            ul {
                margin-left: 0;
            }
        }
    }
    @media(max-width:767px) {
        .section-content {
            h2 {
                font-size: 24px;
                span.acadomi-title {
                    font-size: 36px;
                    letter-spacing: 15px;
                }
                span.bonvivant {
                    font-size: 44px;
                }
            }
            ul {
                li {
                    font-size: 20px;
                }
            }
            p {
                font-size: 20px;
                span {
                    font-size: 32px;
                }
            }
        }
    }
`
  
  export default AcadomiInfoPage
  
  export const query = graphql`
    query {
      pageContent: allWordpressWpCustomPage(filter: {wordpress_id: {eq: 1720}}) {
        edges {
          node {
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
              ai_section_one_icon {
                title
                localFile {
                  childImageSharp {
                    sizes(maxWidth: 1200) {
                        ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
              ai_section_one_copy
              ai_section_two_background {
                title
                localFile {
                  childImageSharp {
                    sizes(maxWidth: 1920) {
                        ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
              ai_section_two_copy
              ai_section_three_background {
                title
                localFile {
                  childImageSharp {
                    sizes(maxWidth: 1920) {
                        ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
              ai_section_three_copy
              ai_section_four_background {
                title
                localFile {
                  childImageSharp {
                    sizes(maxWidth: 1920) {
                        ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
              ai_section_four_copy
            }
          }
        }
      }
    }
  `