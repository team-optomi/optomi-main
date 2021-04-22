import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import InnovativeContent from "./core-values/innovative-content"

const Innovative = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#i_trigger',
                start: 'top 70%',
                end: 'top 60%',
                id: 'innovative_line',
                },
            })
            tl.to('.i-rotate', {rotation: 1020, right: '20px', opacity: '1', duration: 2, ease: 'power4.out' })
            tl.to('.i-line', { width: '60%', duration: 1, ease: "power2.out" })

        let tlTwo = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#i_trigger',
                start: 'top 70%',
                end: 'top 60%',
                id: 'innovative_line',
                },
            })
            tlTwo.to('.i-toggle', {opacity: '1', duration: 1, delay: 1, ease: "power2" })
    
      }, []);

    return(
        <MainContainer id={"i_trigger"}>
            <InnovativeContent />
        </MainContainer>
    );

}

const MainContainer = styled.div`
    margin-bottom: 200px;
    position: relative;
`


export default Innovative