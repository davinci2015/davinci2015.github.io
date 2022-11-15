import React, { Fragment } from "react"
import { MDXProvider } from "@mdx-js/react"

import * as classes from "./style.module.css"
import { Pre } from ".."
import { Header } from "../../../components"

const Layout = ({ children }) => (
  <MDXProvider
    components={{
      h1: props => <h1 {...props} style={{ color: "red" }} />,
      pre: Pre,
    }}
  >
    <div className={classes.Layout}>
      <Header />
      <main>{children}</main>
    </div>
  </MDXProvider>
)

export default Layout
