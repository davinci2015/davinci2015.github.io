import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Animation, Button, Section } from "../../components"

import * as classes from "./style.module.css"

export const Hero = () => (
  <Section anchor="hero">
    <Animation type="fadeUp" delay={300}>
      <div className={classes.Container}>
        <StaticImage
          className={classes.ProfileImage}
          src="../../images/profile.jpg"
          alt="Danijel Vincijanović"
        />
        <div className={classes.Hero}>
          <div className={classes.Intro}>
            <span className={classes.WavingHand}>👋</span>
          </div>
          <h2 className={classes.Title}>I'm Danijel Vincijanović.</h2>
          <h2 className={classes.Subtitle}>
            I code and <u>help teams and products grow</u>.<br />
            Like a gardener 🪴
          </h2>
          <div className={classes.Social}>
            <Button as="a" href="https://www.linkedin.com/in/davinci2015">
              LinkedIn
            </Button>
            <Button as="a" href="https://github.com/davinci2015">
              GitHub
            </Button>
            <Button as="a" href="https://codepen.io/davinci">
              Codepen
            </Button>
          </div>
        </div>
      </div>
    </Animation>
  </Section>
)
