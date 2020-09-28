import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const SkillLineV2 = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
          paused: true,
          scrollTrigger: {
              trigger: ".trigger",
              start: 'top 80%',
              end: 'top 5%',
              id: 'skill_line',
              toggleActions: "play reverse play reverse",
              },
          })
          tl.to('.skills-copy', { opacity: '1', duration: 1 })

        let tlOne = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: ".trigger",
                start: 'top 80%',
                end: 'top 5%',
                id: 'skill_line',
                toggleActions: "play reverse play reverse",
                },
            })
            tlOne.to('.skills-line', { width: '80%', duration: 2, delay: 1, ease: 'Power4.easeOut' })

        let tlTwo = gsap.timeline({
          paused: true,
          scrollTrigger: {
              trigger: ".trigger",
              start: 'top 80%',
              end: 'top 5%',
              id: 'skill_line',
              toggleActions: "play reverse play reverse",
              },
          })
          tlTwo.to('.skills-percent', { opacity: '1', duration: 1, delay: 1 })
    
      }, []);

    return(
        <MainContainer>
            <Percent className="skills-percent">100%</Percent>
            <div id="trigger" className="trigger" style={{ background: 'transparent', height: '35px', width: '100%', position: 'relative', marginBottom: '10px' }}>
                    <Line className="skills-line"/>
            </div>
            <Copy className="skills-copy">Skill-Set Focus</Copy>
        </MainContainer>
    );
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
    opacity: 0;
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
    opacity: 0;
    @media(max-width:800px) {
      max-width: 100%;
    }
`

export default SkillLineV2