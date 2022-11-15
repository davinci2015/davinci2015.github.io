import * as React from "react"

import { Animation, CalendlyButton, Seo } from "../components"
import { MainLayout } from "../layout"
import { Blog, Hero, References } from "../sections"

import * as classes from "./index.module.css"
import arrow from "../images/curly-dotted-arrow-svgrepo-com.svg"

const IndexPage = () => (
  <MainLayout>
    <Hero />
    <Animation type="fadeUp" delay={300}>
      <div className={classes.Calendly}>
        <img src={arrow} alt="arrow" />
        <CalendlyButton text="Don't be a stranger — let's talk ☕" />
      </div>
    </Animation>
    <References />
    <Blog />
  </MainLayout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
