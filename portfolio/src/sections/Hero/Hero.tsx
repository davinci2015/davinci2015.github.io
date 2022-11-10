import React from "react"

import { Animation, Button, Section } from "../../components"

import * as classes from "./style.module.css"

export const Hero = () => (
  <Section anchor="hero">
    <Animation type="fadeUp" delay={400}>
      <div className={classes.Hero}>
        <div className={classes.Intro}>
          <span className={classes.ImagePrefix}>Hey there 👋</span>
        </div>
        <h1 className={classes.Title}>
          I'm <u>Danijel</u> Vincijanović.
        </h1>
        <h2 className={classes.Subtitle}></h2>
        <p className={classes.Tag}>#full_stack_engineer</p>
        <div className={classes.Social}>
          <Button as="a" href="https://hr.linkedin.com/in/davinci2015">
            LinkedIn
          </Button>
          <Button as="a" href="https://github.com/davinci2015">
            GitHub
          </Button>
          <Button as="a" href="https://codepen.io/davinci">
            Codepen
          </Button>
          <Button as="a" href="https://medium.com/@danijel.vincijanovic">
            Medium
          </Button>
          <Button as="a" href="https://dev.to/davinc">
            Dev.to
          </Button>
        </div>
      </div>
    </Animation>
  </Section>
)
