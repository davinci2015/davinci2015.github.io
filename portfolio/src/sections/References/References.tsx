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
    name: "Wojciech Zawistowski",
    linkedin: "https://www.linkedin.com/in/zawistowski/",
    role: "VP of Engineering at Contractbook",
    connection: "Direct manager from Contractbook",
    image: "wojciech_zawistowski.jpeg",
  },
  {
    name: "Vladimir Rosančić",
    linkedin: "https://www.linkedin.com/in/vladorosancic",
    connection: "Colleague from Contractbook",
    role: "Technical team lead at Contractbook",
    image: "vladimir_rosancic.jpeg",
  },
  {
    name: "Eryk Cebula",
    linkedin: "https://www.linkedin.com/in/eryk-cebula-924b64172/",
    role: "Full Stack developer at Contractbook",
    connection: "Colleague from Contractbook",
    image: "eryk_cebula.jpeg",
  },
  {
    name: "Tomislav Borbaš",
    linkedin: "https://www.linkedin.com/in/tomislavborbas",
    connection: "Colleague from COBE",
    role: "Web team lead at COBE",
    image: "tomislav_borbas.jpeg",
  },
  {
    name: "Nikolina Mihić",
    linkedin: "https://hr.linkedin.com/in/nikolina-mihic",
    connection: "Colleague from COBE",
    role: "Lead Software QA Engineer at COBE",
    image: "nikolina_mihic.jpeg",
  },
  {
    name: "Ivan Jurlina",
    linkedin: "https://hr.linkedin.com/in/ivanjurlina",
    connection: "Colleague from COBE",
    role: "HR Manager at COBE",
    image: "ivan_jurlina.jpeg",
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
        <div className={classes.Container}>
          <h2>
            <u>Beautiful</u> people that could tell you more about my work.
          </h2>
          <p>Feel free to contact them but don't spam 🙃</p>
          <div className={classes.References}>
            {references.map(reference => (
              <div className={classes.Reference}>
                {renderImage(reference)}
                <p>{reference.name}</p>
                <span>{reference.connection}</span>
                <Button as="a" href={reference.linkedin}>
                  LinkedIn
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Animation>
    </Section>
  )
}
