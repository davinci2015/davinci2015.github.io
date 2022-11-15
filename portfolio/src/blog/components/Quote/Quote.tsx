import React from "react"

import * as classes from "./style.module.css"

type Props = {
  children: React.ReactElement
  source?: string
  sourceUrl?: string
}

export const Quote = ({ children, source, sourceUrl }: Props) => (
  <div className={classes.Container}>
    <em className={classes.Caption}>{children}</em>
    {source && sourceUrl && (
      <a href={sourceUrl} target="_blank" className={classes.Link}>
        {source}
      </a>
    )}
  </div>
)
