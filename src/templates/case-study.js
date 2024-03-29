import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { FaChevronDown } from 'react-icons/fa'

const CaseStudyPost = ({ data }) => (
    <Layout>
      <SEO 
        title={data.wordpressWpCaseStudy.acf.meta_title} 
        description={data.wordpressWpCaseStudy.acf.meta_description}
        image={data.wordpressWpCaseStudy.featured_media.localFile.childImageSharp.sizes}
        />
      <BlogContainer className={data.wordpressWpCaseStudy.acf.content_alignment}>

        <HeroBanner>
          <ImageBackground>
              <HeroImg sizes={data.wordpressWpCaseStudy.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressWpCaseStudy.title} />
          </ImageBackground>

          <HeroTitle
              data-sal="slide-right"
              data-sal-duration="1000"
              data-sal-delay="600"
              data-sal-easing="ease"
          >
              <h1>{data.wordpressWpCaseStudy.title}</h1>
              <p>Optomi <span>Technology</span> Talent</p>
          </HeroTitle>

          <HeroMain
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-easing="ease"
          >
            <div>
              <h2>Skill Sets</h2>
              <SkillSets dangerouslySetInnerHTML={{ __html: data.wordpressWpCaseStudy.acf.skill_sets }} />
            </div>
          </HeroMain>

          <HeroBottom
              data-sal="slide-down"
              data-sal-duration="1000"
              data-sal-easing="ease"
          >
              <button onClick={() => scrollTo('#study_two')} aria-label="Scroll"><FaChevronDown size={32}/></button>
          </HeroBottom>

        </HeroBanner>

        <ContentSection
        id="study_two">
          <div dangerouslySetInnerHTML={{ __html: data.wordpressWpCaseStudy.content }} />
        </ContentSection>

        <SectionMain
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
        >
          <div dangerouslySetInnerHTML={{ __html: data.wordpressWpCaseStudy.acf.section_one }} />
        </SectionMain>

        <SectionMain
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
        >
          <div dangerouslySetInnerHTML={{ __html: data.wordpressWpCaseStudy.acf.section_two }} />
        </SectionMain>

        <SectionMain
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
        >
          <div dangerouslySetInnerHTML={{ __html: data.wordpressWpCaseStudy.acf.section_three }} />
        </SectionMain>

        <SectionMain
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
        >
          <div dangerouslySetInnerHTML={{ __html: data.wordpressWpCaseStudy.acf.section_four }} />
        </SectionMain>

        <SectionTestimonial
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
        >
          <div dangerouslySetInnerHTML={{ __html: data.wordpressWpCaseStudy.acf.section_five }} />
        </SectionTestimonial>
          
      </BlogContainer>
    </Layout>
)


const HeroBanner = styled.div`
    position: relative; 
    min-height: 100vh;
    min-width: 100%;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-end;
    z-index: 2;
    @media (max-width:1000px) {
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
        color: #5ab3e8;
        margin-bottom: 0;
        text-transform: lowercase;
        font-size: 72px;
        font-weight: 100;
        line-height: 1;
        @media(max-width:1200px) {
            font-size: 62px;
        }
        @media(max-width:1000px) {
            font-size: 52px;
        }
        @media(max-width:768px) {
          font-size: 42px;
        }
        @media(max-width:420px) {
          font-size: 32px;
        }
    }
    p {
        font-family: "Helvetica Thin";
        letter-spacing: 2px;
        width: 100%;
        text-align: left;
        z-index: 1;
        font-size: 20px;
        color: rgb(140,145,146);
        padding-left: 40px;
        span {
            color: #5ab3e8;
        }
        @media(max-width:1000px) {
          text-align: center;
        }
        @media(max-width:600px) {
            font-size: 18px;
            padding-left: 0;
        }
    }
    @media(max-width: 1000px) {
        position: relative;
        top: auto;
        left: auto;
        padding: 20px;
        padding-top: 100px;
        text-align: center;
    }
`

