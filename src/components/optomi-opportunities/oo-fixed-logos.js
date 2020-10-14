import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import OOHeaderLogo from "../../components/optomi-opportunities/oo-header-logo"

const OOFixedLogos = () => (
  <LogoCol>
    <Link
      to="/"
      >
      <OOHeaderLogo/>
    </Link>
  </LogoCol>
)

const LogoCol = styled.div`
  position: fixed;
  top: 20px;
  left: 5px;
  width: 276px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 101;
  .gatsby-image-wrapper {
    width: 276px;
    height: 90px;
    img {
      margin-bottom: 0;
    }
  }
  @media(max-width:768px) {
    display: none;
  }
`

export default OOFixedLogos