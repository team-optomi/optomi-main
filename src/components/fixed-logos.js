import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import HeaderLogo from "../components/header-logo"

const FixedLogos = () => (
  <LogoCol>
    <Link
      to="/"
      >
      <HeaderLogo/>
    </Link>
  </LogoCol>
)

const LogoCol = styled.div`
  position: fixed;
  top: 20px;
  left: 5px;
  width: 110px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 101;
  .gatsby-image-wrapper {
    width: 90px;
    height: 34px;
    img {
      margin-bottom: 0;
    }
  }
  @media(max-width:768px) {
    display: none;
  }
`

export default FixedLogos