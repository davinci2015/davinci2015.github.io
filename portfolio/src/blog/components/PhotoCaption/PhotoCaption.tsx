import React from "react"

import * as classes from "./style.module.css"

type Props = {
  children: React.ReactElement
}

export const PhotoCaption = ({ children }: Props) => (
  <div className={classes.Container}>
    <em className={classes.Caption}>{children}</em>
  </div>
)
