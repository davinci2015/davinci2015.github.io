import React from "react"
import { useCastedRef } from "../../hooks/useCastedRef"
import { useOnScreen } from "../../hooks/useOnScreen"

import "./style.css"

type AnimationTiming = "linear" | "ease-in" | "ease-out" | "ease-in-out"
type AnimationFillMode = "forwards" | "backwards" | "both" | "none"
type AnimationType =
  | "fadeIn"
  | "fadeOut"
  | "fadeInAndOut"
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "scaleIn"
  | "reduceHeight"
  | "waving-hand"

interface AnimationProps {
  children?: React.ReactNode
  type?: AnimationType
  timing?: AnimationTiming
  fillMode?: AnimationFillMode
  delay?: number
  duration?: number
  iterationCount?: number
  className?: string
  style?: React.CSSProperties
  onAnimationEnd?: () => void
}

export const Animation = (props: AnimationProps) => {
  const ref = useCastedRef<HTMLDivElement>()
  const onScreen = useOnScreen<HTMLDivElement>(ref)

  // Set defaults
  const type = props.type ?? "fadeIn"
  const timing = props.timing ?? "ease-out"
  const duration = props.duration ?? 200
  const delay = props.delay ?? 0
  const count = props.iterationCount ?? 1
  const fillMode = props.fillMode ?? "backwards"

  const style = onScreen
    ? {
        ...props.style,
        animationName: `${type}`,
        animationTimingFunction: `${timing}`,
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationIterationCount: `${count}`,
        animationFillMode: `${fillMode}`,
      }
    : { ...props.style, opacity: 0 }

  return (
    <div
      ref={ref}
      className={props.className}
      onAnimationEnd={props.onAnimationEnd}
      style={style}
    >
      {props.children}
    </div>
  )
}
