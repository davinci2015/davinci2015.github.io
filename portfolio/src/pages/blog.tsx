import * as React from "react"

import { Seo, Layout } from "../components"
import { Blog } from "../sections"

const BlogPage = () => (
  <Layout>
    <Blog />
  </Layout>
)

export const Head = () => <Seo title="Blog" />

export default BlogPage
