import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import ConnectedContent from "./core-values/connected-content"

const Connected = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#c_trigger',
                start: 'top 70%',
                end: 'top 60%',
                id: 'connected_line',
                },
            })
            tl.to('.c-rotate', {rotation: 1200, left: '20px', opacity: '1', duration: 2, ease: 'power4.out' })
            tl.to('.c-line', { width: '60%', duration: 1, ease: "power2.out" })

        let tlTwo = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#c_trigger',
                start: 'top 70%',
                end: 'top 60%',
                id: 'connected_line',
                },
            })
            tlTwo.to('.c-toggle', {opacity: '1', duration: 1, delay: 1, ease: "power2" })
    
      }, []);

    return(
        <MainContainer id={"c_trigger"}>
            <ConnectedContent />
        </MainContainer>
    );

}

const MainContainer = styled.div`
    margin-bottom: 200px;
    position: relative;
`


export default Connected