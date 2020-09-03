import React from "react"
import styled from 'styled-components'
import SlickSlider from './case-study-slider'

const CaseStudies = () => (
    <CaseStudiesMain>
        <MainRow>
            <h2
            data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            >Case Studies</h2>
            <SlickSlider/>
        </MainRow>
    </CaseStudiesMain>
)

const CaseStudiesMain = styled.div`
    padding-top: 80px;
    padding-bottom: 180px;
    width: 100%;
    background-color: #fff;
    position: relative;
    z-index: 1;
    @media(max-width:840px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`

const MainRow = styled.div`
    max-width: 1340px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    h2 {
        font-family: "Helvetica Thin";
        font-size: 60px;
        color: #000;
        font-weight: 100;
        line-height: 1.2;
        letter-spacing: 1px;
        margin-bottom: 50px;
        text-transform: uppercase;
    }
    &:before {
        content: '';
        height: 100%;
        width: 1000px;
        background-color: #fff;
        position: absolute;
        left: -980px;
        top: 0;
        z-index: 2;
    }
    @media(max-width:1550px) {
        max-width: 1140px;
    }
    @media(max-width:1330px) {
        max-width: 940px;
        h2 {
            font-size: 42px;
        }
    }
    @media(max-width:1150px) {
        max-width: 740px;
        h2 {
            text-align: center;
        }
    }
`

export default CaseStudies