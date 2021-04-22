import React, { useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import OOHeaderLogo from "../../components/optomi-opportunities/oo-header-logo"

const OOFixedLogos = () => {

  useEffect(() => {
    
    if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals('ScrollTrigger', ScrollTrigger)
    }

    let tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
            trigger: '#oo_logo_trigger',
            start: 'bottom top',
            end: 'bottom top',
            id: 'logo-resize',
            scrub: true,
            },
        })
        tl.to('.oo_logo_col', {width: '120px', duration: .5, ease: 'Power4.easeOut' })

        let tltwo = gsap.timeline({
          paused: true,
          scrollTrigger: {
              trigger: '#oo_logo_trigger',
              start: 'bottom top',
              end: 'bottom top',
              id: 'logo-resize',
              scrub: true,
              },
          })
          tltwo.to('.oo_logo_col .gatsby-image-wrapper', {width: '100px', duration: .5, ease: 'Power4.easeOut' })

  }, []);

  return(
    <LogoCol className={"oo_logo_col"}>
      <Link
        to="/optomi-opportunities/"
        >
        <OOHeaderLogo/>
      </Link>
    </LogoCol>
  )
}

const LogoCol = styled.div`
  position: fixed;
  top: 20px;
  left: 5px;
  width: 276px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 101;
  .gatsby-image-wrapper {
    width: 276px;
    height: 90px;
    img {
      margin-bottom: 0;
      width: 100% !important;
      height: auto !important;
    }
  }
  @media(max-width:768px) {
    display: none;
  }
`

export default OOFixedLogos