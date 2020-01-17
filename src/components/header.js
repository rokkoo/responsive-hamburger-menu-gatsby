import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import { Header, MenuWrapper } from "./styles"

import Menu from "./menu"
import Burger from "./burger"

const HeaderComponent = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)

  return (
    <Header>
      <p>Baires-asesoría</p>
      <MenuWrapper>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </MenuWrapper>
    </Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default HeaderComponent
