import * as React from "react"

import { Layout, Seo } from "../components"
import { Hero } from "../sections"

const IndexPage = () => (
  <Layout>
    <Hero />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
