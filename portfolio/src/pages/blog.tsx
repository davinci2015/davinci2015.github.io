import * as React from "react"

import { Seo } from "../components"
import { MainLayout } from "../layout"
import { Blog } from "../sections"

const BlogPage = () => (
  <MainLayout>
    <Blog />
  </MainLayout>
)

export const Head = () => <Seo title="Blog" />

export default BlogPage
