import React from "react"

import { Header } from ".."

import * as classes from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
