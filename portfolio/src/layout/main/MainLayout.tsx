import React from "react"

import { Header } from "../../components"

import * as classes from "./style.module.css"

const MainLayout = ({ children }) => (
  <div className={classes.Layout}>
    <Header />
    <main>{children}</main>
  </div>
)

export default MainLayout
