import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const OOSideMainMenu = () => (
    <MainMenu>
        <MenuItem>
            <Link
            to="/"
            >
            Optomi Home
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/differentiators/"
            >
            Differentiators
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/service-offerings/"
            >
            Services
            </Link>
        </MenuItem>
        <MenuItem>
            <a href="https://jobs.optomi.com/jobs/#/jobs" target="_blank" rel="noopener noreferrer" aria-label="Link">Job Seekers</a>
        </MenuItem>
        <MenuItem>
            <Link
            to="/about-us/"
            >
            About
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/optomi-opportunities/awards"
            >
            Awards
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/giving/"
            >
            Giving
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/contact/"
            >
            Contact
            </Link>
        </MenuItem>
    </MainMenu>
  )

const MainMenu = styled.ul`
    list-style: none;
    padding: 30px;
    margin: 0;
`

const MenuItem = styled.li`
    margin: 0 0 10px;
    letter-spacing: 1px;
    font-size: 18px;
    font-family: "Helvetica Thin";
    a {
        letter-spacing: 1px;
        font-size: 18px;
        color: #61b1e8;
        text-decoration: none;
        transition-duration: .3s;
        &:hover {
            color: #fff;
        }
    }
`

export default OOSideMainMenu