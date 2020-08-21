import React, { Component } from "react"
import styled from 'styled-components'
import { TimelineLite } from 'gsap';

class SkillLine extends Component {

    constructor(props){
		super(props);
		// logo container
		this.logoContainer = null;
		// logo tween
		this.logoTween = null;
	}


	componentDidMount(){
		// create logo tween
		this.logoTween = new TimelineLite({ paused:true })
			.to(this.logoContainer, 2, { x: 500 })
			.to(this.logoContainer, 1, { rotation: 360, transformOrigin: "center" });
	}

    render() {

        return (
            <MainContainer>

                <div className="mb-2 btn-group">
                    <button
                        className="btn gsap-btn"
                        onClick={() => this.logoTween.play()}
                    >Play</button>
                    <button
                        className="btn gsap-btn"
                        onClick={() => this.logoTween.pause()}
                    >Pause</button>
                    <button
                        className="btn gsap-btn"
                        onClick={() => this.logoTween.reverse()}
                    >Reverse</button>
                    <button
                        className="btn gsap-btn"
                        onClick={() => this.logoTween.restart()}
                    >Restart</button>
                </div>

                <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
                    alt=""
                    className="img-fluid logo"
                    ref={ img => this.logoContainer = img }
                />
                
                <LineContainer>
                    <svg viewBox="0 0 1000 50" id="line_box">
                        <path
                        style={{ fill: 'none', stroke: '#000000', strokeWidth: '30', }}
                        d="M 0,10 H 1000"
                        id="skill_line" />
                    </svg>
                </LineContainer> 

            </MainContainer>
        );

    }

}

const MainContainer = styled.div`
    max-width: 1340px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
    margin: 0 auto;
`

const TestBox = styled.div`
    height: 100px;
    width: 100px;
    background-color: blue;
`

const LineContainer = styled.div`
    width: 80%;
    svg {
        path {
            width: 100%;
        }
    }
`

export default SkillLine