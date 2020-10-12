/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createRedirect } = actions
  createRedirect({ fromPath: '/press/*', toPath: 'https://press.optomi.com', isPermanent: true })
  createRedirect({ fromPath: '/opportunities/*', toPath: 'https://opportunities.optomi.com', isPermanent: true })
  createRedirect({ fromPath: '/giving-back/*', toPath: 'https://giving-back.optomi.com', isPermanent: true })
  createRedirect({ fromPath: '/consultant-community-blog/*', toPath: 'https://consultant-community-blog.optomi.com', isPermanent: true })
  createRedirect({ fromPath: '/optomi-opportunities/*', toPath: 'http://optomi-opportunities.optomi.com', isPermanent: true })
  createRedirect({ fromPath: '/jobs/*', toPath: 'https://jobs.optomi.com/jobs/#/jobs', isPermanent: true, force: true })
  createRedirect({ fromPath: '/jobs/#/jobs', toPath: 'https://jobs.optomi.com/jobs/#/jobs', isPermanent: true, force: true })
  createRedirect({ fromPath: '/services', toPath: '/service-offerings', isPermanent: true })
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/post.js")
  const CaseStudyTemplate = path.resolve("./src/templates/case-study.js")
  const ServiceTemplate = path.resolve("./src/templates/service-page.js")
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressWpCaseStudy {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressWpService {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
    const BlogPosts = result.data.allWordpressPost.edges
      BlogPosts.forEach(post => {
        createPage({
              path: post.node.slug,
              component: BlogPostTemplate,
              context: {
              id: post.node.wordpress_id,
              },
          })
      })
    const CaseStudies = result.data.allWordpressWpCaseStudy.edges
        CaseStudies.forEach(post => {
          createPage({
                path: post.node.slug,
                component: CaseStudyTemplate,
                context: {
                id: post.node.wordpress_id,
                },
            })
        })
    const ServicePages = result.data.allWordpressWpService.edges
        ServicePages.forEach(service => {
            createPage({
                path: `/service-offerings/${service.node.slug}`,
                component: ServiceTemplate,
                context: {
                id: service.node.wordpress_id,
                },
            })
        })
}


