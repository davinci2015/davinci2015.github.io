import * as React from "react"
import { PopupButton } from "react-calendly"

import { Animation, Layout, Seo } from "../components"
import { Blog, Hero } from "../sections"

import * as classes from "./index.module.css"
import arrow from "../images/curly-dotted-arrow-svgrepo-com.svg"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Animation type="fadeUp" delay={300}>
      <div className={classes.Calendly}>
        <img src={arrow} alt="arrow" />
        <PopupButton
          url="https://calendly.com/danijel-vincijanovic"
          rootElement={document.body}
          className={classes.CalendlyButton}
          text="Don't be a stranger — let's talk ☕"
        />
      </div>
    </Animation>
    <Blog />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
