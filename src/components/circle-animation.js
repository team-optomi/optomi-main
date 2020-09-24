import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const CircleAnimation = () => {

    useEffect(() => {
    
        if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tlOne = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#circle_trigger',
                start: 'top 90%',
                end: 'top top',
                id: 'circle_rotate_one',
                scrub: 1,
                },
        })
        tlOne.to('.circleOne', {rotation: 1180,  duration: 3, ease: 'power2.in' })

        let tlTwo = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#circle_trigger',
                start: 'top 90%',
                end: 'top top',
                id: 'circle_rotate_two',
                scrub: 1,
                },
        })
        tlTwo.to('.circleTwo', {rotation: 720,  duration: 3, ease: 'power2.in' })

        let tlThree = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#circle_trigger',
                start: 'top 90%',
                end: 'top top',
                id: 'circle_rotate_three',
                scrub: 1,
                },
        })
        tlThree.to('.circleThree', {rotation: 280,  duration: 3, ease: 'power2.in' })

        let tlFour = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#circle_trigger',
                start: 'top 90%',
                end: 'top top',
                id: 'circle_rotate_four',
                scrub: 1,
                },
        })
        tlFour.to('.circleFour', {rotation: 1900,  duration: 3, ease: 'power2.in' })

        let tlFive = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#circle_trigger',
                start: 'top 90%',
                end: 'top top',
                id: 'circle_rotate_five',
                scrub: 1,
                },
        })
        tlFive.to('.circleFive', {rotation: 1100,  duration: 3, ease: 'power2.in' })

        let tlSix = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: '#circle_trigger',
                start: 'top 90%',
                end: 'top top',
                id: 'circle_rotate_six',
                scrub: 1,
                },
        })
        tlSix.to('.circleSix', {rotation: 860,  duration: 3, ease: 'power2.in' })
    
      }, []);

    return(
        <MainContainer 
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
        id={"circle_trigger"}>
            <CircleContainer>
                <CircleBox className={"circle-rotating"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 39.688 39.688" class="circleOne">
                        <path style={{"lineHeight":"normal","fontVariantLigatures":"normal","fontVariantPosition":"normal","fontVariantCaps":"normal","fontVariantNumeric":"normal","fontVariantAlternates":"normal","fontVariantEastAsian":"normal","fontFeatureSettings":"normal","fontVariationSettings":"normal","textIndent":"0","textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","textOrientation":"mixed","whiteSpace":"normal","shapePadding":"0","shapeMargin":"0","inlineSize":"0","isolation":"auto","mixBlendMode":"normal","solidColor":"#000","solidOpacity":"1"}} d="M19.816.934C9.391.949.931 9.415.931 19.844c0 10.438 8.475 18.91 18.913 18.91s18.912-8.472 18.912-18.91c0-1.979-.308-3.886-.872-5.679l-1.007.318a17.86 17.86 0 01.82 5.361c0 9.866-7.987 17.854-17.853 17.854-9.866 0-17.854-7.988-17.854-17.854 0-9.857 7.974-17.838 17.828-17.852z" color="#000" font-weight="400" font-family="sans-serif" overflow="visible" fill="gray"/>
                    </svg>
                </CircleBox>
                <CircleBox className={"circle-rotating"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 39.688 39.688" class="circleTwo">
                        <path style={{"lineHeight":"normal","fontVariantLigatures":"normal","fontVariantPosition":"normal","fontVariantCaps":"normal","fontVariantNumeric":"normal","fontVariantAlternates":"normal","fontVariantEastAsian":"normal","fontFeatureSettings":"normal","fontVariationSettings":"normal","textIndent":"0","textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","textOrientation":"mixed","whiteSpace":"normal","shapePadding":"0","shapeMargin":"0","inlineSize":"0","isolation":"auto","mixBlendMode":"normal","solidColor":"#000","solidOpacity":"1"}} d="M19.816.934C9.391.949.931 9.415.931 19.844c0 10.438 8.475 18.91 18.913 18.91s18.912-8.472 18.912-18.91c0-1.979-.308-3.886-.872-5.679l-1.007.318a17.86 17.86 0 01.82 5.361c0 9.866-7.987 17.854-17.853 17.854-9.866 0-17.854-7.988-17.854-17.854 0-9.857 7.974-17.838 17.828-17.852z" color="#000" font-weight="400" font-family="sans-serif" overflow="visible" fill="gray"/>
                    </svg>
                </CircleBox>
                <CircleBox className={"circle-rotating"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 39.688 39.688" class="circleThree">
                        <path style={{"lineHeight":"normal","fontVariantLigatures":"normal","fontVariantPosition":"normal","fontVariantCaps":"normal","fontVariantNumeric":"normal","fontVariantAlternates":"normal","fontVariantEastAsian":"normal","fontFeatureSettings":"normal","fontVariationSettings":"normal","textIndent":"0","textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","textOrientation":"mixed","whiteSpace":"normal","shapePadding":"0","shapeMargin":"0","inlineSize":"0","isolation":"auto","mixBlendMode":"normal","solidColor":"#000","solidOpacity":"1"}} d="M19.816.934C9.391.949.931 9.415.931 19.844c0 10.438 8.475 18.91 18.913 18.91s18.912-8.472 18.912-18.91c0-1.979-.308-3.886-.872-5.679l-1.007.318a17.86 17.86 0 01.82 5.361c0 9.866-7.987 17.854-17.853 17.854-9.866 0-17.854-7.988-17.854-17.854 0-9.857 7.974-17.838 17.828-17.852z" color="#000" font-weight="400" font-family="sans-serif" overflow="visible" fill="gray"/>
                    </svg>
                </CircleBox>
                <CircleBox className={"circle-rotating"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 39.688 39.688" class="circleFour">
                        <path style={{"lineHeight":"normal","fontVariantLigatures":"normal","fontVariantPosition":"normal","fontVariantCaps":"normal","fontVariantNumeric":"normal","fontVariantAlternates":"normal","fontVariantEastAsian":"normal","fontFeatureSettings":"normal","fontVariationSettings":"normal","textIndent":"0","textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","textOrientation":"mixed","whiteSpace":"normal","shapePadding":"0","shapeMargin":"0","inlineSize":"0","isolation":"auto","mixBlendMode":"normal","solidColor":"#000","solidOpacity":"1"}} d="M19.816.934C9.391.949.931 9.415.931 19.844c0 10.438 8.475 18.91 18.913 18.91s18.912-8.472 18.912-18.91c0-1.979-.308-3.886-.872-5.679l-1.007.318a17.86 17.86 0 01.82 5.361c0 9.866-7.987 17.854-17.853 17.854-9.866 0-17.854-7.988-17.854-17.854 0-9.857 7.974-17.838 17.828-17.852z" color="#000" font-weight="400" font-family="sans-serif" overflow="visible" fill="gray"/>
                    </svg>
                </CircleBox>
                <CircleBox className={"circle-rotating"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 39.688 39.688"  class="circleFive">
                        <path style={{"lineHeight":"normal","fontVariantLigatures":"normal","fontVariantPosition":"normal","fontVariantCaps":"normal","fontVariantNumeric":"normal","fontVariantAlternates":"normal","fontVariantEastAsian":"normal","fontFeatureSettings":"normal","fontVariationSettings":"normal","textIndent":"0","textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","textOrientation":"mixed","whiteSpace":"normal","shapePadding":"0","shapeMargin":"0","inlineSize":"0","isolation":"auto","mixBlendMode":"normal","solidColor":"#000","solidOpacity":"1"}} d="M19.816.934C9.391.949.931 9.415.931 19.844c0 10.438 8.475 18.91 18.913 18.91s18.912-8.472 18.912-18.91c0-1.979-.308-3.886-.872-5.679l-1.007.318a17.86 17.86 0 01.82 5.361c0 9.866-7.987 17.854-17.853 17.854-9.866 0-17.854-7.988-17.854-17.854 0-9.857 7.974-17.838 17.828-17.852z" color="#000" font-weight="400" font-family="sans-serif" overflow="visible" fill="gray"/>
                    </svg>
                </CircleBox>
                <CircleBox className={"circle-rotating"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 39.688 39.688"  class="circleSix">
                        <path style={{"lineHeight":"normal","fontVariantLigatures":"normal","fontVariantPosition":"normal","fontVariantCaps":"normal","fontVariantNumeric":"normal","fontVariantAlternates":"normal","fontVariantEastAsian":"normal","fontFeatureSettings":"normal","fontVariationSettings":"normal","textIndent":"0","textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","textOrientation":"mixed","whiteSpace":"normal","shapePadding":"0","shapeMargin":"0","inlineSize":"0","isolation":"auto","mixBlendMode":"normal","solidColor":"#000","solidOpacity":"1"}} d="M19.816.934C9.391.949.931 9.415.931 19.844c0 10.438 8.475 18.91 18.913 18.91s18.912-8.472 18.912-18.91c0-1.979-.308-3.886-.872-5.679l-1.007.318a17.86 17.86 0 01.82 5.361c0 9.866-7.987 17.854-17.853 17.854-9.866 0-17.854-7.988-17.854-17.854 0-9.857 7.974-17.838 17.828-17.852z" color="#000" font-weight="400" font-family="sans-serif" overflow="visible" fill="gray"/>
                    </svg>
                </CircleBox>
            </CircleContainer>
        </MainContainer>
    );

}

const MainContainer = styled.div`
    position: relative;
`

const CircleContainer = styled.div`
    max-width: 450px;
    height: 75px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    svg {
        max-width: 70px;
        path {
            fill: #333;
        }
    }
`

const CircleBox = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(1) {
        svg {
            transform: rotate(-45deg);
        }
    }
    &:nth-child(2) {
        svg {
            transform: rotate(0deg);
        }
    }
    &:nth-child(3) {
        svg {
            transform: rotate(-90deg);
        }
    }
    &:nth-child(4) {
        svg {
            transform: rotate(-30deg);
        }
    }
    &:nth-child(5) {
        svg {
            transform: rotate(-20deg);
        }
    }
    &:nth-child(6) {
        svg {
            transform: rotate(-120deg);
        }
    }
`

export default CircleAnimation