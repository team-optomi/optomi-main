import React from "react"
import styled from 'styled-components'

import BlogLayout from "../../../components/blog-layout"
import SEO from "../../../components/seo"

const JobFormPage = ({ location }) => {

    const queryParams = new URLSearchParams(location.search);
    const loc = queryParams.get('Location');
    const pos = queryParams.get('Position');

    return(
        <BlogLayout>
            <SEO 
            title={"Apply Now"} 
            description={"Need Description"}
            />
            <TopBanner>   
                <div class="top-content">
                    <h1>Apply Now</h1>
                    <hr/>
                </div>
            </TopBanner>
            <JobForm>
                <form id="apply_form" name="Application Form" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
                    <input type="hidden" name="form-name" value="Application Form" aria-label="Input" />
                    <p class="hidden">
                        <label>Don’t fill this out if you're human: <input name="bot-field" aria-label="Input" /></label>
                    </p>
                    <p>
                        <input type="text" name="name" placeholder="Enter your name*" aria-label="Input" required/> 
                    </p>
                    <p>
                        <input type="text" name="phone" placeholder="Enter your phone number*" aria-label="Input" required/>   
                    </p>
                    <p>
                        <input type="email" name="email" placeholder="Enter your email*" aria-label="Input" required/>
                    </p>
                    <p>
                        <input type="text" name="linkedin" placeholder="Enter your LinkedIn Profile url*" aria-label="Input" required/>
                    </p>
                    <p class="hidden">
                        <label htmlFor="Location">Location <input value={loc} type="text" name="Location" aria-label="Input" required/></label>
                    </p>
                    <p class="hidden">
                        <label htmlFor="Position">Position <input value={pos} type="text" name="Position" aria-label="Input" required/></label>
                    </p>
                    <p class={"full"}>
                        <textarea name="message" placeholder="Add a message*" aria-label="Input" required></textarea>
                    </p>
                    <p>
                        <label htmlFor="resume">Upload Resume <input type="file" name="resume" size="40" accept=".pdf,.doc,.docx" aria-label="Input" /></label>   
                    </p>
                    <p class={"button"}>
                        <button type="submit" name="submit" class={"submit"}  aria-label="Send">Send</button>
                    </p>
                </form>
            </JobForm>
        </BlogLayout>
    );
    
}

const TopBanner = styled.div`
    background-color: #000;
    padding-top: 40px;
    .top-content {
        h1 {
            font-family: "Helvetica Thin";
            font-weight: 100;
            color: #fff;
            font-size: 24px;
            line-height: 1.3;
            margin-bottom: 0px;
            text-align: center;
            text-transform: uppercase;
        }
        hr {
            background-color: #fff;
            max-width: 50px;
            margin: 0px auto;
            margin-top: 10px;
        }
    }
`

const JobForm = styled.section`
    background-color: #000;
    padding: 50px 20px;
    form {
        max-width: 400px;
        width: 100%;
        margin: 0 auto;
        input,
        textarea {
            width: 100%;
            padding: 8px 20px;
            font-family: "Helvetica Thin";
            font-weight: 100;
            color: #666;
            font-size: 18px;
            line-height: 1.3;
            border: none;
            border-radius: 5px;
            &:focus {
                outline: none;
            }
            &[type="file"] {
                padding-left: 0px;
            }
        }
        label {
            font-family: "Helvetica Thin";
            font-weight: 100;
            color: #666;
            font-size: 18px;
            line-height: 1.3;
        }
        p.button {
            text-align: center;
            button {
                display: inline-block;
                max-width: 180px;
                width: 100%;
                margin: 0 auto;
                text-align: center;
                color: #000;
                background-color: #fff;
                border: 2px solid #fff;
                padding: 10px 20px;
                border-radius: 30px;
                transition-duration: .3s;
                &:hover {
                    cursor: pointer;
                    color: #fff;
                    background-color: transparent;
                }
            }
        }
        p.hidden {
            opacity: 0;
            position: absolute;
            top: 0px;
            left: 0px;
            height: 0px;
            width: 0px;
            z-index: -1;
        }
    }
`

export default JobFormPage