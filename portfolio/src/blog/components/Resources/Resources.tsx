import React, { Fragment } from "react"

import * as classes from "./style.module.css"

type Props = {
  items: Array<{ title: string; url: string }>
  type?: "books" | "articles"
}

export const Resources = ({ items, type = "books" }: Props) => (
  <Fragment>
    <p className={classes.description}>📚 {type} to check</p>

    <ul>
      {items.map(item => (
        <li>
          <a href={item.url} target="_blank">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </Fragment>
)
