import React from "react"

import * as classes from "./style.module.css"

interface LogoProps {
  fontSize?: string
  color?: string
}

export const Logo = (props: LogoProps) => {
  const fontSize = props.fontSize || "2rem"
  const color = props.color || "var(--primary-color)"

  return (
    <div
      className={classes.Logo}
      aria-roledescription="logo"
      style={{ fontSize, color }}
    >
      DV
    </div>
  )
}
