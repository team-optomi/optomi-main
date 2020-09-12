import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import HeaderLogo from "../components/header-logo"

const StickyLogo = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#heroBanner",
                scrub: 1,
                start: 'bottom top',
                end: 'bottom top',
                id: 'hero_banner',
                },
            })
            tl.to('.sticky-logo', { top: '20px' })
    
      }, []);

      return(
          <StickyDiv className={"sticky-logo"}>
              <HeaderLogo/>
          </StickyDiv>
      );

}

const StickyDiv = styled.div`
    position: fixed;
    top: -120px;
    left: 5px;
    width: 110px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 101;
    .gatsby-image-wrapper {
      width: 90px;
      height: 34px;
      img {
        margin-bottom: 0;
      }
    }
    @media(max-width:600px) {
      display: none;
    }
`

export default StickyLogo