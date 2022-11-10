import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Animation, ArticleCard, Section } from "../../components"

import * as classes from "./style.module.css"

export const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      allMdx {
        nodes {
          frontmatter {
            slug
            title
            date
            readingTime
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  const articles = data.allMdx.nodes

  return (
    <Animation type="fadeUp" delay={400}>
      <Section anchor="blog">
        <div className={classes.Blog}>
          <h1 className={classes.Title}>Latest Articles</h1>
          <div className={classes.Articles}>
            {articles.map(article => (
              <div key={article.frontmatter.slug} className={classes.Article}>
                <ArticleCard
                  slug={article.frontmatter.slug}
                  image={article.frontmatter.image}
                  title={article.frontmatter.title}
                  date={article.frontmatter.date}
                  readingTime={article.frontmatter.readingTime}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Animation>
  )
}
