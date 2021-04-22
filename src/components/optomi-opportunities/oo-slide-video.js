import React from "react"
import styled from 'styled-components'

import SlideVideo from '../../videos/slide-two.mp4'

const OOSlideVideo = () => {
    return(
    <VideoContainer>
        <video
        className="video-player"
        height="100%"
        width="100%"
        loop
        muted
        autoPlay
        >
        <source
            src={SlideVideo}
            type="video/mp4"
        />
        </video>
    </VideoContainer>
    )
}

const VideoContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    video {   
        display: block;
        position: absolute;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        @media screen and (max-aspect-ratio: 1920/1080) {
            height: 100%;
        }
        @media screen and (min-aspect-ratio: 1920/1080) {
            width: 100%;
        }
        @media(max-width:800px) {
            display: none;
        }
    }
`

export default OOSlideVideo