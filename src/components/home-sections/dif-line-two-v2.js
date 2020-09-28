import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const DifLineTwoV2 = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
          paused: true,
          scrollTrigger: {
              trigger: "#row_two_trigger",
              start: 'top 80%',
              end: 'center 10%',
              id: 'dif_line_two',
              toggleActions: "play reverse play reverse",
              },
          })
          tl.to('.copy-two', { opacity: '1', duration: 1 })

        let tlOne = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#row_two_trigger",
                start: 'top 80%',
                end: 'center 10%',
                id: 'dif_line_two',
                toggleActions: "play reverse play reverse",
                },
            })
            tlOne.to('.dif-line-two', { width: '80%', duration: 2, delay: 1, ease: 'Power4.easeOut' })

        let tlTwo = gsap.timeline({
          paused: true,
          scrollTrigger: {
              trigger: "#row_two_trigger",
              start: 'top 80%',
              end: 'center 10%',
              id: 'percent_line_two',
              toggleActions: "play reverse play reverse",
              },
          })
          tlTwo.to('.percent-two', { opacity: '1', duration: 1, delay: 1 })
    
      }, []);

      return (
        <MainContainer>
            <Copy className="copy-two">Technology Driven</Copy>
            <div style={{ background: 'transparent', height: '35px', width: '100%', position: 'relative', marginBottom: '10px' }}>
                    <Line className="dif-line-two" />
            </div>
            <Percent className="percent-two">100%</Percent>
        </MainContainer>
    );

}

const MainContainer = styled.div`
    max-width: 1540px;
    padding-right: 120px;
    padding-left: 120px;
    width: 100%;
    margin: 0 auto;
    @media(max-width:1500px) {
      max-width: 1340px;
    }
    @media(max-width:1200px) {
      max-width: 1140px;
    }
    @media(max-width:700px) {
      padding-left: 20px;
      padding-right: 20px;
    }
`

const Percent = styled.p`
    font-family: "Helvetica Thin";
    font-size: 60px;
    line-height: 1;
    letter-spacing: 5px;
    color: #fff;
    text-align: right;
    margin-top: -25px;
    padding-right: 100px;
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
    left: 20%;
    @media(max-width:1050px) {
      left: 10%;
    }
`

const Copy = styled.p`
    font-family: "Helvetica Thin";
    font-size: 32px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 3px;
    max-width: 100%;
    text-align: right;
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

export default DifLineTwoV2