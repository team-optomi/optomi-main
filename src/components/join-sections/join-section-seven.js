import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const JoinSectionSeven = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpJoinSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 95}}}}) {
                edges {
                    node {
                        content
                        acf {
                            join_seven_column_one_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 600) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_seven_column_one_title
                            join_seven_column_two_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 600) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_seven_column_two_title
                            join_seven_column_three_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 600) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_seven_column_three_title
                            join_seven_column_four_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 600) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_seven_column_four_title
                            join_seven_column_five_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 600) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_seven_column_five_title
                            join_seven_column_six_icon {
                                title
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 600) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            join_seven_column_six_title
                        }
                    }
                }
            }
        }
    `)

    return(
        
        data.allWordpressWpJoinSection.edges.map(post => (
            <MainSection>

                <MainContent>
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="top-content" dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                    <div class="flex-row">
                        <div 
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="col-six">
                            <Img sizes={post.node.acf.join_seven_column_one_icon.localFile.childImageSharp.sizes} alt={post.node.acf.join_seven_column_one_icon.title} />
                            <h3>{post.node.acf.join_seven_column_one_title}</h3>
                        </div>
                        <div 
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="col-six">
                            <Img sizes={post.node.acf.join_seven_column_two_icon.localFile.childImageSharp.sizes} alt={post.node.acf.join_seven_column_two_icon.title} />
                            <h3>{post.node.acf.join_seven_column_two_title}</h3>
                        </div>
                        <div 
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="col-six">
                            <Img sizes={post.node.acf.join_seven_column_three_icon.localFile.childImageSharp.sizes} alt={post.node.acf.join_seven_column_three_icon.title} />
                            <h3>{post.node.acf.join_seven_column_three_title}</h3>
                        </div>
                        <div 
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="col-six">
                            <Img sizes={post.node.acf.join_seven_column_four_icon.localFile.childImageSharp.sizes} alt={post.node.acf.join_seven_column_four_icon.title} />
                            <h3>{post.node.acf.join_seven_column_four_title}</h3>
                        </div>
                        <div 
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="col-six">
                            <Img sizes={post.node.acf.join_seven_column_five_icon.localFile.childImageSharp.sizes} alt={post.node.acf.join_seven_column_five_icon.title} />
                            <h3>{post.node.acf.join_seven_column_five_title}</h3>
                        </div>
                        <div 
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="col-six">
                            <Img sizes={post.node.acf.join_seven_column_six_icon.localFile.childImageSharp.sizes} alt={post.node.acf.join_seven_column_six_icon.title} />
                            <h3>{post.node.acf.join_seven_column_six_title}</h3>
                        </div>
                    </div>
                    
                </MainContent>
                    
            </MainSection>
        ))
    )

}

const MainSection = styled.section`
    position: relative;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 100px;
    padding-left: 20px;
    padding-right: 20px;
`

const MainContent = styled.div`
    h2 {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 40px;
        letter-spacing: 2px;
        font-weight: 100;
        color: rgb(255,255,255);
        line-height: 1.3;
        margin-bottom: 20px;
        padding: 0 20px;
        text-align: center;
        span {
            font-family: BonVivant;
            font-weight: 100;
            font-size: 80px;
            position: relative;
            left: -28px;
            top: 10px;
        }
    }
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 24px;
        color: rgb(255,255,255);
        line-height: 1.3;
        margin-bottom: 20px;
        text-align: center;
    }
    .flex-row {
        display: flex;
        .col-six {
            width: 16.66%;
            padding: 0 10px;
        }
        h3 {
            font-family: "Helvetica Thin";
            width: 100%;
            z-index: 1;
            font-size: 24px;
            font-weight: 100;
            color: rgb(255,255,255);
            line-height: 1.3;
            margin-bottom: 20px;
            text-align: center;
        }
    }
    @media(max-width:1160px) {
        .flex-row {
            flex-wrap: wrap;
            .col-six {
                width: 33.33%;
            }
        }
    }
    @media(max-width:900px) {
        h2 {
          font-size: 28px;
          span {
            font-size: 72px;
            left: -12px;
          }
        }
        p {
            font-size: 20px;
        }
      }
    @media(max-width:767px) {
        .flex-row {
            .col-six {
                width: 50%;
                h3 {
                    font-size: 18px;
                }
            }
        }
    }
    @media(max-width:400px) {
        h2 {
            span {
              font-size: 44px;
              left: 0px;
            }
          }
    }
`

export default JoinSectionSeven