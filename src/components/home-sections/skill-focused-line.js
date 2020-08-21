import React, { Component } from "react"
import styled from 'styled-components'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class SkillLine extends Component {

    constructor(props) {
        super(props);
        this.container = null;
        this.trigger = null;
        this.tl = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: "#trigger",
            scrub: true,
            markers: true,
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

                <div id="trigger" ref={div => (this.trigger = div)} style={{ background: '#fff', height: '140px', width: '100%', position: 'relative' }}>
                        <Line ref={div => (this.container = div)}/>
                </div>

            </MainContainer>
        );

    }

}

const Line = styled.div`
    width: 0;
    height: 40px;
    background-color: #000;
    position: absolute;
    top: 20px;
    left: 20px;
`


const MainContainer = styled.div`
    max-width: 1340px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
`

export default SkillLine