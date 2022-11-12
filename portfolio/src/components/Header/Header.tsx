import React from "react"
import { Link } from "gatsby"
import { Animation, Logo, Button } from ".."

import * as classes from "./style.module.css"

export function Header(): React.ReactElement {
  const navigationItems = (
    <>
      <Button
        as="a"
        href="../../Resume.pdf"
        download="danijel_vincijanovic.pdf"
      >
        Resume
      </Button>
    </>
  )

  return (
    <header className={classes.Header}>
      <Animation className={classes.ContentWrapper} type="fadeDown">
        <Link to="/" aria-label="home">
          <Logo />
        </Link>
        <nav className={classes.TopNavigationBar}>{navigationItems}</nav>
      </Animation>
    </header>
  )
}
