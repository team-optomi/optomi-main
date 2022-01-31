import React from "react"
import styled from 'styled-components'

import BlogLayout from "../../../components/blog-layout"
import SEO from "../../../components/seo"

const JobFormPage = () => (
    
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
                    <label htmlFor="name">Name* <input type="text" name="name" placeholder="Enter your name" aria-label="Input" required/></label>   
                </p>
                <p>
                    <label htmlFor="phone">Phone* <input type="text" name="phone" placeholder="Enter your phone number" aria-label="Input" required/></label>   
                </p>
                <p>
                    <label htmlFor="email">Email* <input type="email" name="email" placeholder="Enter your email" aria-label="Input" required/></label>
                </p>
                <p>
                    <label  htmlFor="Location">
                    Location*
                    <select id="Location" name="Location" required>
                        <option value="">Select Option</option>
                        <option value="job-opening-atlanta">Atlanta</option>
                    </select>
                    </label>
                </p>
                <p>
                    <label  htmlFor="Position">
                    Position*
                    <select id="Position" name="Position" required>
                        <option value="">Select Option</option>
                        <option value="Technical Recruiter">Technical Recruiter</option>
                    </select>
                    </label>
                </p>
                <p class={"full"}>
                    <label htmlFor="message">Message <textarea name="message" placeholder="Enter your message" aria-label="Input"></textarea></label>
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
)

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

const JobForm = styled.section``

export default JobFormPage