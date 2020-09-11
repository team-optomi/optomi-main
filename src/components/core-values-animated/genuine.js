import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import GenuineContent from "./core-values/genuine-content"

const Genuine = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#g_trigger',
                start: 'top 70%',
                end: 'top 60%',
                id: 'genuine_line',
                markers: true,
                },
            })
            tl.to('.g-line', { width: '80%' })
            tl.to('.g-toggle', {opacity: '1' })
    
      }, []);

    return(
        <MainContainer id={"g_trigger"}>
            <GenuineContent />
            <Line className="g-line"/>
        </MainContainer>
    );

}

const MainContainer = styled.div``

const Line = styled.div`
    width: 0;
    height: 1px;
    background-color: #fff;
`

export default Genuine