import React from "react"

import * as classes from "./style.module.css"

type Props = {
  children: React.ReactElement
}

export const PhotoCaption = (props: any) => (
  <div className={classes.Container}>
    <em className={classes.Caption}>{props.children}</em>
  </div>
)
