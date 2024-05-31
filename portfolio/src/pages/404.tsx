import React from "react"

import { Seo, Layout } from "../components"

import * as classes from "./404.module.css"

const NotFoundPage = () => (
  <Layout>
    <div className={classes.Container}>
      <div title="seems like you're lost" className={classes.NotFound}>
        seems like you're lost
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
