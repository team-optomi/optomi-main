import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const JoinSectionTwo = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpJoinSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 92}}}}) {
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
                            join_two_percent_image {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1800) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_two_side_copy
                            join_two_slice_one_percent
                            join_two_slice_one_copy
                            join_two_slice_two_percent
                            join_two_slice_two_copy
                            join_two_slice_three_percent
                            join_two_slice_three_copy
                            join_two_slice_four_percent
                            join_two_slice_four_copy
                            join_two_slice_five_percent
                            join_two_slice_five_copy
                            join_two_slice_six_percent
                            join_two_slice_six_copy
                            join_two_slice_seven_percent
                            join_two_slice_seven_copy
                            join_two_slice_eight_percent
                            join_two_slice_eight_copy
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
                    <div 
                    class="circle-main"
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    >
                        <Img sizes={post.node.acf.join_two_percent_image.localFile.childImageSharp.sizes} alt={post.node.acf.join_two_percent_image.title} />
                        {/* <div class="slice-one">
                            <div class="line-one"></div>
                            <div class="line-two"></div>
                            <p class="percent">{post.node.acf.join_two_slice_one_percent}</p>
                            <p class="description">{post.node.acf.join_two_slice_one_copy}</p>
                        </div>
                        <div class="slice-two">
                            <div class="line-one"></div>
                            <div class="line-two"></div>
                            <p class="percent">{post.node.acf.join_two_slice_two_percent}</p>
                            <p class="description">{post.node.acf.join_two_slice_two_copy}</p>
                        </div>
                        <div class="slice-three">
                            <div class="line-one"></div>
                            <div class="line-two"></div>
                            <p class="percent">{post.node.acf.join_two_slice_three_percent}</p>
                            <p class="description">{post.node.acf.join_two_slice_three_copy}</p>
                        </div>
                        <div class="slice-four">
                            <div class="line-one"></div>
                            <div class="line-two"></div>
                            <p class="percent">{post.node.acf.join_two_slice_four_percent}</p>
                            <p class="description">{post.node.acf.join_two_slice_four_copy}</p>
                        </div>
                        <div class="slice-five">
                            <div class="line-one"></div>
                            <div class="line-two"></div>
                            <p class="percent">{post.node.acf.join_two_slice_five_percent}</p>
                            <p class="description">{post.node.acf.join_two_slice_five_copy}</p>
                        </div>
                        <div class="slice-six">
                            <div class="line-one"></div>
                            <div class="line-two"></div>
                            <p class="percent">{post.node.acf.join_two_slice_six_percent}</p>
                            <p class="description">{post.node.acf.join_two_slice_six_copy}</p>
                        </div>
                        <div class="slice-seven">
                            <div class="line-one"></div>
                            <div class="line-two"></div>
                            <p class="percent">{post.node.acf.join_two_slice_seven_percent}</p>
                            <p class="description">{post.node.acf.join_two_slice_seven_copy}</p>
                        </div>
                        <div class="slice-eight">
                            <div class="line-one"></div>
                            <div class="line-two"></div>
                            <p class="percent">{post.node.acf.join_two_slice_eight_percent}</p>
                            <p class="description">{post.node.acf.join_two_slice_eight_copy}</p>
                        </div> */}
                    </div>
                    <div class="side-copy"
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    >
                        <div dangerouslySetInnerHTML={{ __html: post.node.acf.join_two_side_copy }}/>
                    </div>
                </MainContent>
                    
            </MainSection>
        ))
    )

}

const MainSection = styled.section`
    position: relative;
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
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .top-content {
        width: 100%;
        position: relative;
        z-index: 3;
        text-align: center;
    }
    .circle-main {
        width: 60%;
        padding: 30px;
    }
    .side-copy {
        width: 40%;
        padding: 30px;
        position: relative;
        z-index: 3;
    }
    h2 {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 40px;
        font-weight: 100;
        color: rgb(255, 255, 255);
        line-height: 1.3;
        margin-bottom: 5px;
        text-transform: uppercase;
    }
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 20px;
        color: rgb(255, 255, 255);
        line-height: 1.3;
        .fancy {
            font-family: BonVivant;
            font-weight: 100;
            font-size: 32px;
            line-height: 0;
            bottom: 3px;
            position: relative;
        }
        .fancy-large {
            font-family: BonVivant;
            font-weight: 100;
            font-size: 60px;
            bottom: 3px;
            position: relative;
            margin-left: 50px;
            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }
    @media(max-width: 1000px) {
        .circle-main {
            width: 100%;
            
        }
        .side-copy {
            width: 1000%;
        }
    }
    @media(max-width:767px) {
        .top-content {
            padding: 0 20px;
            h2 {
                font-size: 32px;
            }
        }
    }

`

export default JoinSectionTwo