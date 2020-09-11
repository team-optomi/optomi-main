import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import PassionateContent from "./core-values/passionate-content"

const Passionate = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#p_trigger',
                start: 'top 70%',
                end: 'top 60%',
                id: 'passionate_line',
                },
            })
            tl.to('.p-line', { width: '60%', duration: 1, ease: "power2.out" })
            tl.to('.p-toggle', {opacity: '1', duration: 1, ease: "power2" })
    
      }, []);

    return(
        <MainContainer id={"p_trigger"}>
            <PassionateContent />
        </MainContainer>
    );

}

const MainContainer = styled.div`
    margin-bottom: 200px;
`


export default Passionate