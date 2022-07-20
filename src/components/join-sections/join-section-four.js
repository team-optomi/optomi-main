import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const JoinSectionFour = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpJoinSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 94}}}}) {
                edges {
                    node {
                        content
                        featured_media {
                            title
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 2000) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                        acf {
                            join_four_dedicated {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_four_innovative {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_four_genuine {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_four_giving {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_four_connected {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_four_impact {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_four_respectful {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_four_passionate {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_four_bottom_button
                            join_four_bottom_link
                        }
                    }
                }
            }
        }
    `)

    return(
        
        data.allWordpressWpJoinSection.edges.map(post => (
            <MainSection>

                <ImageBackground>
                    <HeroImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.featured_media.title} />
                </ImageBackground>

                <MainContent>
                    <div 
                    class="top-content" 
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    />
                    <p 
                    class="match-one"
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    >Are you a good match?</p>
                    <p 
                    class="match-two"
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    >we are...</p>
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="values-box">
                        <Img className={"value-one"} sizes={post.node.acf.join_four_dedicated.localFile.childImageSharp.sizes} alt={post.node.acf.join_four_dedicated.title} />
                        <Img className={"value-two"} sizes={post.node.acf.join_four_innovative.localFile.childImageSharp.sizes} alt={post.node.acf.join_four_innovative.title} />
                        <Img className={"value-three"} sizes={post.node.acf.join_four_genuine.localFile.childImageSharp.sizes} alt={post.node.acf.join_four_genuine.title} />
                        <Img className={"value-four"} sizes={post.node.acf.join_four_giving.localFile.childImageSharp.sizes} alt={post.node.acf.join_four_giving.title} />
                        <Img className={"value-five"} sizes={post.node.acf.join_four_connected.localFile.childImageSharp.sizes} alt={post.node.acf.join_four_connected.title} />
                        <Img className={"value-six"} sizes={post.node.acf.join_four_impact.localFile.childImageSharp.sizes} alt={post.node.acf.join_four_impact.title} />
                        <Img className={"value-seven"} sizes={post.node.acf.join_four_respectful.localFile.childImageSharp.sizes} alt={post.node.acf.join_four_respectful.title} />
                        <Img className={"value-eight"} sizes={post.node.acf.join_four_passionate.localFile.childImageSharp.sizes} alt={post.node.acf.join_four_passionate.title} />
                    </div>
                    <p 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="bottom-link"><a href={post.node.acf.join_four_bottom_link}>{post.node.acf.join_four_bottom_button}</a></p>
                </MainContent>
                    
            </MainSection>
        ))
    )

}

const MainSection = styled.section`
    position: relative;
    margin-bottom: 50px;
`

const ImageBackground = styled.div`
    background-color: #000;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
`

const HeroImg = styled(Img)`
    height: 100%;
    width: 100%;
    opacity: .5;
    img {
        margin-bottom: 0;
    }
`

const MainContent = styled.div`
    max-width: 1240px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    .top-content,
    .match-one,
    .match-two {
        position: relative;
        z-index: 1;
    }
    .top-content {
        padding: 50px 0;
        max-width: 1120px;
        margin: 0 auto;
        text-align: center;
    }
    h2 {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 40px;
        letter-spacing: 2px;
        font-weight: 100;
        color: rgb(255, 255, 255);
        line-height: 1.3;
        margin-bottom: 20px;
        text-align: center;
    }
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 24px;
        color: rgb(255, 255, 255);
        line-height: 1.3;
        margin-bottom: 20px;
        strong {
            font-weight: 600;
        }
        span.fancy {
            font-family: BonVivant;
            font-weight: 100;
            font-size: 32px;
            bottom: 3px;
            position: relative;
        }
        span.fancy-large {
            font-family: BonVivant;
            font-weight: 100;
            font-size: 44px;
            bottom: 3px;
            position: relative;
        }
        &.match-one {
            font-family: "Helvetica Thin";
            width: 100%;
            z-index: 1;
            font-size: 40px;
            letter-spacing: 2px;
            font-weight: 100;
            color: rgb(255, 255, 255);
            line-height: 1.3;
            margin-bottom: 20px;
            text-align: center;
        }
        &.match-two {
            font-family: BonVivant;
            font-weight: 100;
            font-size: 120px;
            bottom: 3px;
            position: relative;
            text-align: center;
            top: -70px;
        }
    }
    .values-box {
        position: relative;
        max-width: 1120px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        .gatsby-image-wrapper {
            position: absolute !important;
        }
        .value-one {
            max-width: 671px;
            width: 100%;
            top: -150px;
            left: 0;
        }
        .value-two {
            max-width: 700px;
            width: 100%;
            right: 114px;
            top: -61px;
        }
        .value-three {
            max-width: 700px;
            width: 100%;
            top: 66px;
            left: -44px;
        }
        .value-four {
            max-width: 700px;
            width: 100%;
            right: -52px;
            top: 38px;
        }
        .value-five {
            max-width: 700px;
            width: 100%;
            top: 191px;
            right: 24px;
        }
        .value-six {
            max-width: 414px;
            width: 100%;
            top: 222px;
            left: 0;
        }
        .value-seven {
            max-width: 750px;
            width: 100%;
            top: 271px;
            left: 236px;
        }
        .value-eight {
            max-width: 700px;
            width: 100%;
            top: 403px;
            left: 96px;
        }
    }
    p.bottom-link {
        text-align: center;
        position: relative;
        font-size: 24px;
        text-transform: uppercase;
        font-weight: 100;
        a {
            display: inline-block;
            font-size: 14px;
            background-color: #00385c;
            color: #fff;
            border: 2px solid #fff;
            padding: 8px 20px;
            border-radius: 10px;
            text-decoration: none;
        }
    }
    @media(max-width:1280px) {
        .values-box {
            max-width: 700px;
            height: 400px;
            margin: 0 auto;
            .value-one {
                max-width: 471px;
            }
            .value-two {
                max-width: 500px;
                right: -11px;
                top: -98px;
            }
            .value-three {
                max-width: 500px;
                top: -12px;
            }
            .value-four {
                max-width: 500px;
                right: -120px;
                top: -19px;
            }
            .value-five {
                max-width: 500px;
                top: 87px;
                right: -68px;
            }
            .value-six {
                max-width: 314px;
                top: 117px;
            }
            .value-seven {
                max-width: 550px;
                top: 159px;
                left: 184px;
            }
            .value-eight {
                max-width: 500px;
                top: 241px;
            }
        }
    }
    @media(max-width:900px) {
        .values-box {
            max-width: 600px;
            height: 350px;
            .value-one {
                max-width: 371px;
                left: -42px;
            }
            .value-two {
                max-width: 400px;
                right: 74px;
                top: -99px;
            }
            .value-three {
                max-width: 400px;
                left: -81px;
            }
            .value-four {
                max-width: 400px;
                right: -15px;
                top: -27px;
            }
            .value-five {
                max-width: 400px;
                top: 63px;
                right: 26px;
            }
            .value-six {
                max-width: 250px;
                top: 85px;
                left: -38px;
            }
            .value-seven {
                max-width: 450px;
                top: 119px;
                left: 108px;
            }
            .value-eight {
                max-width: 400px;
                top: 195px;
                left: 48px;
            }
        }
    }
    @media(max-width:767px) {
        h2 {
            font-size: 32px;
        }
        .values-box {
            max-width: 600px;
            height: auto;
            margin-top: -100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .gatsby-image-wrapper {
                position: relative !important;
            }
            .value-one {
                left: auto;
                top: auto;
            }
            .value-two {
                right: auto;
                top: auto;
            }
            .value-three {
                max-width: 400px;
                left: auto;
                top: auto;
            }
            .value-four {
                max-width: 400px;
                right: auto;
                top: auto;
            }
            .value-five {
                max-width: 400px;
                top: auto;
                right: auto;
            }
            .value-six {
                max-width: 250px;
                top: auto;
                left: auto;
            }
            .value-seven {
                max-width: 450px;
                top: auto;
                left: auto;
            }
            .value-eight {
                max-width: 400px;
                top: auto;
                left: auto;
            }
        }
    }
`

export default JoinSectionFour