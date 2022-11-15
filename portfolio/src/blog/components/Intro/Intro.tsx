import React from "react"

import * as classes from "./style.module.css"
import { formatDate } from "../../../utils/utils"

type Props = {
  title: string
  readingTime: string
  date: string
}

export const Intro = ({ title, readingTime, date }: Props) => (
  <div className={classes.Container}>
    <h1>{title}</h1>
    <span>
      {formatDate(date)} — {readingTime} min read
    </span>
  </div>
)
