import * as React from "react"

import { Seo } from "../components"
import { MainLayout } from "../layout"
import { Blog, Hero, References } from "../sections"

const IndexPage = () => (
  <MainLayout>
    <Hero />

    <Blog title="Latest Articles" maxArticlesToShow={3} />
    <References />
  </MainLayout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
