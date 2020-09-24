import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import RespectfulContent from "./core-values/respectful-content"

const Respectful = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#r_trigger',
                start: 'top 70%',
                end: 'top 60%',
                id: 'respectful_line',
                },
            })
            tl.to('.r-rotate', {rotation: 1000, right: '20px', opacity: '1', duration: 2, ease: 'power4.out' })
            tl.to('.r-line', { width: '60%', duration: 1, ease: "power2.out" })
            tl.to('.r-toggle', {opacity: '1', duration: 1, ease: "power2" })
    
      }, []);

    return(
        <MainContainer id={"r_trigger"}>
            <RespectfulContent />
        </MainContainer>
    );

}

const MainContainer = styled.div`
    margin-bottom: 200px;
    position: relative;
`


export default Respectful