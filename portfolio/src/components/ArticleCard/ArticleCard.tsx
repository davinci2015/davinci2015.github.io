import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"

import * as classes from "./style.module.css"
import { routes } from "../../routes/routes"

type Props = {
  title: string
  date: string
  readingTime: string
  slug: string
  image: ImageDataLike
}

export const ArticleCard = ({
  title,
  date,
  readingTime,
  slug,
  image,
}: Props) => {
  const imageSrc = getImage(image)

  return (
    <Link to={routes.blog(slug)}>
      <article className={classes.Article}>
        {imageSrc && (
          <picture>
            <GatsbyImage
              className={classes.ImageWrapper}
              image={imageSrc}
              alt={title}
            />
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
    </Link>
  )
}
