import * as React from "react"

import { Seo, Layout } from "../components"
import { Blog, Hero, References } from "../sections"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Blog title="Latest Articles" maxArticlesToShow={3} />
    <References />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
