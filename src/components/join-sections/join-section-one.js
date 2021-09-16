import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const JoinSectionOne = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpJoinSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 90}}}}) {
                edges {
                    node {
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
                            join_one_left_column_copy
                            join_one_left_column_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_one_left_column_button
                            join_one_left_column_link
                            join_one_right_column_copy
                            join_one_right_column_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_one_right_column_button
                            join_one_right_column_link
                        }
                    }
                }
            }
        }
    `)

    return(
        
        data.allWordpressWpJoinSection.edges.map(post => (
            <MainSection>

                <HeroBanner>
                    <ImageBackground>
                        <HeroImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.featured_media.title} />
                    </ImageBackground>

                    <HeroTitle
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                    >
                        <h1>Join Our Team</h1>
                        <p>Optomi <span>Technology</span> Talent</p>
                    </HeroTitle>

                    <HeroMain>
                        <div 
                        class="col-left"
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        >
                            <div dangerouslySetInnerHTML={{ __html: post.node.acf.join_one_left_column_copy }}/>
                            <Img sizes={post.node.acf.join_one_left_column_icon.localFile.childImageSharp.sizes} alt={post.node.acf.join_one_left_column_icon.title} />
                            <Link to={post.node.acf.join_one_left_column_link}>{post.node.acf.join_one_left_column_button}</Link>
                        </div>
                        <div 
                        class="col-right"
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        >
                            <div dangerouslySetInnerHTML={{ __html: post.node.acf.join_one_right_column_copy }}/>
                            <Img sizes={post.node.acf.join_one_right_column_icon.localFile.childImageSharp.sizes} alt={post.node.acf.join_one_right_column_icon.title} />
                            <Link to={post.node.acf.join_one_right_column_link}>{post.node.acf.join_one_right_column_button}</Link>
                        </div>
                    </HeroMain>
                    
                </HeroBanner>
                    
            </MainSection>
        ))
    )

}

const MainSection = styled.section``

const HeroBanner = styled.div`
    position: relative; 
    min-height: 100vh;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media (max-width:800px) {
        align-items: flex-start;
    }
    @media (max-width:600px) {
        display: block;
    }
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
        @media(max-width:800px) {
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
        @media(max-width:800px) {
            font-size: 18px;
        }
    }
    @media(max-width: 800px) {
        position: relative;
        top: auto;
        left: auto;
        padding: 20px;
        padding-top: 100px;
        text-align: center;
        width: 100%;
    }
`

const HeroMain = styled.div`
    max-width: 1240px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 300px;
    padding-bottom: 130px;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .col-left {
        width: 50%;
        padding: 0 50px;
        transition-delay: 1.2s;
    }
    .col-right {
        width: 50%;
        padding: 0 50px;
        transition-delay: 1.8s;
    }
    h2 {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 44px;
        font-weight: 100;
        color: rgb(255, 255, 255);
        line-height: 1.3;
        margin-bottom: 5px;
    }
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 20px;
        color: rgb(255, 255, 255);
        line-height: 1.3;
    }
    .gatsby-image-wrapper {
        max-width: 300px;
        max-height: 200px;
        width: 100%;
        height: 100%;
        margin: 30px auto;
        img {
            object-fit: contain !important;
        }
    }
    a {
        display: inline-block;
        background-color: #00385c;
        color: #fff;
        border: 2px solid #fff;
        padding: 10px 35px;
        border-radius: 10px;
        text-decoration: none;
    }
`

export default JoinSectionOne