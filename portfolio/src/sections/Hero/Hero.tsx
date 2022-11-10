import React from "react"
import { PopupButton } from "react-calendly"

import { Animation, Section } from "../../components"

import * as classes from "./style.module.css"

export const Hero = () => {
  return (
    <Section anchor="hero">
      <div className={classes.Hero}>
        <div className={classes.Intro}>
          <span className={classes.ImagePrefix}>Hey there 👋</span>
        </div>
        <Animation type="fadeUp" delay={400}>
          <h1 className={classes.Title}>
            I'm <u>Danijel</u> Vincijanović.
          </h1>
          <h2 className={classes.Subtitle}></h2>
          <p>Full Stack Engineer.</p>
        </Animation>
      </div>
      <PopupButton
        url="https://calendly.com/danijel-vincijanovic"
        rootElement={document.body}
        className={classes.CalendlyButton}
        text="Click here to schedule!"
      />
    </Section>
  )
}
