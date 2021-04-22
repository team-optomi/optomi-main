import React from "react"
import styled from 'styled-components'

const OOContactForm = (props) => (
    <OONewsletter id="oo_newsletter">
        <h2>Newsletter</h2>
        <form name="Newsletter" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
            <input type="hidden" name="form-name" value="Newsletter" aria-label="Input" />
            <p class="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" aria-label="Input" /></label>
            </p>
            <p>
                <label htmlFor="first-name"><input type="text" name="first-name" placeholder="First Name" aria-label="Input" required/></label>   
            </p>
            <p>
                <label htmlFor="last-name"><input type="text" name="last-name" placeholder="Last Name" aria-label="Input" required/></label>   
            </p>
            <p>
                <label htmlFor="email"><input type="email" name="email" placeholder="Enter your email" aria-label="Input" required/></label>
            </p>
            <p class={"button"}>
                <button type="submit" name="submit" class={"submit"}  aria-label="Send">Sign Up</button>
            </p>
        </form>
    </OONewsletter>
)

const OONewsletter = styled.div`
    max-width: 1140px;
    width: 100%;
    padding: 20px;
    margin: 0 auto;
    @media(max-width:620px) {
        max-width: 540px;
    }
    h2 {
        color: #ffffff;
        font-family: 'Raleway',sans-serif;
        font-size: 30px;
        line-height: 35px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0px;
        text-transform: uppercase;
        text-align: center;
    }
    .hidden {
        opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            height: 0;
            width: 0;
            z-index: -1;
    }
    form {
        display: flex;
        flex-wrap: wrap;
        p {
            width: 33.33%;
            padding: 0 10px;
            @media(max-width:620px) {
                width: 100%;
                margin-bottom: 20px;
            }
            input {
                width: 100%;
                padding: 15px;
                border: 0;
                outline: 0;
                resize: none;
                font-size: 13px;
                line-height: 17px;
                background-color: #fff;
                color: #818181;
                font-family: 'Raleway';
                font-weight: 400;
            }
            &.button {
                width: 100%;
                text-align: center;
                button {
                    color: #ffffff;
                    font-family: 'Raleway', sans-serif;
                    font-size: 11px;
                    line-height: 45px;
                    height: 45px;
                    font-style: normal;
                    font-weight: 700;
                    background-color: #00aeef;
                    border-radius: 1px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    border-width: 0px;
                    padding: 0 20px;
                    transition-duration: .3s;
                    &:hover {
                        cursor: pointer;
                        background-color: #454f73;
                    }
                }
            }
        }
    }
`

export default OOContactForm