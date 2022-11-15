import React from "react"
import { MDXProvider } from "@mdx-js/react"

import * as classes from "./style.module.css"
import { Pre, Code } from ".."
import { Header } from "../../../components"

const Layout = ({ children }) => (
  <MDXProvider
    components={{
      pre: Pre,
      code: Code,
    }}
  >
    <div className={classes.Layout}>
      <Header />
      <main className={classes.Blog}>{children}</main>
    </div>
  </MDXProvider>
)

export default Layout