const HeroMain = styled.div`
    max-width: 1540px;
    width: 100%;
    padding-left: 120px;
    padding-right: 120px;
    margin: 0 auto;
    margin-bottom: 50px;
    position: relative;
    z-index: 2;
    div {
      max-width: 800px;
      margin-left: auto;
    }
    h2 {
      font-family: "BonVivant";
      color: #fff;
      text-align: center;
      font-size: 72px;
      line-height: 1.5;
      font-weight: 100;
      margin-bottom: 10px;
      text-transform: lowercase;
      transition-duration: 2s;
      transition-delay: 1s;
    }
    @media(max-width:1500px) {
        max-width: 1340px;
    }
    @media(max-width:1200px) {
        max-width: 1140px;
    }
    @media(max-width:800px) {
        h2 {
            font-size: 24px;
            letter-spacing: 3px;
        }
    }
    @media(max-width:700px) {
        margin-top: 0;
        padding-left: 20px;
        padding-right: 20px;
    }
`

const SkillSets = styled.p`
    font-family: "Helvetica Thin";
    font-size: 32px;
    color: #fff;
    line-height: 1.2;
    text-align: center;
    @media(max-width: 1000px) {
      font-size: 28px;
    }
    @media(max-width: 420px) {
      font-size: 20px;
    }
`

const HeroBottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 1;
    transition-delay: 1.5s;
    p {
        font-family: "Helvetica Thin";
        text-align: center;
        margin: 0;
        color: rgb(140, 145, 146);
    }
    button {
        color: #5ab3e8;
        background-color: transparent;
        border: none;
        outline: 0;
        &:hover {
            cursor: pointer;
        }
    }
