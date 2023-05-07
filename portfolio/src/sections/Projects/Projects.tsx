import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"

import { Animation, Button, Section } from "../../components"

import * as classes from "./style.module.css"

type Project = {
  name: string
  url: string
  description: string
  image: string
}

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query Images {
      allFile(filter: { relativeDirectory: { eq: "references" } }) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes

  const renderImage = (project: Project) => {
    const image = getImage(
      images.find(image => image.base === project.image)
        .childImageSharp as IGatsbyImageData
    )

    return image ? (
      <GatsbyImage
        image={image}
        alt={project.name}
        className={classes.ReferenceImage}
      />
    ) : null
  }

  return (
    <Section anchor="projects">
      <Animation type="fadeUp" delay={300}>
        <h2>
          <u>Colleagues</u> that could tell you more about my work.
        </h2>
        <p>Feel free to contact them but don't spam 🙃</p>
        <div className={classes.References}>
          {projects.map(reference => (
            <div key={reference.name} className={classes.Reference}>
              {renderImage(reference)}
              <p>{reference.name}</p>
              <span>{reference.connection}</span>
              <Button as="a" href={reference.linkedin}>
                LinkedIn
              </Button>
            </div>
          ))}
        </div>
      </Animation>
    </Section>
  )
}
