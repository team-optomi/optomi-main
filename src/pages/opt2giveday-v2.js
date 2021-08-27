import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Opt2GiveDayV2 = () => {

    const settings = {
        dots: false,
        arrows: true,
		infinite: true,
		speed: 500,
	    slidesToShow: 3,
        slidesToScroll: 1,
		autoplay: true,
  		autoplaySpeed: 6000,
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			},
		]
      };

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 88}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 2000) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                        acf {
                            meta_title
                            meta_description
                            opt_day_vtwo_top_logo {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 800) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            opt_day_vtwo_page_background {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1707) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            opt_day_vtwo_slider_gallery {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 1200) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            opt_day_vtwo_bottom_link
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

                <PageBackground>
                    <Img sizes={post.node.acf.opt_day_vtwo_page_background.localFile.childImageSharp.sizes} alt="Digital Grid Background" />
                </PageBackground>

                <MainSection>
                    <Img sizes={post.node.acf.opt_day_vtwo_top_logo.localFile.childImageSharp.sizes} alt="Opt2GiveDay Logo" className={"opt2give-logo"} />
                    <div dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                    <div class="giving-slider">
                        <Slider {...settings}>
                            {post.node.acf.opt_day_vtwo_slider_gallery.map(src => (
                            <div class="giving-slide">
                                <Img sizes={src.localFile.childImageSharp.sizes} alt={src.title} className={"giving-slide-image"} />
                            </div>
                            ))}          
                        </Slider>
                    </div>
                    <Link to={post.node.acf.opt_day_vtwo_bottom_link} className={"button"}>Learn More</Link>
                </MainSection>

            </Layout>
            
        ))

    )

}

const PageBackground = styled.div`
    background-color: #000;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
    }
`

const MainSection = styled.section`
    padding-top: 100px;
    .opt2give-logo {
        max-width: 500px;
        margin: 0px auto;
        margin-bottom: 20px;
    }
    div {
        position: relative;
        z-index: 1;
    }
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 20px;
        line-height: 1.3;
        text-align: center;
        @media(max-width:620px) {
            padding: 0 20px;
            br {
                display: none;
            }
        }
    }
    a.button {
        font-family: "Helvetica Thin";
        padding: 10px 35px;
        display: inline-block;
        color: #fff;
        background-color: #801a20;
        margin: 50px auto;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        border: 1px solid #fff;
        border-radius: 15px;
        position: relative;
        z-index: 1;
        display: block;
        max-width: 250px;
        width: 100%;
    }
    .giving-slider {
        margin-bottom: 100px;
        .giving-slide {
            height: 400px;
            .giving-slide-image {
                height: 100%;
            }
        }
        .slick-prev {
            top: calc(50% - 25px);
            left: 20px;
            right: auto;
            position: absolute;
            z-index: 2;
            height: 30px;
            width: 30px;
            color: transparent;
            background: transparent;
            border: none;
            border-right: 7px solid #fff;
            border-top: 7px solid #fff;
            transform: rotate(-135deg);
            opacity: .5;
            transition-duration: .3s;
            outline: 0 !important;
        }
        .slick-prev:hover {
            opacity: 1;
            cursor: pointer;
        }
        .slick-prev:before,
        .slick-prev:after {
            display: none;
        }
        .slick-next {
            top: calc(50% - 25px);
            left: auto;
            right: 20px;
            position: absolute;
            z-index: 2;
            height: 30px;
            width: 30px;
            color: transparent;
            background: transparent;
            border: none;
            border-right: 7px solid #fff;
            border-top: 7px solid #fff;
            transform: rotate(45deg);
            opacity: .5;
            transition-duration: .3s;
            outline: 0 !important;
        }
        .slick-next:hover {
            opacity: 1;
            cursor: pointer;
        }
        .slick-next:before,
        .slick-next:after {
            display: none;
        }
    }
`

export default Opt2GiveDayV2