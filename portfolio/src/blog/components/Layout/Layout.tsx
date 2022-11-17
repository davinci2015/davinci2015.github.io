import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { Pre, PhotoCaption, Quote, Intro } from ".."
import { Header } from "../../../components"
import { Blog } from "../../../sections"

import * as classes from "./style.module.css"

type Props = {
  children: React.ReactElement
  pageContext: { slug: string }
}
const Layout = ({ children, pageContext }: Props) => (
  <MDXProvider
    components={{
      pre: Pre,
      PhotoCaption,
      Quote,
      Intro,
    }}
  >
    <div className={classes.Layout}>
      <Header />
      <main className={classes.Blog}>{children}</main>
      <Blog
        title="Interesting read? Check these out."
        maxArticlesToShow={3}
        blacklistedSlugs={[pageContext.slug]}
        shuffleArticles
      />
    </div>
  </MDXProvider>
)

export const Head = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet"
    />
  </>
)

export default Layout
