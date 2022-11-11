import React from "react"

import { Animation, ArticleCard, Section } from "../../components"

import * as classes from "./style.module.css"

const externalArticles = [
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

export const Blog = () => {
  /*
  Once we start migrating to blog inside the website we can use this query:
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
  */

  return (
    <Animation type="fadeUp" delay={400}>
      <Section anchor="blog">
        <div className={classes.Blog}>
          <h1 className={classes.Title}>Latest Articles</h1>
          <div className={classes.Articles}>
            {externalArticles.map(article => (
              <div key={article.url} className={classes.Article}>
                <ArticleCard
                  url={article.url}
                  image={article.image}
                  title={article.title}
                  date={article.date}
                  readingTime={article.readingTime}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Animation>
  )
}
