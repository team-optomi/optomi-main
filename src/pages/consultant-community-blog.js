import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

import CCLayout from "../components/consultant-community-blog/cc-layout"
import SEO from "../components/seo"
import OptomiLogo from "../components/logos/footer-logo"

const ConsultantCommunityBlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 49}}}}) {
                edges {
                    node {
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
                            meta_title
                            meta_description
                            career_insights_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 773) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            consultant_contributions_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 773) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            consultant_of_the_quarter_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 773) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            it_trends_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 773) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            podcasts_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 773) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            videos_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 773) {
                                            ...GatsbyImageSharpSizes
                                        }
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
        
        data.allWordpressWpCustomPage.edges.map(post => (
            <CCLayout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />
                <CCmain>
                    <TitleSection>
                        <Link
                        to="/"
                        >
                            <OptomiLogo/>
                        </Link>
                        <hr/>
                        <h1>Consultant Community Blog</h1>
                    </TitleSection>
                    <CCrow>
                        <CategoryCol>
                            <div>
                                <Link
                                to="/consultant-community-blog/category/career-insights/"
                                >
                                    <ImageContainer>
                                        <Img sizes={post.node.acf.career_insights_image.localFile.childImageSharp.sizes} alt="Career Insights" />
                                        <p>Read More</p>
                                    </ImageContainer>
                                    <h2>Career Insights</h2>
                                </Link>
                            </div>
                        </CategoryCol>
                        <CategoryCol>
                            <div>
                                <Link
                                to="/consultant-community-blog/category/consultant-contributions/"
                                >
                                    <ImageContainer>
                                        <Img sizes={post.node.acf.consultant_contributions_image.localFile.childImageSharp.sizes} alt="Consultant Contributions" />
                                        <p>Read More</p>
                                    </ImageContainer>
                                    <h2>Consultant Contributions</h2>
                                </Link>
                            </div>
                        </CategoryCol>
                        <CategoryCol>
                            <div>
                                <Link
                                to="/consultant-community-blog/category/consultant-of-the-quarter/"
                                >
                                    <ImageContainer>
                                        <Img sizes={post.node.acf.consultant_of_the_quarter_image.localFile.childImageSharp.sizes} alt="Consultant of the Quarter" />
                                        <p>Read More</p>
                                    </ImageContainer>
                                    <h2>Consultant of the Quarter</h2>
                                </Link>
                            </div>
                        </CategoryCol>
                        <CategoryCol>
                            <div>
                                <Link
                                to="/consultant-community-blog/category/it-trendsnews/"
                                >
                                    <ImageContainer>
                                        <Img sizes={post.node.acf.it_trends_image.localFile.childImageSharp.sizes} alt="IT Trends/News" />
                                        <p>Read More</p>
                                    </ImageContainer>
                                    <h2>IT Trends/News</h2>
                                </Link>
                            </div>
                        </CategoryCol>
                        <CategoryCol>
                            <div>
                                <Link
                                to="/consultant-community-blog/category/podcasts/"
                                >
                                    <ImageContainer>
                                        <Img sizes={post.node.acf.podcasts_image.localFile.childImageSharp.sizes} alt="Podcasts" /> 
                                        <p>Read More</p>
                                    </ImageContainer>
                                    <h2>Podcasts</h2>
                                </Link>
                            </div>
                        </CategoryCol>
                        <CategoryCol>
                            <div>
                                <Link
                                to="/consultant-community-blog/category/videos/"
                                >
                                    <ImageContainer>
                                        <Img sizes={post.node.acf.videos_image.localFile.childImageSharp.sizes} alt="Videos" />
                                        <p>Read More</p>
                                    </ImageContainer>
                                    <h2>Videos</h2>
                                </Link>
                            </div>
                        </CategoryCol>
                    </CCrow>
                </CCmain>
            </CCLayout>
        ))
    )

}

const CCmain = styled.div`
    width: 100%;
    padding: 100px 20px;
`

const TitleSection = styled.div`
    .gatsby-image-wrapper {
        margin: 0 auto;
        margin-bottom: 20px;
        width: 256px;
        height: 97px;
    }
    hr {
        max-width: 150px;
        width: 100%;
        height: 2px;
        background-color: #000;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    h1 {
        color: #000;
        text-align: center;
        margin-bottom: 80px;
    }
`

const CCrow = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
`

const CategoryCol = styled.div`
    width: 33.33%;
    text-align: center;
    margin-bottom: 50px;
    > div {
        max-width: 274px;
        margin: 0 auto;
    }
    a {
        text-decoration: none;
    }
    h2 {
        font-family: "Helvetica Thin";
        color: #000000;
        font-size: 20px;
        line-height: 1.2;
        margin: 5px 0;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
    }
    @media(max-width:1000px) {
        width: 50%;
    }
    @media(max-width:660px) {
        width: 100%;
    }
`

const ImageContainer = styled.div`
    position: relative;
    z-index: 1;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, .75);
        z-index: 2;
        transition-duration: .3s;
        opacity: 0;
    }
    p {
        font-family: BonVivant;
        font-size: 38px;
        color: rgb(41, 143, 194);
        position: absolute;
        top: calc(50% - 20px);
        left: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin-bottom: 0;
        z-index: 3;
        transition-duration: .3s;
        opacity: 0;
    }
    &:hover {
        &:before {
            opacity: 1;
        }
        p {
            opacity: 1;
        }
    }
`



export default ConsultantCommunityBlogPage