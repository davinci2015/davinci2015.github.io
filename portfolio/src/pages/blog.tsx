import * as React from "react"

import { Seo } from "../components"
import { MainLayout } from "../layout"

const BlogPage = () => <MainLayout>I'm blog page</MainLayout>

export const Head = () => <Seo title="Blog" />

export default BlogPage
