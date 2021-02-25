const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              path
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach((edge) => {
      createPage({
        path: edge.node.fields.path,
        component: path.resolve(
          `src/templates/${edge.node.frontmatter.templateKey}.js`
        ),
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `path`,
      node,
      value,
    })
  }
}

exports.onPostBootstrap = ({ graphql }) => {
  const fileContents = fs.readFileSync('./src/data/settings.yml', 'utf8')
  const settings = yaml.load(fileContents)

  fs.writeFileSync(
    path.join('public', 'site.webmanifest'),
    JSON.stringify({
      name: settings.appName,
      short_name: settings.appName,
      icons: [
        {
          src: '/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/icons/maskable_icon_x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
      start_url: '/',
      theme_color: '#18c47c',
      background_color: '#ffffff',
      display: 'standalone',
    })
  )
}
