import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import shuffle from "lodash.shuffle"

import { Animation, ArticleCard, Section } from "../../components"

import * as classes from "./style.module.css"

const externalArticles = [
  {
    url: "https://medium.com/cobe-mobile/santa-react-patterns-giveaway-4th-week-f9e6a9b03140",
    image: "https://miro.medium.com/max/1400/1*jOt_9V1NNccwQcdt-3D6ig.webp",
    title: "Santa React patterns giveaway — 4th week",
    date: "Dec 31, 2018",
    readingTime: "4",
  },
  {
    url: "https://medium.com/cobe-mobile/santa-react-patterns-giveaway-3rd-week-161a945117a3",
    image: "https://miro.medium.com/max/1400/1*EBb-wTwcoq23mRDlnH-b4Q.png",
    title: "Santa React patterns giveaway — 3rd week",
    date: "Dec 27, 2018",
    readingTime: "4",
  },
  {
    url: "https://medium.cobeisfresh.com/santa-react-patterns-giveaway-2nd-week-b7d09b9f7c01",
    image: "https://miro.medium.com/max/1400/1*lulgCu8aqWw3-Qp3fMuvTw.webp",
    title: "Santa React patterns giveaway — 2nd week",
    date: "Dec 21, 2018",
    readingTime: "5",
  },
  {
    url: "https://medium.cobeisfresh.com/santa-react-patterns-giveaway-bc5bab7c2b9b",
    image: "https://miro.medium.com/max/1400/1*ylRrUig8T8KHdF3jda-q_Q.png",
    title: "Santa React patterns giveaway",
    date: "Dec 10, 2018",
    readingTime: "3",
  },
  {
    url: "https://medium.com/cobe-mobile/level-up-your-react-architecture-with-mvvm-a471979e3f21",
    image: "https://miro.medium.com/max/1400/1*n9fsWpNZiynQBBkvYo56uA.webp",
    title: "Level up your React architecture with MVVM",
    date: "Aug 30, 2018",
    readingTime: "7",
  },
  {
    url: "https://medium.cobeisfresh.com/how-redux-can-make-you-a-better-developer-30a094d5e3ec",
    image: "https://miro.medium.com/max/1400/1*_yEFccUeSpixbI5Q62Ha3Q.jpeg",
    title: "How Redux Can Make You a Better Developer",
    date: "Nov 8, 2017",
    readingTime: "9",
  },
  {
    url: "https://medium.cobeisfresh.com/how-to-win-a-hackathon-tips-tricks-8cd391e18705",
    image: "https://miro.medium.com/max/1400/1*DjNc34ccCSbbj-qtxW9jHw.webp",
    title: "How to Win a Hackathon — Tips & Tricks",
    date: "Apr 13, 2017",
    readingTime: "10",
  },
]

type Props = {
  title?: string
  maxArticlesToShow?: number
  shuffleArticles?: boolean
  blacklistedSlugs?: string[]
}

export const Blog = ({
  title,
  maxArticlesToShow,
  blacklistedSlugs = [],
  shuffleArticles,
}: Props) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        nodes {
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            slug
            readingTime
            date
          }
        }
      }
    }
  `)

  const articles = data.allMdx.nodes
  const allArticles = [
    ...articles.filter(
      article => !blacklistedSlugs.includes(article.frontmatter.slug)
    ),
    ...externalArticles,
  ]

  const articlesToRender = (
    shuffleArticles ? shuffle(allArticles) : allArticles
  )
    .sort((a, b) => {
      const firstDate = new Date(a.frontmatter?.date || a.date).valueOf()
      const secondDate = new Date(b.frontmatter?.date || b.date).valueOf()
      return secondDate - firstDate
    })
    .slice(0, maxArticlesToShow)

  return (
    <Animation type="fadeUp" delay={300}>
      <Section anchor="blog">
        <div className={classes.Blog}>
          {title && <h2 className={classes.Title}>{title}</h2>}
          <div className={classes.Articles}>
            {articlesToRender.map(article => (
              <div key={article.url || article.frontmatter?.slug}>
                <ArticleCard
                  slug={article.frontmatter?.slug}
                  url={article.url}
                  image={article.frontmatter?.image || article.image}
                  title={article.frontmatter?.title || article.title}
                  date={article.frontmatter?.date || article.date}
                  readingTime={
                    article.frontmatter?.readingTime || article.readingTime
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Animation>
  )
}
