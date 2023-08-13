import React, { Fragment } from "react"

type Props = {
  items: Array<{ title: string; url: string }>
  type?: "books" | "articles"
}

export const Resources = ({ items, type = "books" }: Props) => (
  <Fragment>
    {type === "books" && <h3>📚 Books to check</h3>}
    {type === "articles" && <h3>🔖 Articles to check</h3>}

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
