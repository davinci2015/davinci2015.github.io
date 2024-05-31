import React from "react"
import { Link } from "gatsby"
import { useMixpanel } from "gatsby-plugin-mixpanel"

import { Logo } from ".."

import * as classes from "./style.module.css"

export const Header = () => {
  const mixpanel = useMixpanel()

  return (
    <header className={classes.Header}>
      <div className={classes.ContentWrapper}>
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
          <a
            onClick={() => mixpanel.track("Download resume")}
            className={classes.NavLink}
            href="../../Resume.pdf"
            download="danijel_vincijanovic.pdf"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
