import React, { Fragment } from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import vsDark from "prism-react-renderer/themes/vsDark"

import { Header } from "../../components"
import * as classes from "./style.module.css"

const BlogLayout = ({ children }) => (
  <MDXProvider
    components={{
      h1: props => <h1 {...props} style={{ color: "red" }} />,
      pre: (props: any) => {
        const className = props.children.props.className || ""
        const matches = className.match(/language-(?<lang>.*)/)
        return (
          <Highlight
            {...defaultProps}
            // @ts-ignore-next-line
            theme={vsDark}
            code={props.children.props.children}
            language={
              matches && matches.groups && matches.groups.lang
                ? matches.groups.lang
                : ""
            }
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className + " " + classes.Pre} style={style}>
                {tokens.map((line, i) => (
                  <div
                    {...getLineProps({ line, key: i })}
                    className={classes.Line}
                  >
                    <span className={classes.LineNumber}>{i + 1}</span>
                    <span className={classes.LineContent}>
                      {line.map((token, key) => (
                        <Fragment key={key}>
                          <span {...getTokenProps({ token, key })} />
                        </Fragment>
                      ))}
                    </span>
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        )
      },
    }}
  >
    <div className={classes.Layout}>
      <Header />
      <main>{children}</main>
    </div>
  </MDXProvider>
)

export default BlogLayout
