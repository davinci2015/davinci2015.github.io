import React from "react"
import { Link } from "gatsby"

import { routes } from "../../routes/routes"

import * as classes from "./style.module.css"

const DynamicLink = (props: {
  url?: string
  slug?: string
  children: React.ReactElement
}) => {
  if (props.url) {
    return (
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    )
  }

  if (props.slug) {
    return <Link to={routes.blog(props.slug)}>{props.children}</Link>
  }

  return null
}

type Props = {
  title: string
  date: string
  readingTime: string
  image: string
  url?: string
  slug?: string
}

export const ArticleCard = ({
  title,
  date,
  readingTime,
  image,
  url,
  slug,
}: Props) => (
  <DynamicLink slug={slug} url={url}>
    <article className={classes.Article}>
      {image && (
        <picture className={classes.ImageWrapper}>
          <img className={classes.Image} src={image} alt={title} />
        </picture>
      )}
      <div className={classes.Description}>
        <h4>{title}</h4>
        <div>
          <p>
            {date} - <span>{readingTime} min read</span>
          </p>
        </div>
      </div>
    </article>
  </DynamicLink>
)
