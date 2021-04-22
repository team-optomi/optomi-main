import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const CCSideMainMenu = () => (
    <MainMenu>
        <MenuItem className={"desktop-menu"}>
            <Link
            to="/"
            >
            Home
            </Link>
        </MenuItem>
        <MenuItem className={"desktop-menu"}>
            <Link
            to="/service-offerings/"
            >
            Service Offerings
            </Link>
        </MenuItem>
        <MenuItem className={"desktop-menu"}>
            <Link
            to="/differentiators/"
            >
            Differentiators
            </Link>
        </MenuItem>
        <MenuItem className={"desktop-menu"}>
            <Link
            to="/about-us/"
            >
            About Us
            </Link>
        </MenuItem>
        <MenuItem className={"desktop-menu"}>
            <Link
            to="/candidates/"
            >
            For Candidates
            </Link>
        </MenuItem>
        <MenuItem className={"desktop-menu"}>
            <a href="https://jobs.optomi.com/jobs/#/jobs" target="_blank" rel="noopener noreferrer" aria-label="Link">Job Portal</a>
        </MenuItem>
        <MenuItem className={"desktop-menu"}>
            <Link
            to="/clients/"
            >
            For Clients
            </Link>
        </MenuItem>
        <MenuItem className={"desktop-menu"}>
            <Link
            to="/case-studies/"
            >
            Case Studies
            </Link>
        </MenuItem>
        <MenuItem className={"desktop-menu"}>
            <a href="https://opportunities.optomi.com/#qode-company-life" target="_blank" rel="noopener noreferrer" aria-label="Link">Join our Team</a>
        </MenuItem>
        <MenuItem className={"desktop-menu"}>
            <Link
            to="/core-values/"
            >
            Core Values
            </Link>
        </MenuItem>
        <MenuItem className={"desktop-menu"}>
            <Link
            to="/giving/"
            >
            Giving Back
            </Link>
        </MenuItem>
        <MenuItem className={"desktop-menu"}>
            <a href="https://press.optomi.com/" target="_blank" rel="noopener noreferrer" aria-label="Link">Press</a>
        </MenuItem>
        <MenuItem className={"desktop-menu"}>
            <Link
            to="/blog/"
            >
            Blog
            </Link>
        </MenuItem>
        <MenuItem className={"desktop-menu"}>
            <Link
            to="/locations/"
            >
            Locations
            </Link>
        </MenuItem>
        <MenuItem className={"desktop-menu"}>
            <Link
            to="/contact/"
            >
            Contact
            </Link>
        </MenuItem>


        <MenuItem className={"mobile-menu"}>
            <Link
            to="/"
            >
            Optomi Home
            </Link>
        </MenuItem>
        <MenuItem className={"mobile-menu"}>
            <Link
            to="/consultant-community-blog/"
            >
            Blog Home
            </Link>
        </MenuItem>
        <MenuItem className={"mobile-menu"}>
            <Link
            to="/consultant-community-blog/category/career-insights/"
            >
            Career Insights
            </Link>
        </MenuItem>
        <MenuItem className={"mobile-menu"}>
            <Link
            to="/consultant-community-blog/category/consultant-contributions/"
            >
            Consultant Contributions
            </Link>
        </MenuItem>
        <MenuItem className={"mobile-menu"}>
            <Link
            to="/consultant-community-blog/category/consultant-of-the-quarter/"
            >
            Consultant of the Quarter
            </Link>
        </MenuItem>
        <MenuItem className={"mobile-menu"}>
            <Link
            to="/consultant-community-blog/category/it-trendsnews/"
            >
            IT Trends/News
            </Link>
        </MenuItem>
        <MenuItem className={"mobile-menu"}>
            <Link
            to="/consultant-community-blog/category/podcasts/"
            >
            Podcasts
            </Link>
        </MenuItem>
        <MenuItem className={"mobile-menu"}>
            <Link
            to="/consultant-community-blog/category/videos/"
            >
            Videos
            </Link>
        </MenuItem>
    </MainMenu>
  )

const MainMenu = styled.ul`
    list-style: none;
    padding: 30px;
    margin: 0;
    .mobile-menu {
        display: none;
    }
    @media(max-width:1140px) {
        .desktop-menu {
            display: none;
        }
        .mobile-menu {
            display: block;
        }
    }
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

export default CCSideMainMenu