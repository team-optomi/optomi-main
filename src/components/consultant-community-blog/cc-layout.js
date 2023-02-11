import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'
import PageTransition from 'gatsby-plugin-page-transitions';
import { Helmet } from 'react-helmet'

import CCHeaderLogo from "../../components/consultant-community-blog/cc-header-logo"
import CCSideMainMenu from "../../components/consultant-community-blog/cc-sidebar-menu"
import Footer from "../../components/footer"

class CCLayout extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }
    
    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const children = this.props.children
        let headerName = "mainLayout";
        if (this.state.isOpen) {
          headerName += ' mobileOpen';
        }
        return (
          <FullPage>
            <Helmet>
            <script type="text/javascript">
                  {`
                  window.hfAccountId = '3cb2782b-daac-4c20-8250-1a2778647f5e';
                  window.hfDomain = 'https://api.herefish.com';
                  (function() {
                      var hf = document.createElement('script'); 
                      hf.type = 'text/javascript'; 
                      hf.async = true;
                      hf.src = window.hfDomain + '/scripts/hf.js';
                      var s = document.getElementsByTagName('script')[0]; 
                      s.parentNode.insertBefore(hf, s);
                  })();
                  `}
                </script>
              </Helmet>
            <MainLayout className={headerName}>

                <PageTransition>
                <MainContent>
                    <HeaderMain>
                        <Link
                            to="/consultant-community-blog/"
                            >
                          <CCHeaderLogo/>
                        </Link>
                        <MenuGroup>
                          <DesktopMenu>
                          <MenuItem>
                                <Link
                                to="/consultant-community-blog/"
                                >
                                Blog Home
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                to="/consultant-community-blog/category/career-insights/"
                                >
                                Career Insights
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                to="/consultant-community-blog/category/consultant-contributions/"
                                >
                                Consultant Contributions
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                to="/consultant-community-blog/category/consultant-of-the-quarter/"
                                >
                                Consultant of the Quarter
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                to="/consultant-community-blog/category/it-trendsnews/"
                                >
                                IT Trends/News
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                to="/consultant-community-blog/category/podcasts/"
                                >
                                Podcasts
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                to="/consultant-community-blog/category/videos/"
                                >
                                Videos
                                </Link>
                            </MenuItem>
                          </DesktopMenu>
                          <MenuRight>
                              <button onClick={() => this.toggleMenu()} aria-label="Open">
                                  <p>menu</p>
                                  <Hamburger>
                                      <div></div>
                                      <div></div>
                                      <div></div>
                                      <div></div>
                                  </Hamburger>
                              </button> 
                          </MenuRight>
                        </MenuGroup>
                    </HeaderMain>

                    <main>{children}</main>
                    <Footer/>
                </MainContent>
                </PageTransition>

                <SidebarMenu>
                    <button onClick={() => this.toggleMenu()} aria-label="Close">X</button>
                    <CCSideMainMenu/>
                </SidebarMenu>

            </MainLayout>
        </FullPage>
        );
    }
}

const FullPage = styled.div`
    position: relative;
    overflow: hidden;
    background-color: #000;
`

const MainContent = styled.div`
    width: 100%;
    position: relative;
    top:0;
    left:0;
    transition-duration: .3s;
    main {
      background-color: #fff;
      padding-top: 100px;
    }
`

const SidebarMenu = styled.div`
    position: fixed;
    width: 270px;
    height: 100vh;
    top: 0;
    right: -270px;
    background-color: #1b1b1b;
    transition-duration: .3s;
    button {
      position: absolute;
      top: 29px;
      right: 25px;
      font-family: "Helvetica Thin";
      background: transparent;
      border: none;
      outline: 0 !important;
      color: #fff;
      font-size: 14px;
      font-weight: 700;
      transition-duration: .5s;
      &:hover {
        cursor: pointer;
        transform: rotate(180deg);
      }
    }
`

const HeaderMain = styled.div`
  position: absolute;
  margin: 0px auto;
  max-width: 100%;
  width: 100%;
  height: 100px;
  padding: 5px 40px;
  display: flex;
  background-color: #000;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  .gatsby-image-wrapper {
    width: 323px;
    height: 64px;
    img {
      margin-bottom: 0;
    }
    @media(max-width:420px) {
      width: 220px;
      height: 44px;
    }
  }
  @media(max-width:600px) {
    padding: 1.45rem 1.0875rem;
  }
`

const MainLayout = styled.div`
  &.mobileOpen {
    ${MainContent} {
      left: -270px;
    }
    ${SidebarMenu} {
      right: 0;
    }
  }
`

const MenuGroup = styled.div`
  display: flex;
  align-items: center;
`

const DesktopMenu = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  @media(max-width:1210px) {
    align-items: center;
  }
  @media(max-width:1140px) {
    display: none;
  }
`

const MenuItem = styled.li`
    margin: 0px;
    padding-right: 30px;
    letter-spacing: 1px;
    font-size: 16px;
    font-family: "Helvetica Thin";
    a {
        letter-spacing: 1px;
        font-size: 16px;
        color: #fff;
        text-decoration: none;
        transition-duration: .3s;
        &:hover {
            color: #61b1e8;
        }
    }
    @media(max-width:1500px) {
      font-size: 13px;
      a {
        font-size: 13px;
      }
    }
    @media(max-width:1400px) {
      font-size: 12px;
      padding-right: 15px;
      a {
        font-size: 12px;
      }
    }
    @media(max-width:1210px) {
      line-height: 1.1;
    }
`

const MenuRight = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  button {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    &:focus {
      outline: 0;
    }
    &:hover {
      cursor: pointer;
    }
  }
  p {
    font-family: "Helvetica Thin";
    font-size: 13px;
    line-height: 15px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
  }
`

const Hamburger = styled.div`
  width: 32px;
  height: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  div {
    width: 100%;
    height: 1px;
    background-color: #fff;
  }
`

CCLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CCLayout