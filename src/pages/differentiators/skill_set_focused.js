import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SkillSetPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 83}}}}) {
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
                            skill_one_content
                            skill_one_background {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1800) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            skill_two_content
                            skill_two_background {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1800) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            skill_three_content
                            skill_three_background {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1800) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            skill_four_content
                            skill_four_background {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1800) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            skill_five_content
                            skill_five_background {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1800) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            skill_six_content
                            skill_six_background {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1800) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            skill_seven_content
                            skill_seven_background {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1800) {
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
        
        data.allWordpressWpCustomPage.edges.map(post => (
            <Layout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />

                <DifBanner id={"skill_section_one"}>
                    <ImageBackground
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title}/>
                    </ImageBackground>
                    <BannerContent className="text-right">
                        <div
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        >
                            <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                        </div>
                    </BannerContent>
                </DifBanner>

                <BonTitle>
                    <h2
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >We specialize in</h2>
                </BonTitle>
                
                <DifBanner>
                    <ImageBackground
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <BackgroundImg sizes={post.node.acf.skill_one_background.localFile.childImageSharp.sizes} alt={post.node.acf.skill_one_background.title}/>
                    </ImageBackground>
                    <BannerContent className="text-right">
                        <div
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        >
                            <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.acf.skill_one_content }}/>
                        </div>
                    </BannerContent>
                </DifBanner>

                <DifBanner>
                    <ImageBackground
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <BackgroundImg sizes={post.node.acf.skill_two_background.localFile.childImageSharp.sizes} alt={post.node.acf.skill_two_background.title}/>
                    </ImageBackground>
                    <BannerContent>
                        <div
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        >
                            <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.acf.skill_two_content }}/>
                        </div>
                    </BannerContent>
                </DifBanner>

                <DifBanner>
                    <ImageBackground
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <BackgroundImg sizes={post.node.acf.skill_three_background.localFile.childImageSharp.sizes} alt={post.node.acf.skill_three_background.title}/>
                    </ImageBackground>
                    <BannerContent className="text-right">
                        <div
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        >
                            <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.acf.skill_three_content }}/>
                        </div>
                    </BannerContent>
                </DifBanner>

                <DifBanner>
                    <ImageBackground
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <BackgroundImg sizes={post.node.acf.skill_four_background.localFile.childImageSharp.sizes} alt={post.node.acf.skill_four_background.title}/>
                    </ImageBackground>
                    <BannerContent>
                        <div
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        >
                            <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.acf.skill_four_content }}/>
                        </div>
                    </BannerContent>
                </DifBanner>

                <DifBanner>
                    <ImageBackground
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <BackgroundImg sizes={post.node.acf.skill_five_background.localFile.childImageSharp.sizes} alt={post.node.acf.skill_five_background.title}/>
                    </ImageBackground>
                    <BannerContent className="text-right">
                        <div
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        >
                            <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.acf.skill_five_content }}/>
                        </div>
                    </BannerContent>
                </DifBanner>
                
                <DifBanner>
                    <ImageBackground
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <BackgroundImg sizes={post.node.acf.skill_six_background.localFile.childImageSharp.sizes} alt={post.node.acf.skill_six_background.title}/>
                    </ImageBackground>
                    <BannerContent>
                        <div
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        >
                            <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.acf.skill_six_content }}/>
                        </div>
                    </BannerContent>
                </DifBanner>

                <DifBanner>
                    <ImageBackground
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <BackgroundImg sizes={post.node.acf.skill_seven_background.localFile.childImageSharp.sizes} alt={post.node.acf.skill_seven_background.title}/>
                    </ImageBackground>
                    <BannerContent className="text-right">
                        <div
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        >
                            <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.acf.skill_seven_content }}/>
                        </div>
                    </BannerContent>
                </DifBanner>

            </Layout>
            
        ))
    )
}

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

const BonTitle = styled.div`
    width: 100%;
    padding: 20px;
    h2 {
        font-family: BonVivant;
        color: rgb(90, 179, 232);
        font-size: 72px;
        font-weight: 100;
        line-height: 1;
        margin-bottom: 60px;
        text-align: center;
    }
    @media(max-width:1500px) {
        h2 {
            font-size: 60px;
        }
    }
    @media(max-width: 770px) {
        h2 {
            font-size: 42px;
        }
    }
    @media(max-width: 500px) {
        h2 {
            font-size: 36px;
            margin-bottom: 20px;
        }
    }
`


const DifBanner = styled.section`
    position: relative; 
    width: 100%;
    h1 {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 72px;
        color: #fff;
        line-height: 1.2;
        font-weight: 100;
    }
    @media(max-width:1500px) {
        h1 {
            font-size: 60px;
        }
    }
    @media(max-width:770px) {
        h1 {
            font-size: 42px;
        }
    }
    @media(max-width:500px) {
        h1 {
            font-size: 32px;
        }
    }
`

const BackgroundImg = styled(Img)`
    @media(max-width:1000px) {
        height: 100%;
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
        @media(max-width:768px) {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
    &.text-right {
        text-align: right;
        p {
            margin-left: auto;
        }
    }
    &.text-center {
        text-align: center;
        p {
            margin-left: auto;
            margin-right: auto;
        }
    }
    @media(max-width:1000px) {
        position: relative;
        padding-top: 100px;
        padding-bottom: 100px;
    }
    @media(max-width:800px) {
        text-align: center;
        &.text-right {
            text-align: center;
        }
        p {
            margin-left: auto;
            margin-right: auto;
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
        max-width: 900px;
        span.large-blue {
            font-size: 28px;
            line-height: 20px;
            color: rgb(90, 179, 232);
        }
    }
    h3 {
        font-family: "Helvetica Thin";
        color: rgb(90, 179, 232);
        width: 100%;
        z-index: 1;
        font-size: 60px;
        line-height: 1.2;
        font-weight: 100;
    }
    @media(max-width:770px) {
        h3 {
            font-size: 42px;
        }
    }
    @media(max-width:500px) {
        h3 {
            font-size: 32px;
        }
    }
    @media(max-width:1200px) {
        p {
            font-size: 18px;
        }
    }
`

export default SkillSetPage