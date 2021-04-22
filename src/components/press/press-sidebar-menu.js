import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const PressSideMainMenu = () => (
    <MainMenu>
        <MenuItem>
            <Link
            to="/"
            >
            Home
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/service-offerings/"
            >
            Service Offerings
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
            to="/about-us/"
            >
            About Us
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/candidates/"
            >
            For Candidates
            </Link>
        </MenuItem>
        <MenuItem>
            <a href="https://jobs.optomi.com/jobs/#/jobs" target="_blank" rel="noopener noreferrer" aria-label="Link">Job Portal</a>
        </MenuItem>
        <MenuItem>
            <Link
            to="/clients/"
            >
            For Clients
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/case-studies/"
            >
            Case Studies
            </Link>
        </MenuItem>
        <MenuItem>
            <a href="https://opportunities.optomi.com/#qode-company-life" target="_blank" rel="noopener noreferrer" aria-label="Link">Join our Team</a>
        </MenuItem>
        <MenuItem>
            <Link
            to="/core-values/"
            >
            Core Values
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/giving/"
            >
            Giving Back
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
                to="/press/"
                >
                Press
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/blog/"
            >
            Blog
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/locations/"
            >
            Locations
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

export default PressSideMainMenu