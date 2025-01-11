import React from "react"

import { Seo, Layout } from "../components"
import { Blog, Hero } from "../sections"

import * as classes from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={classes.Container}>
      <Hero />
      <Blog title="Latest Articles" maxArticlesToShow={3} />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
