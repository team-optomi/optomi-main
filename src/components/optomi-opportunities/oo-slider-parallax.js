import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import OOSlider from "../../components/optomi-opportunities/oo-slider"

const OOSliderParallax = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#parallax_trigger',
                start: 'bottom bottom',
                end: 'bottom top',
                id: 'parallax-move',
                scrub: true,
                },
            })
            tl.to('.parallax-section', {y: 300 })

        let tlTwo = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#parallax_trigger',
                start: 'bottom 80%',
                end: 'bottom top',
                id: 'parallax-fade',
                scrub: true,
                },
            })
            tlTwo.to('.parallax-section', {opacity: '0' })
    
      }, []);

    return(
        <ParallaxSlider id={"parallax_trigger"} >
            <ParallaxSection className={"parallax-section"}>
                <OOSlider />
            </ParallaxSection>
        </ParallaxSlider>
    );

}

const ParallaxSlider = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
`

const ParallaxSection = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 1;
`

export default OOSliderParallax