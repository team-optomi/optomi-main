import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

import BlogLayout from "../components/blog-layout"
import SEO from "../components/seo"
import GivingBackLogo from "../components/logos/giving-back-logo"

const GivingBackBlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 57}}}}) {
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
                            denver_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            roswell_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            corporate_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1000) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            chicago_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            detroit_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            charlotte_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            baltimore_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            dallas_image {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 500) {
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
            <BlogLayout>
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />
                <GBMain>
                    <GBTitle>
                        <Link
                        to="/giving-back/"
                        >
                            <GivingBackLogo/>
                        </Link>
                        <hr/>
                        <GBMenu>
                            <li>
                            <Link
                            to="/giving-back/category/corporate"
                            >
                                Corporate
                            </Link>
                            </li>
                            <li>
                            <Link
                            to="/giving-back/category/roswell"
                            >
                                Atlanta
                            </Link>
                            </li>
                            <li>
                            <Link
                            to="/giving-back/category/chicago"
                            >
                                Chicago
                            </Link>
                            </li>
                            <li>
                            <Link
                            to="/giving-back/category/dallas"
                            >
                                Dallas
                            </Link>
                            </li>
                            <li>
                            <Link
                            to="/giving-back/category/detroit"
                            >
                                Detroit
                            </Link>
                            </li>
                            <li>
                            <Link
                            to="/giving-back/category/baltimore-dc"
                            >
                                Baltimore
                            </Link>
                            </li>
                            <li>
                            <Link
                            to="/giving-back/category/charlotte"
                            >
                                Charlotte
                            </Link>
                            </li>
                            <li>
                            <Link
                            to="/giving-back/category/denver"
                            >
                                Denver
                            </Link>
                            </li>
                        </GBMenu>
                    </GBTitle>
                    <GBGrid>
                        <SquareImage className="denver-image">
                            <Img sizes={post.node.acf.denver_image.localFile.childImageSharp.sizes} alt="Denver" />
                            <Link
                            to="/giving-back/category/denver"
                            >
                                Denver
                            </Link>
                        </SquareImage>
                        <SquareImage className="roswell-image">
                            <Img sizes={post.node.acf.roswell_image.localFile.childImageSharp.sizes} alt="Roswell" />
                            <Link
                            to="/giving-back/category/roswell"
                            >
                                Atlanta
                            </Link>
                        </SquareImage>
                        <LongImage className="corporate-image">
                            <Img sizes={post.node.acf.corporate_image.localFile.childImageSharp.sizes} alt="Corporate" />
                            <Link
                            to="/giving-back/category/corporate"
                            >
                                Corporate
                            </Link>
                        </LongImage>
                        <TallImage className="chicago-image">
                            <Img sizes={post.node.acf.chicago_image.localFile.childImageSharp.sizes} alt="Chicago" />
                            <Link
                            to="/giving-back/category/chicago"
                            >
                                Chicago
                            </Link>
                        </TallImage>
                        <SquareImage className="detroit-image">
                            <Img sizes={post.node.acf.detroit_image.localFile.childImageSharp.sizes} alt="Detroit" />
                            <Link
                            to="/giving-back/category/detroit"
                            >
                                Detroit
                            </Link>
                        </SquareImage>
                        <SquareImage className="charlotte-image">
                            <Img sizes={post.node.acf.charlotte_image.localFile.childImageSharp.sizes} alt="Charlotte" />
                            <Link
                            to="/giving-back/category/charlotte"
                            >
                                Charlotte
                            </Link>
                        </SquareImage>
                        <SquareImage className="baltimore-image">
                            <Img sizes={post.node.acf.baltimore_image.localFile.childImageSharp.sizes} alt="Baltimore" />
                            <Link
                            to="/giving-back/category/baltimore-dc"
                            >
                                Baltimore
                            </Link>
                        </SquareImage>
                        <SquareImage className="dallas-image">
                            <Img sizes={post.node.acf.dallas_image.localFile.childImageSharp.sizes} alt="Dallas" />
                            <Link
                            to="/giving-back/category/dallas"
                            >
                                Dallas
                            </Link>
                        </SquareImage>
                    </GBGrid>
                </GBMain>
            </BlogLayout>
        ))
    )
        
}

