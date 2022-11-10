import React from "react"
import { Link } from "gatsby"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { Animation, Logo, Button } from ".."

import * as classes from "./style.module.css"

export function Header(): React.ReactElement {
  const [open, setOpen] = React.useState<boolean>(false)
  const isDesktopBreakpoint = useMediaQuery("(min-width: 992px)")

  const navigationItems = (
    <>
      <Link
        to={""}
        className={classes.NavLink}
        onClick={!isDesktopBreakpoint ? () => setOpen(!open) : undefined}
      >
        Link
      </Link>
      <Button as="a" href="">
        Resume
      </Button>
    </>
  )

  const sideNavigationBar = (
    <>
      <div className={classes.Burger} onClick={() => setOpen(!open)}>
        <div style={open ? { transform: "rotate(45deg)" } : undefined} />
        <div
          style={
            open ? { transform: "translateX(20px)", opacity: 0 } : undefined
          }
        />
        <div style={open ? { transform: "rotate(-45deg)" } : undefined} />
      </div>
      <div
        className={classes.SideBarWrapper}
        style={
          open
            ? { transform: "translateX(0)", visibility: "visible" }
            : undefined
        }
        aria-hidden={!open}
        tabIndex={open ? 1 : -1}
      >
        <nav className={classes.SideNavigationBar}>{navigationItems}</nav>
      </div>
      <div
        className={classes.SideBarBackdrop}
        style={open ? { display: "block" } : undefined}
      />
    </>
  )

  const topNavigationBar = (
    <nav className={classes.TopNavigationBar}>{navigationItems}</nav>
  )

  return (
    <header className={classes.Header}>
      <Animation className={classes.ContentWrapper} type="fadeDown">
        <Link to="/" aria-label="home">
          <Logo />
        </Link>
        {isDesktopBreakpoint ? topNavigationBar : sideNavigationBar}
      </Animation>
    </header>
  )
}
