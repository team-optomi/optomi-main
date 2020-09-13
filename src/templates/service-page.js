import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from 'styled-components'

const ServicePage = ({ data }) => (
    <Layout>
        <SEO 
        title={data.wordpressWpService.title} 
        description={data.wordpressWpService.acf.meta_description}
        image={data.wordpressWpService.featured_media.localFile.childImageSharp.sizes}
        />
        <MainContainer>
            <ImageContainer>
                <BackgroundImg sizes={data.wordpressWpService.acf.single_page_background.localFile.childImageSharp.sizes} alt={data.wordpressWpService.title}/>
            </ImageContainer>
            
            <MainContent>
                <h1
                data-sal="slide-down"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >{data.wordpressWpService.title}</h1>
                <MainCopy 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="900"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: data.wordpressWpService.acf.job_titles }}/>
                <div
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                >
                    <h2>Explore job opportunities with us</h2>
                    <a href="https://optomi.com/jobs/#/jobs" target="_blank" rel="noopener noreferrer" aria-label="Link">Job Portal</a>
                </div>
            </MainContent>
        </MainContainer>
    </Layout>
)

const MainContainer = styled.div`
    position: relative;
    z-index: 1;
    padding-top: 30vh;
    padding-bottom: 30vh;
`

const ImageContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
`

const BackgroundImg = styled(Img)`
    width: 100%;
    height: 100%;
`

const MainContent = styled.div`
    position: relative;
    max-width: 1140px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    z-index: 3;
    text-align: center;
    h1 {
        font-family: "Helvetica Thin";
        color: #298fc2;
        margin-bottom: 50px;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 72px;
    }
    h2 {
        font-family: "Helvetica Thin";
        color: #fff;
        font-weight: 100;
        margin-bottom: 20px;
        margin-top: 50px;
        font-size: 60px;
    }
    a {
        display: inline-block;
        background-color: #298fc2;
        padding: 15px 70px;
        font-size: 24px;
        color: #fff;
        text-decoration: none;
        text-transform: lowercase;
    }
    @media(max-width:1500px) {
        h1 {
            font-size: 60px;
        }
        h2 {
            font-size: 46px;
        }
    }
    @media(max-width:1200px) {
        h1 {
            font-size: 46px;
        }
        h2 {
            font-size: 32px;
        }
        a {
            font-size: 20px;
        }
    }
    @media(max-width:600px) {
        h1 {
            font-size: 32px;
        }
        h2 {
            font-size: 28px;
        }
        a {
            font-size: 18px;
        }
    }
`

const MainCopy = styled.div`
    text-align: center;
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 32px;
        margin-bottom: 20px;
        line-height: 1.2;
    }
    @media(max-width:1500px) {
        p {
            font-size: 28px;
        }
    }
    @media(max-width:1200px) {
        p {
            font-size: 24px;
        }
    }
    @media(max-width:600px) {
        p {
            font-size: 20px;
        }
    }
`

export default ServicePage

export const query = graphql`
query($id: Int!) {
  wordpressWpService(wordpress_id: { eq: $id }) {
      title
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
        job_titles
        single_page_background {
            localFile {
                childImageSharp {
                    sizes(maxWidth: 1920) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
        }
        meta_description
      }
    }
  }
`