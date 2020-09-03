import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class MissionStatement extends Component {

    constructor(props) {
        super(props);
        this.container = null;
        this.trigger = null;
        this.tl = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: "#mission_trigger",
            start: 'top bottom',
            end: 'top 60%',
            id: 'mission_parallax',
            markers: true,
          }
        });
      }
      componentDidMount() {
        this.tl.to(this.container, {
            opacity: '1',
        });
      }

    render() {

        const { data } = this.props; 

        return(
            data.allWordpressWpHomeSection.edges.map(post => (
                <MainSection id={"mission_trigger"}>
    
                    <ImageBackground ref={div => (this.container = div)}>
                        <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                    </ImageBackground>
    
                    <FirstRow>
                        <MissionContent 
                            data-sal="slide-up"
                            data-sal-duration="1000"
                            data-sal-delay="600"
                            data-sal-easing="ease"
                            dangerouslySetInnerHTML={{ __html: post.node.content }}
                        />
                    </FirstRow>
                        
                </MainSection>
            ))
        );

    }

}

const MainSection = styled.div`
    background-color: #aaa;
    padding-top: 120px;
    padding-bottom: 80px;
    position: relative;
    z-index: 1;
    transition-duration: .3s;
    @media(max-width:1600px) {
        padding-top: 80px;
    }
`

const BackgroundImg = styled(Img)`
    height: 100vh;
`

const ImageBackground = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -2;
    opacity: .3;
`

const FirstRow = styled.div`
    max-width: 1140px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    z-index: 2;
    @media(max-width:1200px) {
        max-width: 990px;
    }
`

const MissionContent = styled.div`
    text-align: left;
    h2 {
        font-family: "Helvetica Thin";
        font-size: 60px;
        color: #8a8d8f;
        font-weight: 100;
        max-width: 720px;
        line-height: 1.2;
        letter-spacing: 1px;
        transition-duration: .3s;
        .bonvivant {
            font-family: "BonVivant";
            font-size: 80px;
            padding: 0 10px;
        }
    }
    p {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 24px;
        line-height: 1.3;
        max-width: 700px;
        transition-duration: .3s;
    }
    @media(max-width:1350px) {
        h2 {
            max-width: 600px;
            font-size: 42px;
            .bonvivant {
                font-size: 60px;
            }
        }
        p {
            max-width: 580px;
            font-size: 20px;
        }
    }
    @media(max-width: 1000px) {
        h2,
        p {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
        }
    }
`


export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpHomeSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 7}}}}) {
                edges {
                    node {
                        title
                        content
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
      render={data => <MissionStatement data={data} {...props} />}
    />
  );