import React, { useState, useEffect } from "react"
import { FaBars, Fatimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
} from "./NavbarElements"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  useEffect(
    () => () => {
      window.removeEventListener("scroll")
    },
    []
  )

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Explorer
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <Fatimes /> : <FaBars />}
            </MobileIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
