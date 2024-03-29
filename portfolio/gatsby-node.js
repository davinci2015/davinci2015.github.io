const path = require("path")
const layout = path.resolve(`./src/blog/components/Layout/Layout.tsx`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors)
    return
  }

  const articles = result.data.allMdx.nodes

  articles.forEach(node => {
    createPage({
      path: `/blog${node.frontmatter.slug}`,
      component: `${layout}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
