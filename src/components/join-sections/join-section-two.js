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
                    {/* <div class="top-content" dangerouslySetInnerHTML={{ __html: post.node.content }}/> */}
                    <div 
                    class="circle-main"
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

const MainContent = styled.div``

export default JoinSectionTwo