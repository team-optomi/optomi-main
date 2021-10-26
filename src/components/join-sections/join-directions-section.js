import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const JoinDirectionsSection = () => {

    return(
        <MainSection>
            <h2>How Close Are <span>We?</span></h2>
            <div class="form-section">
                <form action="https://maps.google.com/maps" method="get" target="iframe_a">
                    <div class="flex-row">
                    <p>Your Location:</p>
                    <input class="start-address" type="text" name="saddr" />
                    <p>Optomi Market:</p>
                    <select class="destination" name="daddr">
                        <option value="1 Glenlake Pkwy NE #1250, Atlanta, GA">Atlanta</option>
                        <option value="1 Mid America Plaza, Oakbrook Terrace, IL">Chicago</option>
                        <option value="200 South Tryon, 200 S Tryon St #750, Charlotte, NC">Charlotte</option>
                        <option value="7160 Dallas Pkwy, Plano, TX">Dallas</option>
                        <option value="921 E Fort Ave, Baltimore, MD">Baltimore</option>
                        <option value="17199 N Laurel Park Dr, Livonia, MI">Detroit</option>
                    </select>
                    <input class="button" type="submit" value="Go!" />
                    </div>
                </form>
                <div class="iframe-section">
                    <iframe src="https://maps.google.com/maps" name="iframe_a" height="400px" width="100%" title="Iframe Directions"></iframe>
                </div>
            </div>
            <div class="bottom-button">
                <a href="https://www.linkedin.com/jobs/search/?f_C=2684081&geoId=92000000" target="_blank">Job Opportunities</a>
            </div>
        </MainSection>
    )

}

const MainSection = styled.section`
    h2 {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 40px;
        letter-spacing: 2px;
        font-weight: 100;
        color: rgb(255,255,255);
        line-height: 1.3;
        margin-bottom: 20px;
        padding: 0 20px;
        text-align: center;
        span {
            font-family: BonVivant;
            font-weight: 100;
            font-size: 100px;
            position: relative;
            left: 0px;
            top: 20px;
        }
    }
    .form-section {
        position: relative;
        z-index: 1;
        max-width: 1040px;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
        .flex-row {
            display: flex;
            justify-content: center;
            align-items: center;
            p {
                font-family: "Helvetica Thin";
                width: 100%;
                z-index: 1;
                font-size: 24px;
                letter-spacing: 1px;
                margin-bottom: 0;
                max-width: 210px;
                color: rgb(255, 255, 255);
                line-height: 1.3;
                text-transform: uppercase;
            }
            input.start-address {
                padding: 5px 15px;
                margin-right: 20px;
                border: none;
                border-radius: 10px;
                color: #888;
                max-width: 320px;
                width: 100%;
                font-size: 18px;
                line-height: 1.5;
            }
            select.destination {
                padding: 5px 15px;
                margin-right: 20px;
                border: none;
                border-radius: 10px;
                color: #888;
                max-width: 200px;
                width: 100%;
                font-size: 18px;
                line-height: 1.5;
            }
            input.button {
                background-color: #69b1e2;
                color: #fff;
                padding: 15px 10px;
                border: 1px solid #fff;
                border-radius: 25px;
                font-family: "Helvetica Thin";
                text-transform: uppercase;
                font-size: 24px;
                letter-spacing: 1px;
                &:hover {
                    cursor: pointer;
                }
            }
        }
        iframe-section {
            max-width: 840px;
            width: 100%;
            padding: 20px;
            margin: 0 auto;
        }
    }
    .bottom-button {
        max-width: 1240px;
        width: 100%;
        padding: 20px;
        margin: 0 auto;
        margin-bottom: 50px;
        text-align: center;
        a {
            font-family: "Helvetica Thin";
            display: inline-block;
            font-size: 14px;
            background-color: #00385c;
            color: #fff;
            border: 2px solid #fff;
            padding: 8px 20px;
            border-radius: 10px;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    }
`

export default JoinDirectionsSection