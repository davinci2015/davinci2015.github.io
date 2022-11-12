import * as React from "react"
import { PopupButton } from "react-calendly"

import { CalendlyButton, Layout, Seo } from "../components"

import * as classes from "./404.module.css"

const NotFoundPage = () => (
  <Layout>
    <div className={classes.Container}>
      <div title="seems like you're lost" className={classes.NotFound}>
        seems like you're lost
      </div>
      <CalendlyButton text="Seriously, let's talk ☕" />
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
