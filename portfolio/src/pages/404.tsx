import * as React from "react"

import { CalendlyButton, Seo } from "../components"
import { MainLayout } from "../layout"

import * as classes from "./404.module.css"

const NotFoundPage = () => (
  <MainLayout>
    <div className={classes.Container}>
      <div title="seems like you're lost" className={classes.NotFound}>
        seems like you're lost
      </div>
      <CalendlyButton text="Seriously, let's talk ☕" />
    </div>
  </MainLayout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
