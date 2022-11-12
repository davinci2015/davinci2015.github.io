import React from "react"

import * as classes from "./style.module.css"

interface SectionProps {
  anchor: string
  heading?: string
  children: React.ReactNode
}

export const Section = (props: SectionProps) => (
  <section id={props.anchor} className={classes.Section}>
    <div className={classes.ContentWrapper}>
      {props.heading && <h3 className={classes.Heading}>{props.heading}</h3>}
      {props.children}
    </div>
  </section>
)
