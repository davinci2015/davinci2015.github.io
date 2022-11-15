import React from "react"
import { Link } from "gatsby"
import { Animation, Logo, Button } from ".."

import * as classes from "./style.module.css"

export const Header = () => (
  <header className={classes.Header}>
    <Animation className={classes.ContentWrapper} type="fadeDown">
      <Link to="/" aria-label="home">
        <Logo />
      </Link>
      <nav className={classes.TopNavigationBar}>
        <Link
          to="/blog"
          className={classes.NavLink}
          activeClassName={classes.NavLinkActive}
        >
          Blog
        </Link>
        <Button
          as="a"
          href="../../Resume.pdf"
          download="danijel_vincijanovic.pdf"
        >
          Resume
        </Button>
      </nav>
    </Animation>
  </header>
)
