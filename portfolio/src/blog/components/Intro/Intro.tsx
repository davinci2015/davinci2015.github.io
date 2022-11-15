import React from "react"

import * as classes from "./style.module.css"

type Props = {
  title: string
  readingTime: string
  date: string
}

export const Intro = ({ title, readingTime, date }: Props) => (
  <div className={classes.Container}>
    <h1>{title}</h1>
    <span>
      {new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        year: "numeric",
        month: "long",
      })}{" "}
      — {readingTime} min read
    </span>
  </div>
)
