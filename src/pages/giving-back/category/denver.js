import React, { Component } from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Slider from "react-slick"
import Img from "gatsby-image"

import BlogLayout from "../../../components/blog-layout"
import SEO from "../../../components/seo"
import GivingBackLogo from "../../../components/logos/giving-back-logo"

class Denver extends Component {

    render() {

        const { data } = this.props; 
    
          const settings = {
            arrows: true,
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                  }
                }
              ]
          };

        return (
            <BlogLayout>
                {data.allWordpressWpCustomPage.edges.map(post => (
                <SEO 
                title={post.node.acf.meta_title} 
                description={post.node.acf.meta_description}
                image={post.node.featured_media.localFile.childImageSharp.sizes}
                />
                ))}
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

                <GBSlider>
                    
                    <Slider {...settings}>
                        {data.allWordpressWpGbBlogPost.edges.map(post => (
                            <GBSlide>
                                <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                                <Link
                                    to={`/giving-back/${post.node.slug}`}
                                >
                                    <HoverCopy>
                                        <p>{post.node.date}</p>
                                        <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                                    </HoverCopy>
                                </Link>
                            </GBSlide>
                        ))}
                    </Slider>
                     
                </GBSlider>

                <GBMain>
                    {data.allWordpressWpGbBlogPost.edges.map(post => (
                        <GBArticle>
                            <p class="date">{post.node.date}</p>
                            <Link
                                to={`/giving-back/${post.node.slug}`}
                            >
                                <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                            </Link>
                            <hr/>
                            <Excerpt dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                        </GBArticle>
                    ))}
                </GBMain>

            </BlogLayout>
        );

    }

}

const GBTitle = styled.div`
    margin-top: 100px;
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

const GBSlider = styled.div`
    width: 100%;
    .slick-slider {
        max-width: 100%;
        width: 100%;
    }
    .slick-track
    {
        display: flex !important;
        max-height: 400px;
    }

    .slick-slide
    {
        height: inherit !important;
        > div {
            position: relative;
            height: 100%;
        }
    }
    .slick-prev {
        top: 50%;
        left: 20px;
        right: auto;
        width: 50px;
        height: 50px;
        &:before {
            display: none;
        }
        &:after {
            transform: rotate(-45deg);
            top: 15px;
            right: 13px;
            height: 18px;
            width: 18px;
            border-top: 4px solid #fff;
            border-left: 4px solid #fff;
        }
    }
    .slick-next {
        top: 50%;
        right: 20px;
        left: auto;
        width: 50px;
        height: 50px;
        &:before {
            display: none;
        }
        &:after {
            transform: rotate(135deg);
            top: 15px;
            left: 13px;
            height: 18px;
            width: 18px;
            border-top: 4px solid #fff;
            border-left: 4px solid #fff;
        }
    }
`

const GBSlide = styled.div`
    width: 33.33%;
    max-height: 400px;
    height: 100%;
    position: relative;
    .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        text-decoration: none;
        background-color: rgba(21,21,21,0.78);
        transition-duration: .6s;
        opacity: 0;
    }
    &:hover {
        a {
            opacity: 0.8;
        }
    }
    @media(max-width:767px) {
        a {
            opacity: 0.8;
        }
    }
`

const HoverCopy = styled.div`
    padding: 0 20px;
    text-align: center;
    p {
        font-size: 14px;
        margin-bottom: 5px;
    }
    h3 {
        font-size: 18px;
        font-style: italic;
        font-weight: 300;
        margin-bottom: 0;
    }
`

const GBMain = styled.div`
    max-width: 1080px;
    width: 100%;
    padding: 50px 20px;
    margin: 0 auto;
`

const GBArticle = styled.article`
    margin: 50px 0;
    text-align: center;
    .date {
        font-size: 14px;
        color: #cf0327;
        margin-bottom: 9px;
    }
    a {
        color: #1a1114;
        text-decoration: none;
        &:hover {
            color: #cf0327;
        }
    }
    h2 {
        font-size: 20px;
        line-height: 22px;
        font-style: normal;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 0px;
    }
    hr {
        width: 91px;
        height: 1px;
        background-color: #818181;
        margin: 25px auto;
    }
`

const Excerpt = styled.p`
    color: #959595;
    font-size: 14px;
    line-height: 28px;
    font-style: italic;
    font-weight: 300;
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 58}}}}) {
                edges {
                    node {
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
                        }
                    }
                }
            }
            allWordpressWpGbBlogPost(filter: {categories: {elemMatch: {wordpress_id: {in: 58}}}}) {
                edges {
                    node {
                        title
                        slug
                        excerpt
                        date(formatString: "MMMM d, yyyy")
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
      `}
      render={data => <Denver data={data} {...props} />}
    />
  );