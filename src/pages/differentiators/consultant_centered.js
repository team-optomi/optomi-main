import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ConsultantCenteredPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 84}}}}) {
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
                            cc_section_one_content
                            cc_section_one_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 400) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            cc_section_two_content
                            cc_section_two_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 400) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            cc_section_three_content
                            cc_section_three_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 400) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            cc_section_four_content
                            cc_section_four_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 400) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            cc_section_five_content
                            cc_section_five_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 400) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            cc_section_six_content
                            cc_section_six_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 400) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            cc_section_seven_content
                            cc_section_seven_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 400) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            cc_section_eight_content
                            cc_section_eight_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 400) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            cc_section_nine_content
                            cc_section_nine_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 400) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            cc_section_ten_content
                            cc_section_ten_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 400) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            cc_section_eleven_content
                            cc_section_eleven_icon {
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
        
        data.allWordpressWpCustomPage.edges.map(post => (
            <Layout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />

                <DifBanner>
                    <ImageBackground
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    >
                        <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title}/>
                    </ImageBackground>
                    <BannerContent>
                        <div
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                        >
                            <BannerCopy dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                        </div>
                    </BannerContent>
                </DifBanner>

                <GrayBG>
                    <DifBanner>
                        <BannerFlex>
                            <BannerHalf
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div dangerouslySetInnerHTML={{ __html: post.node.acf.cc_section_one_content }}/>
                            </BannerHalf>
                            <BannerIcon
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.cc_section_one_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cc_section_one_icon.title}/>
                            </BannerIcon>
                        </BannerFlex>
                    </DifBanner>
                    <DifBanner>
                        <BannerFlex>
                            <BannerIcon
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.cc_section_two_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cc_section_two_icon.title}/>
                            </BannerIcon>
                            <BannerHalf
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div dangerouslySetInnerHTML={{ __html: post.node.acf.cc_section_two_content }} class="text-right"/>
                            </BannerHalf>
                        </BannerFlex>
                    </DifBanner>
                    <DifBanner>
                        <BannerFlex>
                            <BannerHalf
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div dangerouslySetInnerHTML={{ __html: post.node.acf.cc_section_three_content }}/>
                            </BannerHalf>
                            <BannerIcon
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.cc_section_three_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cc_section_three_icon.title}/>
                            </BannerIcon>
                        </BannerFlex>
                    </DifBanner>
                    <DifBanner>
                        <BannerFlex>
                            <BannerIcon
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.cc_section_four_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cc_section_four_icon.title}/>
                            </BannerIcon>
                            <BannerHalf
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div dangerouslySetInnerHTML={{ __html: post.node.acf.cc_section_four_content }} class="text-right"/>
                            </BannerHalf>
                        </BannerFlex>
                    </DifBanner>
                    <DifBanner>
                        <BannerFlex>
                            <BannerHalf
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div dangerouslySetInnerHTML={{ __html: post.node.acf.cc_section_five_content }}/>
                            </BannerHalf>
                            <BannerIcon
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.cc_section_five_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cc_section_five_icon.title}/>
                            </BannerIcon>
                        </BannerFlex>
                    </DifBanner>
                    <DifBanner>
                        <BannerFlex>
                            <BannerIcon
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.cc_section_six_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cc_section_six_icon.title}/>
                            </BannerIcon>
                            <BannerHalf
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div dangerouslySetInnerHTML={{ __html: post.node.acf.cc_section_six_content }} class="text-right"/>
                            </BannerHalf>
                        </BannerFlex>
                    </DifBanner>
                    <DifBanner>
                        <BannerFlex>
                            <BannerHalf
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div dangerouslySetInnerHTML={{ __html: post.node.acf.cc_section_seven_content }}/>
                            </BannerHalf>
                            <BannerIcon
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.cc_section_seven_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cc_section_seven_icon.title}/>
                            </BannerIcon>
                        </BannerFlex>
                    </DifBanner>
                    <DifBanner>
                        <BannerFlex>
                            <BannerIcon
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.cc_section_eight_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cc_section_eight_icon.title}/>
                            </BannerIcon>
                            <BannerHalf
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div dangerouslySetInnerHTML={{ __html: post.node.acf.cc_section_eight_content }} class="text-right"/>
                            </BannerHalf>
                        </BannerFlex>
                    </DifBanner>
                    <DifBanner>
                        <BannerFlex>
                            <BannerHalf
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div dangerouslySetInnerHTML={{ __html: post.node.acf.cc_section_nine_content }}/>
                            </BannerHalf>
                            <BannerIcon
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.cc_section_nine_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cc_section_nine_icon.title}/>
                            </BannerIcon>
                        </BannerFlex>
                    </DifBanner>
                    <DifBanner>
                        <BannerFlex>
                            <BannerIcon
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.cc_section_ten_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cc_section_ten_icon.title}/>
                            </BannerIcon>
                            <BannerHalf
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div dangerouslySetInnerHTML={{ __html: post.node.acf.cc_section_ten_content }} class="text-right"/>
                            </BannerHalf>
                        </BannerFlex>
                    </DifBanner>
                    <DifBanner>
                        <BannerFlex>
                            <BannerHalf
                            data-sal="slide-right"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <div dangerouslySetInnerHTML={{ __html: post.node.acf.cc_section_eleven_content }}/>
                            </BannerHalf>
                            <BannerIcon
                            data-sal="slide-left"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <Img sizes={post.node.acf.cc_section_eleven_icon.localFile.childImageSharp.sizes} alt={post.node.acf.cc_section_eleven_icon.title}/>
                            </BannerIcon>
                        </BannerFlex>
                    </DifBanner>
                </GrayBG>

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

const GrayBG = styled.div`
    border-top: 10px solid #000;
    background: rgb(92,92,92);
    background: linear-gradient(135deg, rgba(92,92,92,1) 0%, rgba(51,51,51,1) 100%);
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

const BannerFlex = styled.div`
    max-width: 1540px;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 120px;
    padding-right: 120px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    @media(max-width:767px) {
        flex-wrap: wrap;
    }
`

const BannerHalf = styled.div`
    width: 70%;
    div {
        padding-right: 50px;
        &.text-right {
            text-align: right;
            padding-right: 0;
            padding-left: 50px;
        }
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
        h2 {
            font-family: "Helvetica Thin";
            color: rgb(90, 179, 232);
            width: 100%;
            z-index: 1;
            font-size: 52px;
            line-height: 1.2;
            font-weight: 100;
        }
        @media(max-width:770px) {
            h2 {
                font-size: 42px;
            }
        }
        @media(max-width:500px) {
            h2 {
                font-size: 32px;
            }
        }
        @media(max-width:1200px) {
            p {
                font-size: 18px;
            }
        }
    }
    @media(max-width:767px) {
        width: 100%;
        order: 2;
        div {
            text-align: center !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
    }
`

const BannerIcon = styled.div`
    width: 30%;
    img {
        max-width: 300px;
        max-height: 300px;
        object-fit: contain !important;
        margin-bottom: 0;
    }
    @media(max-width:767px) {
        width: 100%;
        order: 1;
        text-align: center;
        margin-bottom: 35px;
    }
`

export default ConsultantCenteredPage