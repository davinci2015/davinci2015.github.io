import React, { Fragment } from "react"

import { Divider } from "../Divider/Divider"

type Props = {
  items: Array<{ title: string; url: string }>
  type?: "book" | "article" | "website"
}

export const Resources = ({ items, type = "book" }: Props) => (
  <Fragment>
    <Divider />
    {type === "book" && <h3>📚 Books to check</h3>}
    {type === "article" && <h3>🔖 Articles to check</h3>}
    {type === "website" && <h3>🔖 Websites to check</h3>}

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