`

const ContentSection = styled.div`
    max-width: 1540px;
    width: 100%;
    padding-left: 120px;
    padding-right: 120px;
    padding-top: 100px;
    padding-bottom: 80px;
    margin: 0 auto;
    p {
      font-family: "Helvetica Thin";
      font-size: 24px;
      color: #fff;
      line-height: 1.2;
      &.bonvivant {
        font-family: "BonVivant";
        color: #fff;
        font-size: 72px;
        line-height: 1.5;
        font-weight: 100;
        margin-bottom: 10px;
        text-transform: lowercase;
      }
    }
    h2 {
      font-family: "Helvetica Thin";
      font-size: 80px;
      font-weight: 100;
      color: #5ab3e8;
      line-height: 1.2;
    }
    @media(max-width:1000px) {
      p {
        font-size: 20px;
        &.bonvivant {
          font-size: 46px;
        }
      }
      h2 {
        font-size: 60px;
      }
    }
    @media(max-width:768px) {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media(max-width:420px) {
      h2 {
        font-size: 40px;
      }
    }
`

const SectionMain = styled.div`
    max-width: 1540px;
    width: 100%;
    padding-left: 120px;
    padding-right: 120px;
    margin: 0 auto;
    > div {
      max-width: 800px;
      padding-top: 60px;
      padding-bottom: 40px;
      border-top: 1px solid #8a8d8f;
    }
    p {
      font-family: "Helvetica Thin";
      font-size: 24px;
      color: #fff;
      line-height: 1.2;
      &.blue {
        color: #5ab3e8;
      }
      &.large-number {
        font-size: 120px;
      }
      &.large-letters {
        font-size: 120px;
      }
    }
    h2 {
      font-family: "Helvetica Thin";
      font-size: 52px;
      font-weight: 100;
      line-height: 1.2;
      &.gray {
        color: #8a8d8f;
      }
      &.uppercase {
        text-transform: uppercase;
        letter-spacing: 10px;
      }
    }
    h3 {
      font-family: "Helvetica Thin";
      font-size: 42px;
      font-weight: 100;
      line-height: 1.2;
      &.gray {
        color: #8a8d8f;
      }
      &.uppercase {
        text-transform: uppercase;
      }
    }
    h4 {
      font-family: "Helvetica Thin";
      font-size: 28px;
      font-weight: 100;
      line-height: 1.2;
      &.gray {
        color: #8a8d8f;
      }
      &.uppercase {
        text-transform: uppercase;
      }
    }
    h5 {
      font-family: "Helvetica Thin";
      font-size: 20px;
      font-weight: 100;
      line-height: 1.2;
      &.gray {
        color: #8a8d8f;
      }
      &.uppercase {
        text-transform: uppercase;
      }
    }
    .inline {
      display: inline-block;
    }
    .narrow {
      max-width: 250px;
    }
    .medium {
      max-width: 600px;
    }
    .practice-areas {
      display: flex;
      flex-wrap: wrap;
      p {
        width: calc(20% - 10px);
        margin: 5px;
        padding: 10px;
        border: 2px solid #003557;
        text-align: center;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(8),
        &:nth-child(9),
        &:nth-child(10) {
          border-color: #878a8c;
        }
        &:nth-child(11),
        &:nth-child(12),
        &:nth-child(13),
        &:nth-child(14),
        &:nth-child(15) {
          border-color: #734c28;
        }
      }
    }
    @media(max-width:1000px) {
      p {
        font-size: 20px;
        &.large-number {
          font-size: 80px;
        }
        &.large-letters {
          font-size: 80px;
        }
      }
    }
    @media(max-width:768px) {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media(max-width:767px) {
      .practice-areas {
        justify-content: center;
        p {
          width: calc(33.33% - 10px);
        }
      }
    }
    @media(max-width:420px) {
      p {
        &.large-number {
          font-size: 60px;
        }
        &.large-letters {
          font-size: 60px;
        }
      }
      h3 {
        font-size: 28px;
      }
      .practice-areas {
        justify-content: center;
        p {
          width: calc(50% - 10px);
        }
      }
    }
`

const SectionTestimonial = styled.div`
    max-width: 1540px;
    width: 100%;
    padding-left: 120px;
    padding-right: 120px;
    margin: 0 auto;
    > div {
      padding-top: 60px;
      padding-bottom: 120px;
      border-top: 1px solid #8a8d8f;
    }
    p {
      font-family: "Helvetica Thin";
      font-size: 24px;
      color: #fff;
      line-height: 1.2;
      &.small {
        font-size: 14px;
      }
      &.bonvivant {
        font-family: "BonVivant";
        color: #fff;
        font-size: 72px;
        line-height: 1.5;
        font-weight: 100;
        margin-bottom: 10px;
        text-transform: lowercase;
      }
    }
    h2 {
      font-family: "Helvetica Thin";
      font-size: 52px;
      font-weight: 100;
      line-height: 1.2;
      &.white {
        color: #fff;
      }
      &.blue {
        color: #5ab3e8;
      }
      &.uppercase {
        text-transform: uppercase;
        letter-spacing: 10px;
      }
      &.bonvivant {
        font-family: "BonVivant";
        color: #fff;
        font-size: 72px;
        line-height: 1.5;
        font-weight: 100;
        margin-bottom: 10px;
        text-transform: lowercase;
      }
    }
    @media(max-width:1000px) {
      p {
        font-size: 20px;
      }
    }
    @media(max-width:768px) {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media(max-width:420px) {
      h2 {
        font-size: 42px;
        &.bonvivant {
          font-size: 46px;
        }
      }
    }
`

const BlogContainer = styled.div`
    &.right {
      ${HeroMain} {
        > div {
          margin-left: 0;
          margin-right: auto;
        }
      }
      ${SectionTestimonial} {
        text-align: right;
        > div {
          margin-left: auto;
        }
      }
      ${SectionMain} {
        text-align: right;
        > div {
          margin-left: auto;
        }
      }
    }
`


export default CaseStudyPost

export const query = graphql`
query($id: Int!) {
  wordpressWpCaseStudy(wordpress_id: { eq: $id }) {
      title
      content
      date(formatString: "DD MMM")
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
        custom_author
        custom_category
        meta_title
        meta_description
        content_alignment
        skill_sets
        section_one
        section_two
        section_three
        section_four
        section_five
      }
    }
  }
`