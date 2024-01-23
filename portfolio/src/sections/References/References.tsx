import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"

import { Animation, Button, Section } from "../../components"

import * as classes from "./style.module.css"

type Reference = {
  name: string
  linkedin: string
  role: string
  connection: string
  image: string
}

const references: Reference[] = [
  {
    name: "Youenn Bouglouan",
    linkedin: "https://www.linkedin.com/in/youenn-bouglouan-47455728/",
    role: "Technical team lead at Contractbook",
    connection: "Colleague at Contractbook",
    image: "youenn_bouglouan.jpeg",
  },
  {
    name: "Vladimir Rosančić",
    linkedin: "https://www.linkedin.com/in/vladorosancic",
    connection: "Colleague at Contractbook",
    role: "Technical team lead at Contractbook",
    image: "vladimir_rosancic.jpeg",
  },
  {
    name: "Tomislav Borbaš",
    linkedin: "https://www.linkedin.com/in/tomislavborbas",
    connection: "Colleague at COBE",
    role: "Web team lead at COBE",
    image: "tomislav_borbas.jpeg",
  },
]

export const References = () => {
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

  const renderImage = (reference: Reference) => {
    const image = getImage(
      images.find(image => image.base === reference.image)
        .childImageSharp as IGatsbyImageData
    )

    return image ? (
      <GatsbyImage
        image={image}
        alt={reference.name}
        className={classes.ReferenceImage}
      />
    ) : null
  }

  return (
    <Section anchor="references">
      <Animation type="fadeUp" delay={300}>
        <h2>
          <u>Colleagues</u> that could tell you more about my work.
        </h2>
        <p>Feel free to contact them but don't spam 🙃</p>
        <div className={classes.References}>
          {references.map(reference => (
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
