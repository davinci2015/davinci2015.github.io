import React, { Fragment } from "react"
import { MDXProvider } from "@mdx-js/react"

import * as classes from "./style.module.css"
import { Pre } from ".."
import { Header } from "../../../components"

const Layout = ({ children }) => (
  <MDXProvider
    components={{
      pre: Pre,
      code: props => <code {...props} style={{ backgroundColor: "gray" }} />,
    }}
  >
    <div className={classes.Layout}>
      <Header />
      <main className={classes.Blog}>{children}</main>
    </div>
  </MDXProvider>
)

export default Layout
