import React, { Component }  from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { FaChevronDown } from 'react-icons/fa'

class InnovativeContent extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }
    
    toggleValue() {
        this.setState({ isOpen: !this.state.isOpen });
        scrollTo('#i_scroll');
    }

    render() {
        const { data } = this.props; 

        let valueName = "valueContent";
        if (this.state.isOpen) {
          valueName += ' valueOpen';
        }
        return (
            data.allWordpressWpCoreValue.edges.map(post => (
                <ValueContainer>

                    <SvgBox>
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 39.688 39.688" class="i-rotate">
                            <path style={{"lineHeight":"normal","fontVariantLigatures":"normal","fontVariantPosition":"normal","fontVariantCaps":"normal","fontVariantNumeric":"normal","fontVariantAlternates":"normal","fontVariantEastAsian":"normal","fontFeatureSettings":"normal","fontVariationSettings":"normal","textIndent":"0","textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","textOrientation":"mixed","whiteSpace":"normal","shapePadding":"0","shapeMargin":"0","inlineSize":"0","isolation":"auto","mixBlendMode":"normal","solidColor":"#000","solidOpacity":"1"}} d="M19.816.934C9.391.949.931 9.415.931 19.844c0 10.438 8.475 18.91 18.913 18.91s18.912-8.472 18.912-18.91c0-1.979-.308-3.886-.872-5.679l-1.007.318a17.86 17.86 0 01.82 5.361c0 9.866-7.987 17.854-17.853 17.854-9.866 0-17.854-7.988-17.854-17.854 0-9.857 7.974-17.838 17.828-17.852z" color="#000" font-weight="400" font-family="sans-serif" overflow="visible" fill="gray"/>
                        </svg>
                    </SvgBox>

                    <ValueToggle id={"i_scroll"} className="i-toggle" onClick={() => this.toggleValue()} ><h3>{post.node.title}</h3><FaChevronDown size={24} className={valueName}/></ValueToggle>
                        <Line className="i-line"/>
                            <ValueContent className={valueName}>
                                <ValueCopy dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                                <h4><span class="bonvivant">notable moment</span><span class="helvetica"> - {post.node.title}</span></h4>
                                <ValueQuote dangerouslySetInnerHTML={{ __html: post.node.acf.quote }}/>
                            </ValueContent>
                        <Line className="i-line"/>
                </ValueContainer>
            ))
        );
    }

}

const ValueContainer = styled.div`
    max-width: 1340px;
    width: 100%;
    padding-left: 120px;
    padding-right: 120px;
    margin: 0 auto;
    @media(max-width:1200px) {
        max-width: 1140px;
    }
    @media(max-width:768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

const SvgBox = styled.div`
    svg {
        position: absolute;
        right: calc(50% - 37px);
        top: -50px;
        max-width: 75px;
        opacity: 0;
        transform: rotate(-120deg);
        path {
            fill: #333;
        }
    }
    @media(max-width:768px) {
        display: none;
    }
`

const Line = styled.div`
    width: 0;
    height: 1px;
    background-color: #333;
    position: absolute;
    right: 0;
`

const ValueToggle = styled.div`
    opacity: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
    h3 {
        font-family: "Helvetica Thin";
        color: #8a8d8f;
        font-weight: 100;
        font-size: 52px;
        letter-spacing: 15px;
        text-transform: uppercase;
        margin-bottom: 0;
        margin-right: 60px;
    }
    svg {
        color: #8a8d8f;
        transition-duration: .3s;
        transform: rotate(-90deg);
        &.valueOpen {
            transform: rotate(0deg);
        }
    }
    &:hover {
        cursor: pointer;
    }
    @media(max-width:1200px) {
        h3 {
            font-size: 42px;
        }
    }
    @media(max-width:600px) {
        h3 {
            font-size: 28px;
            letter-spacing: 7px;
            margin-right: 10px;
        }
    }
`

const ValueCopy = styled.div`
    transition-delay: .6s;
    transition-duration: .3s;
    opacity: 0;
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 24px;
        color: rgb(138, 141, 143);
        line-height: 1.2;
        margin-bottom: 35px;
        max-width: 1000px;
        padding-left: 40px;
        @media(max-width:1200px) {
            font-size: 20px;
        }
    }
`

const ValueQuote = styled.div`
    max-width: 900px;
    margin-left: auto;
    transition-delay: .6s;
    transition-duration: .3s;
    opacity: 0;
    position: relative;
    padding-right: 30px;
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 24px;
        color: rgb(138, 141, 143);
        line-height: 1.2;
        margin-bottom: 35px;
    }
    &:before {
        content: '"';
        position: absolute;
        top: 0;
        left: -60px;
        font-family: "BonVivant";
        color: #8a8d8f;
        font-size: 120px;
        font-weight: 100;
    }
    &:after{
        content: '"';
        position: absolute;
        bottom: 0;
        right: 20px;
        font-family: "BonVivant";
        color: #8a8d8f;
        font-size: 120px;
        font-weight: 100;
    }
    @media(max-width:1200px) {
        max-width: 700px;
        p {
            font-size: 20px;
        }
    }
`


const ValueContent = styled.div`
    visibility: hidden;
    opacity: 0;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    transition-duration: 1s;
    transition-timing-function: ease-in;
    &.valueOpen {
        opacity: 1;
        visibility: visible;
        height: 900px;
        padding-top: 20px;
        ${ValueCopy} {
            opacity: 1;
        }
        ${ValueQuote} {
            opacity: 1;
        }
        h4 {
            opacity: 1;
        }
        @media(max-width:850px) {
            height: 1000px;
        }
        @media(max-width:600px) {
            height: 1100px;
            p,
            div {
                padding-left: 0;
                padding-right: 0;
                &:before,
                &:after {
                    display: none;
                }
            }
        }
        @media(max-width:460px) {
            height: 1700px;
        }
    }
    h4 {
        color: #8a8d8f;
        line-height: 1;
        opacity: 0;
        transition-delay: .6s;
        transition-duration: .3s;
        span.bonvivant {
            font-family: "BonVivant";
            font-size: 72px;
            font-weight: 100;
            @media(max-width:500px) {
                font-size: 36px;
            }
        }
        span.helvetica {
            font-family: "Helvetica Thin";
            font-size: 26px;
            letter-spacing: 7px;
            font-weight: 100;
        }
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpCoreValue(filter: {categories: {elemMatch: {wordpress_id: {eq: 29}}}}) {
                edges {
                    node {
                        title
                        content
                        acf {
                            quote
                        }
                    }
                }
            }
        }
      `}
      render={data => <InnovativeContent data={data} {...props} />}
    />
  );