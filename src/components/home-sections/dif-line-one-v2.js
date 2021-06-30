import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const DifLineOneV2 = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
          paused: true,
          scrollTrigger: {
              trigger: "#row_one_trigger",
              start: 'top 80%',
              end: 'center 10%',
              id: 'dif_line_one',
              toggleActions: "play reverse play reverse",
              },
          })
          tl.to('.copy-one', { opacity: '1', duration: 1 }, 0)

        let tlOne = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#row_one_trigger",
                start: 'top 80%',
                end: 'center 10%',
                id: 'dif_line_one',
                toggleActions: "play reverse play reverse",
                },
            })
            tlOne.to('.dif-line-one', { width: '100%', duration: 2, ease: 'Power4.easeOut' }, .5)

        let tlTwo = gsap.timeline({
          paused: true,
          scrollTrigger: {
              trigger: "#row_one_trigger",
              start: 'top 80%',
              end: 'center 10%',
              id: 'percent_line_one',
              toggleActions: "play reverse play reverse",
              },
          })
          tlTwo.to('.percent-one', { opacity: '1', duration: 1 }, 1)
    
      }, []);

      return (
        <MainContainer>
            <Copy className="copy-one">Skill-Set Focused</Copy>
            <div style={{ background: 'transparent', height: '35px', width: '100%', position: 'relative', marginBottom: '10px' }}>
                    <Line className="dif-line-one" />
            </div>
            <Percent className="percent-one">100%</Percent>
        </MainContainer>
    );

}

const MainContainer = styled.div`
    max-width: 1540px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    @media(max-width:1500px) {
      max-width: 1340px;
    }
    @media(max-width:1200px) {
      max-width: 1140px;
    }
    @media(max-width:1050px) {
      max-width: 840px;
    }
    @media(max-width:850px) {
      max-width: 540px;
    }
    @media(max-width:768px) {
      padding-left: 20px;
      padding-right: 20px;
    }
`

const Percent = styled.p`
    font-family: "Helvetica Thin";
    font-size: 60px;
    line-height: 1;
    letter-spacing: 5px;
    color: #d7be69 !important;
    text-shadow: 3px 3px 5px #d7be69;
    text-align: right;
    margin-top: -25px;
    padding-right: 20px;
    position: relative;
    z-index: 1;
    opacity: 0;
    @media(max-width:1050px) {
      padding-right: 0;
      text-align: center;
    }
    @media(max-width:500px) {
      font-size: 32px;
    }
`

const Line = styled.div`
    width: 0%;
    height: 35px;
    background-color: #298fc2;
    position: absolute;
    top: 0px;
    left: 0;
`

const Copy = styled.p`
    font-family: "Helvetica Thin";
    font-size: 32px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 3px;
    max-width: 100%;
    text-align: center;
    line-height: 1;
    opacity: 0;
    @media(max-width:1050px) {
      text-align: center;
    }
    @media(max-width:500px) {
      font-size: 20px;
      margin-bottom: 10px;
    }
`

export default DifLineOneV2