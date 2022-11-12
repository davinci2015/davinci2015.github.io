import * as React from "react"
import { PopupButton } from "react-calendly"

import * as classes from "./style.module.css"

type Props = {
  text: string
}

export const CalendlyButton = ({ text }: Props) =>
  typeof document !== "undefined" ? (
    <PopupButton
      url="https://calendly.com/danijel-vincijanovic"
      rootElement={document.body}
      className={classes.CalendlyButton}
      text={text}
    />
  ) : null
