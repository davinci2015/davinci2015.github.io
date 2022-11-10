import React from "react"

import { Header } from ".."

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
