import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const SideMainMenu = () => (
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
            <a href="https://www.linkedin.com/jobs/search/?currentJobId=3431703545&f_C=2684081&geoId=92000000" target="_blank" rel="noopener noreferrer" aria-label="Link">Job Portal</a>
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
            <Link
            to="/join-our-team/"
            >
            Join Our Team
            </Link>
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
        <MenuItem>
            <a href="https://thetgbfoundation.org/" target="_blank" rel="noopener noreferrer" aria-label="Link">TGB Foundation</a>
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

export default SideMainMenu