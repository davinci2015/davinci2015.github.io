import React from "react"

import { Header } from ".."
import { Footer } from "../../sections"

import * as classes from "./style.module.css"

const Layout = ({ children }) => (
  <div className={classes.Layout}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
