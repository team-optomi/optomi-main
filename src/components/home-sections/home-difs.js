import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import DifLineOne from './dif-line-one-v2'
import DifLineTwo from './dif-line-two-v2'
import DifLineThree from './dif-line-three-v2'

const HomeDifs = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 6}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 842) {
                                        ...GatsbyImageSharpSizes
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
        
        data.allWordpressWpHomeSection.edges.map(post => (
            <MainSection>

                <ImageBackground>
                    <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                </ImageBackground>

                <MiddleContent 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: post.node.content }}
                />

                <RowOne
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                id={"row_one_trigger"}
                >
                    <DifLineOne/>
                </RowOne>

                <RowTwo
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                id={"row_two_trigger"}
                >
                    <DifLineTwo/>
                </RowTwo>

                <RowThree
                id={"row_three_trigger"}
                >
                    <DifLineThree/>
                </RowThree>
                    
            </MainSection>
        ))
    )

}

const MainSection = styled.div`
    background-color: #000;
    padding-top: 80px;
    padding-bottom: 0px;
    position: relative;
    z-index: 3;
`

const ImageBackground = styled.div`
    position: absolute;
    width: 842px;
    height: 595px;
    left: 0;
    bottom: 0;
    transition-duration: .3s;
    @media(max-width:1199px) {
        opacity: .3;
    }
`

const BackgroundImg = styled(Img)`
    margin-bottom: 0;
`

const MiddleContent = styled.div`
    max-width: 1140px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    text-align: left; 
    transition-duration: .3s;
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 32px;
        line-height: 1.3;
        max-width: 700px;
        text-align: left;
        position: relative;
        margin: 0 auto;
        max-width: 1340px;
        transition-duration: .3s;
        .bonvivant {
            font-family: "BonVivant";
            padding: 0 10px;
            padding-left: 100px;
            letter-spacing: initial;
            font-size: 82px;
            position: relative;
            line-height: .5;
            color: #298fc2;
        }
        .dots {
            font-family: Times New Roman;
            color: #298fc2;
            font-size: 56px;
        }
    }
    @media(max-width:1200px) {
        max-width: 940px;
        p {
            font-size: 20px;
            text-align: center;
            .bonvivant {
                padding-left: 10px;
            }
        }
    }
    @media(max-width:1150px) {
        max-width: 740px;
    }
`

const RowOne = styled.div`
    position: relative;
    min-height: 30vh;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: #fff;
    }
`

const RowTwo = styled.div`
    position: relative;
    min-height: 30vh;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: #fff;
    }
`

const RowThree = styled.div`
    position: relative;
    min-height: 30vh;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: #fff;
    }
`

export default HomeDifs