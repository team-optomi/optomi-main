import React, { useEffect } from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ParticleBG from "../components/particle-bg"
import ServiceOfferingButtons from "../components/service-offering-buttons"

import SkillFocused from "../components/skill-focused.js"
import { FaChevronDown } from 'react-icons/fa'


const ServicesPage = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#line_trigger',
                start: '30% 70%',
                end: '30% 60%',
                id: 'arrow_line',
                },
            })
            tl.to('.line-one', {width: '70%', duration: 2 })
            tl.to('.line-two', { height: '70px', duration: 1 })
            tl.to('.arrow', {opacity: '1', duration: 1 })
    
    }, []);

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 13}}}}) {
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
                            second_paragraph
                            meta_title
                            meta_description
                        }
                    }
                }
            }
            allWordpressWpService(sort: {order: DESC, fields: date}) {
                edges {
                  node {
                    title
                    content
                    slug
                    featured_media {
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
    `)

    return(
        
        
            <Layout>
                {data.allWordpressWpCustomPage.edges.map(post => (
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />
                ))}

                {data.allWordpressWpCustomPage.edges.map(post => (
                <HeroBanner>

                    <HeroBackground>
                        <HeroImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title}/>
                        <ParticleBG/>
                    </HeroBackground>

                    <HeroTitle
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                    >
                        <h1>{post.node.title}</h1>
                        <p>Optomi <span>Technology</span> Talent</p>
                    </HeroTitle>

                    <HeroContent>
                        <div
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                        >
                            <HeroCopy 
                                dangerouslySetInnerHTML={{ __html: post.node.content }}
                            />
                        </div>
                        <div
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        >
                            <ServiceOfferingButtons/>
                        </div>
                    </HeroContent>

                    <HeroBottom
                        data-sal="slide-down"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                    >
                        <button onClick={() => scrollTo('#skill_section')} aria-label="Scroll"><FaChevronDown size={32}/></button>
                    </HeroBottom>

                </HeroBanner>
                ))}

                <SkillFocused/>

                {data.allWordpressWpCustomPage.edges.map(post => (
                <SecondParagraph id="line_trigger">
                    <div
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="600"
                    data-sal-easing="ease"
                    >
                        <SecondCopy 
                            dangerouslySetInnerHTML={{ __html: post.node.acf.second_paragraph }}
                        />
                    </div>
                    <AnimationSection>
                        <div class="line-one"></div>
                        <div class="line-two"></div>
                        <div class="arrow"></div>
                    </AnimationSection>
                    <p 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="900"
                    data-sal-easing="ease"
                    class="bonvivant">We specialize in…</p>
                </SecondParagraph>
                ))}

                {data.allWordpressWpService.edges.map((post, i) => (
                    <ServiceBanner className={"snap"} id={post.node.slug}>
                        <Link
                        style={{textDecoration: 'none'}}
                        to= {`/service-offerings/${post.node.slug}`}
                        >
                            <ImageBackground
                            data-sal="slide-up"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title}/>
                            </ImageBackground>
                            <BannerContent className={i === 1 || i === 3 || i === 5 || i === 7 || i === 9 ? "odd" : "even"}>
                                <div
                                data-sal={i === 1 || i === 3 || i === 5 || i === 7 || i === 9 ? "slide-right" : "slide-left"}
                                data-sal-duration="1000"
                                data-sal-delay="900"
                                data-sal-easing="ease"
                                >
                                    
                                        <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                                    
                                    <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                                </div>
                            </BannerContent>
                        </Link>
                    </ServiceBanner>
                ))}
            </Layout>
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
    justify-content: flex-end;
    z-index: 2;
    @media (max-width:600px) {
        display: block;
    }
` 

const HeroBackground = styled.div`
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

const HeroContent = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    padding-top: 0px;
    padding-bottom: 50px;
    margin-top: 150px;
    z-index: 2;
    > div {
        max-width: 1540px;
        width: 100%;
        padding-left: 120px;
        padding-right: 120px;
        margin: 0 auto;
        transition-duration: .3s;
        @media(max-width:1500px) {
            max-width: 1340px;
        }
        @media(max-width:1200px) {
            max-width: 1140px;
        }
        @media(max-width:768px) {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
    @media(max-width:1200px) {
        padding-bottom: 20px;
    }
    @media(max-width:850px) {
        padding-top: 100px;
        margin-top: 0px;
    }
    @media(max-width:500px) {
        padding-top: 30px;
    }
`

const HeroCopy = styled.div`
    max-width: 900px;
    width: 100%;
    margin-left: auto;
    text-align: left;
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 24px;
        color: #fff;
        line-height: 1.2;
        transition-duration: .3s;
        span.bonvivant {
            font-family: "BonVivant";
            color: #fff;
            font-size: 39px;
            font-weight: 100;
            line-height: 1.7;
        }
    }
    @media(max-width:1160px) {
        text-align: center;
        max-width: 700px;
        margin-right: auto;
    }
    @media(max-width:800px) {
        p {
            font-size: 20px;
            span.bonvivant {
                font-size: 32px;
            }
        }
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

const BannerContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 2;
    > div {
        max-width: 1540px;
        width: 100%;
        padding-left: 120px;
        padding-right: 120px;
        margin: 0 auto;
        transition-duration: .3s;
        @media(max-width:1500px) {
            max-width: 1340px;
        }
        @media(max-width:1200px) {
            max-width: 1140px;
        }
        @media(max-width:700px) {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
    &.even {
        text-align: right;
        p {
            margin-left: auto;
        }
    }
    @media(max-width:1000px) {
        position: relative;
        padding-top: 100px;
        padding-bottom: 100px;
    }
    @media(max-width:800px) {
        text-align: center;
        &.even {
            text-align: center;
        }
        p {
            margin-left: auto;
            margin-right: auto;
        }
    }
`

const SecondParagraph = styled.div`
    background-color: #000;
    padding-top: 80px;
    padding-bottom: 0px;
    > div {
        max-width: 1340px;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0 auto;
        transition-duration: .3s;
        @media(max-width:1500px) {
            max-width: 1140px;
        }
        @media(max-width:1200px) {
            max-width: 940px;
        }
    }
    p.bonvivant {
        font-family: "BonVivant";
        color: #fff;
        text-align: center;
        font-size: 60px;
        line-height: 2.5;
        font-weight: 100;
        margin-top: 00px;
        margin-bottom: 0px;
        padding-right: 120px;
        overflow: visible;
    }
    &.even {
        text-align: right;
        p {
            margin-left: auto;
        }
    }
    @media(max-width:1200px) {
        p.bonvivant {
            font-size: 42px;
        }
    }
    @media(max-width:1000px) {
        position: relative;
        padding-top: 100px;
        padding-bottom: 100px;
        p.bonvivant {
            padding-right: 0;
        }
    }
    @media(max-width:800px) {
        text-align: center;
        &.even {
            text-align: center;
        }
        p {
            margin-left: auto;
            margin-right: auto;
        }
    }
`


const SecondCopy = styled.div`
    max-width: 780px;
    width: 100%;
    margin: 0 auto;
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 32px;
        color: #fff;
        line-height: 1.2;
        transition-duration: .3s;
        text-align: center;
        br {
            display: none;
        }
    }
    @media(max-width:1200px) {
        p {
            font-size: 18px;
        }
    }
    @media(max-width:1000px) {
        max-width: 600px;
        text-align: center;
        p {
            br {
                display: none;
            }
        }
    }
`

const AnimationSection = styled.div`
    position: relative;
    max-width: 100% !important;
    width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    height: 0px;
    .line-one {
        position: absolute;
        top: 5px;
        left: 0;
        height: 1px;
        width: 0;
        background-color: #333;
    }
    .line-two {
        position: absolute;
        top: 5px;
        left: 70%;
        height: 0px;
        width: 1px;
        background-color: #333;
    }
    .arrow {
        position: absolute;
        top: 40px;
        left: calc(70% - 19px);
        height: 39px;
        width: 39px;
        border-right: 1px solid #333;
        border-bottom: 1px solid #333;
        transform: rotate(45deg);
        opacity: 0;
    }
    @media(max-width:768px) {
        display: none;
    }
`

const HeroTitle = styled.div`
    position: absolute;
    top: 100px;
    left: 150px;
    z-index: 2;
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
        @media(max-width:850px) {
            font-size: 52px;
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
        @media(max-width:850px) {
            font-size: 18px;
        }
    }
    @media(max-width: 850px) {
        position: relative;
        top: auto;
        left: auto;
        padding: 20px;
        padding-top: 100px;
        text-align: center;
        width: 100%;
    }
`

const ImageBackground = styled.div`
    position: relative;
    z-index: 1;
    @media(max-width:1000px) {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
`

const BackgroundImg = styled(Img)`
    @media(max-width:1000px) {
        height: 100%;
    }
`


const ServiceBanner = styled.div`
    position: relative; 
    width: 100%;
    h2 {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 80px;
        color: #fff;
        line-height: 1.2;
        font-weight: 100;
    }
    @media(max-width:1500px) {
        h2 {
            font-size: 60px;
        }
    }
    @media(max-width:500px) {
        h2 {
            font-size: 32px;
        }
    }
`

const BannerCopy = styled.div`
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 20px;
        color: #fff;
        line-height: 1.6;
        max-width: 600px;
        span.large-text {
            font-size: 32px;
            padding: 0 5px;
            line-height: 1;
        }
    }
    @media(max-width:1200px) {
        p {
            font-size: 18px;
            span.large-text {
                font-size: 28px;
            }
        }
    }
`

export default ServicesPage