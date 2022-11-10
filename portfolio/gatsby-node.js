const buildArticles = async ({ graphql, createPage, reporter }) => {
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
      component: node.internal.contentFilePath,
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  buildArticles({ graphql, createPage, reporter })
}
