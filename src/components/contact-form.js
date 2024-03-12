import React from "react"

const ContactForm = (props) => (
    <form name="Contact" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact" aria-label="Input" />
        <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" aria-label="Input" /></label>
        </p>
        <p>
            <label htmlFor="name">Name* <input type="text" name="name" placeholder="Enter your name" aria-label="Input" required/></label>   
        </p>
        <p>
            <label  htmlFor="state">
              State*
              <select name="state" required>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </label>
        </p>
        <p>
            <label htmlFor="email">Email* <input type="email" name="email" placeholder="Enter your email" aria-label="Input" required/></label>
        </p>
        <p>
            <label htmlFor="city">City* <input type="text" name="city" placeholder="Enter your city name" aria-label="Input" required/></label>   
        </p>
        <p>
            <label htmlFor="phone">Phone* <input type="text" name="phone" placeholder="Enter your phone number" aria-label="Input" required/></label>   
        </p>
        <p>
            <label htmlFor="company">Company <input type="text" name="company" placeholder="Enter your company name" aria-label="Input"/></label>   
        </p>
        <p class={"full"}>
            <label htmlFor="message">Message <textarea name="message" placeholder="Enter your message" aria-label="Input"></textarea></label>
        </p>
        <p class={"full checkbox"}>
            <input type="checkbox" name="user-agree" aria-label="Checkbox" />
            <label htmlFor="user-agree">With your submission, you grant us permission to store your personal information and use it in consideration of your inquiry. By checking this box, you acknowledge and agree to receive communications from us via phone, SMS, and email.</label>
        </p>
        <p class={"button"}>
            <button type="submit" name="submit" class={"submit"}  aria-label="Send">Send</button>
        </p>
    </form>
)

export default ContactForm