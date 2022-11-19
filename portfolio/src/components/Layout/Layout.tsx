import React from "react"

import { Header } from ".."

import * as classes from "./style.module.css"

export const Layout = ({ children }) => (
  <div className={classes.Layout}>
    <Header />
    <main>{children}</main>
  </div>
)
