import React, { Component }  from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { FaChevronDown } from 'react-icons/fa'

class GenuineContent extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }
    
    toggleValue() {
        this.setState({ isOpen: !this.state.isOpen });
        scrollTo('#g_scroll');
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

                    <ValueToggle id={"g_scroll"} className="g-toggle" onClick={() => this.toggleValue()} ><h3>{post.node.title}</h3><FaChevronDown size={24} className={valueName}/></ValueToggle>
                        <ValueContent className={valueName}>
                            <ValueCopy dangerouslySetInnerHTML={{ __html: post.node.content }}/>
                            <h4><span class="bonvivant">Notable Moment</span> - {post.node.title}</h4>
                            <ValueQuote dangerouslySetInnerHTML={{ __html: post.node.acf.quote }}/>
                        </ValueContent>

                </ValueContainer>
            ))
        );
    }

}

const ValueContainer = styled.div`
    max-width: 1140px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
`

const ValueToggle = styled.div`
    opacity: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    }
`

const ValueQuote = styled.div`
    max-width: 900px;
    margin-left: auto;
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
    }
`


const ValueContent = styled.div`
    visibility: hidden;
    opacity: 0;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    transition-duration: .3s;
    &.valueOpen {
        opacity: 1;
        visibility: visible;
        height: 1000px;
        ${ValueCopy} {
            opacity: 1;
        }
        ${ValueQuote} {
            opacity: 1;
        }
        h4 {
            opacity: 1;
        }
    }
    h4 {
        font-family: "Helvetica Thin";
        color: #fff;
        opacity: 0;
        transition-delay: .6s;
        transition-duration: .3s;
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpCoreValue(filter: {categories: {elemMatch: {wordpress_id: {eq: 32}}}}) {
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
      render={data => <GenuineContent data={data} {...props} />}
    />
  );