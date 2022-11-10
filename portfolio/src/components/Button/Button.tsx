import React from "react"

import * as classes from "./style.module.css"

type CommonProps = {
  children: React.ReactElement | string
  as: "button" | "a"
}

type Props = CommonProps &
  (
    | {
        as: "button"
        onClick: VoidFunction
      }
    | {
        as: "a"
        href: string
      }
  )

export const Button = (props: Props) => {
  if (props.as === "button") {
    return (
      <button className={classes.Button} onClick={props.onClick}>
        {props.children}
      </button>
    )
  }

  if (props.as === "a") {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.Button}
      >
        {props.children}
      </a>
    )
  }

  return null
}