const GBMain = styled.div`
    width: 100%;
    padding-top: 100px;
`

const GBTitle = styled.div`
    .gatsby-image-wrapper {
        margin: 0 auto;
        margin-bottom: 20px;
        width: 196px;
        height: 202px;
    }
    hr {
        max-width: 150px;
        width: 100%;
        height: 2px;
        background-color: #000;
        margin: 0 auto;
        margin-bottom: 20px;
    }
`

const GBMenu = styled.ul`
    width: 100%;
    margin: 0 auto;
    margin-bottom: 60px;
    padding: 0 20px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    li {
        margin: 0 22px;
        a {
            color: #1a1114;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            letter-spacing: 0px;
            text-transform: uppercase;
            text-decoration: none;
            transition-duration: .3s;
            &:hover {
                color: #cf0327;
                opacity: .8;
            }
        }
    }
`

const GBGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    .denver-image {
        grid-area: 1 / 1 / 2 / 2;
    }
    .roswell-image {
        grid-area: 1 / 2 / 2 / 3;
    }
    .corporate-image {
        grid-area: 1 / 3 / 2 / 5;
    }
    .chicago-image {
        grid-area: 1 / 5 / 3 / 6;
    }
    .detroit-image {
        grid-area: 2 / 1 / 3 / 2;
    }
    .charlotte-image {
        grid-area: 2 / 2 / 3 / 3;
    }
    .baltimore-image {
        grid-area: 2 / 3 / 3 / 4;
    }
    .dallas-image {
        grid-area: 2 / 4 / 3 / 5;
    }
    @media(max-width:1180px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        .denver-image {
            grid-area: 1 / 1 / 2 / 2;
        }
        .corporate-image {
            grid-area: 1 / 2 / 2 / 4;
        }

        .roswell-image {
            grid-area: 2 / 1 / 3 / 2;
        }
        .chicago-image {
            grid-area: 2 / 2 / 3 / 3;
            .gatsby-image-wrapper {
                position: absolute !important;
                width: 100%;
            }
        }
        .detroit-image {
            grid-area: 2 / 3 / 3 / 4;
        }

        .charlotte-image {
            grid-area: 3 / 1 / 4 / 2;
        }
        .baltimore-image {
            grid-area: 3 / 2 / 4 / 3;
        }
        .dallas-image {
            grid-area: 3 / 3 / 4 / 4;
        }
    }
    @media(max-width:767px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        .denver-image {
            grid-area: 1 / 1 / 2 / 2;
        }
        .roswell-image {
            grid-area: 1 / 2 / 2 / 3;
        }

        .corporate-image {
            grid-area: 2 / 1 / 3 / 3;
        }
        
        .chicago-image {
            grid-area: 3 / 1 / 5 / 2;
        }
        .detroit-image {
            grid-area: 3 / 2 / 4 / 3;
        }
        .charlotte-image {
            grid-area: 4 / 2 / 5 / 3;
        }

        .baltimore-image {
            grid-area: 5 / 1 / 6 / 2;
        }
        .dallas-image {
            grid-area: 5 / 2 / 6 / 3;
        }
    }
`

const SquareImage = styled.div`
    position: relative;
    a {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        color: #fff;
        font-size: 20px;
        line-height: 22px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,0.8);
        opacity: 0;
        transition-duration: .3s;
    }
    &:hover {
        a {
            opacity: 1;
        }
    }
    @media(max-width:767px) {
        a {
            opacity: 1;
        }
    }
`

const LongImage = styled.div`
    position: relative;
    a {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        color: #fff;
        font-size: 20px;
        line-height: 22px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,0.8);
        opacity: 0;
        transition-duration: .3s;
    }
    &:hover {
        a {
            opacity: 1;
        }
    }
    @media(max-width:767px) {
        a {
            opacity: 1;
        }
    }
`

const TallImage = styled.div`
    position: relative;
    a {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        color: #fff;
        font-size: 20px;
        line-height: 22px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,0.8);
        opacity: 0;
        transition-duration: .3s;
    }
    &:hover {
        a {
            opacity: 1;
        }
    }
    @media(max-width:767px) {
        a {
            opacity: 1;
        }
    }
`

export default GivingBackBlogPage