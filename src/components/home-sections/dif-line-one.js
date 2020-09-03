import React, { Component } from "react"
import styled from 'styled-components'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class DifLineOne extends Component {

    constructor(props) {
        super(props);
        this.container = null;
        this.trigger = null;
        this.tl = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: "#row_one_trigger",
            scrub: 1,
            end: 'top 20%',
            id: 'dif_line_one'
          }
        });
      }
      componentDidMount() {
        this.tl.to(this.container, {
            width: '80%',
        });
      }

    render() {

        return (
            <MainContainer>
                <Percent>100%</Percent>
                <div id="trigger" ref={div => (this.trigger = div)} style={{ background: 'transparent', height: '35px', width: '100%', position: 'relative', marginBottom: '10px' }}>
                        <Line ref={div => (this.container = div)}/>
                </div>
                <Copy>Skill-Set Focus</Copy>
            </MainContainer>
        );
    }
}

const MainContainer = styled.div`
    max-width: 1340px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    @media(max-width:1500px) {
      max-width: 1140px;
    }
    @media(max-width:1200px) {
      max-width: 940px;
    }
`

const Percent = styled.p`
    font-family: "Helvetica Thin";
    font-size: 60px;
    line-height: 1;
    letter-spacing: 5px;
    color: #fff;
    margin-bottom: -25px;
    padding-left: 100px;
    position: relative;
    z-index: 1;
    @media(max-width:800px) {
      padding-left: 0;
    }
`

const Line = styled.div`
    width: 0%;
    height: 35px;
    background-color: #000;
    position: absolute;
    top: 0px;
    left: 0px;
`

const Copy = styled.p`
    font-family: "Helvetica Thin";
    font-size: 32px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 3px;
    max-width: 80%;
    text-align: center;
    line-height: 1;
    @media(max-width:800px) {
      max-width: 100%;
    }
`

export default DifLineOne