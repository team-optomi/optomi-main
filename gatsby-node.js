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
  createRedirect({ fromPath: '/opportunities/visit-the-office/', toPath: 'https://opportunities.optomi.com/visit-the-office/', isPermanent: true })
  createRedirect({ fromPath: '/opportunities/job-opening/', toPath: 'https://opportunities.optomi.com/job-opening/', isPermanent: true })
  createRedirect({ fromPath: '/opportunities/*', toPath: 'https://opportunities.optomi.com', isPermanent: true })
  createRedirect({ fromPath: '/connected/*', toPath: 'https://connected.optomi.com/?connected=7ToTA58xab', isPermanent: true, force: true })
  createRedirect({ fromPath: '/jobs/*', toPath: 'https://jobs.optomi.com/jobs/#/jobs', isPermanent: true, force: true })
  createRedirect({ fromPath: '/jobs/#/jobs', toPath: 'https://jobs.optomi.com/jobs/#/jobs', isPermanent: true, force: true })
  createRedirect({ fromPath: '/services', toPath: '/service-offerings', isPermanent: true })
  createRedirect({ fromPath: '/jobseekers', toPath: 'https://jobs.optomi.com/jobs/#/jobs', isPermanent: true })
  createRedirect({ fromPath: '/current-consultants', toPath: '/optomi-opportunities/current-consultants/', isPermanent: true })
  createRedirect({ fromPath: '/videointerviewing', toPath: '/', isPermanent: true })
  createRedirect({ fromPath: '/index.php', toPath: '/', isPermanent: true })
  createRedirect({ fromPath: '/opt2give.php', toPath: '/opt2give', isPermanent: true })
  createRedirect({ fromPath: '/opt2giveday.php', toPath: '/opt2giveday', isPermanent: true })
  createRedirect({ fromPath: '/opt2givewithu.php', toPath: '/opt2givewithu', isPermanent: true })
  createRedirect({ fromPath: '/privacy', toPath: '/privacy-policy', isPermanent: true })
  createRedirect({ fromPath: '/about.php', toPath: '/about-us', isPermanent: true })
  createRedirect({ fromPath: '/awards', toPath: '/press/awards', isPermanent: true })
  createRedirect({ fromPath: '/awards.php', toPath: '/press/awards', isPermanent: true })
  createRedirect({ fromPath: '/blog/author/*', toPath: '/blog', isPermanent: true })
  createRedirect({ fromPath: '/blog/category/*', toPath: '/blog', isPermanent: true })
  createRedirect({ fromPath: '/contact.php', toPath: '/contact', isPermanent: true })
  createRedirect({ fromPath: '/job_opportunities', toPath: 'https://jobs.optomi.com/jobs/#/jobs', isPermanent: true })
  createRedirect({ fromPath: '/marketability.php', toPath: '/', isPermanent: true })
  createRedirect({ fromPath: '/ourleadership.php', toPath: '/about-us', isPermanent: true })
  createRedirect({ fromPath: '/resources', toPath: 'https://optomi.com/optomi-opportunities/current-consultants/#resources', isPermanent: true })
  createRedirect({ fromPath: '/whatwevalue.php', toPath: '/core-values', isPermanent: true })
  createRedirect({ fromPath: 'https://optomi.com/optomi.com/', toPath: '/', isPermanent: true })
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/post.js")
  const CaseStudyTemplate = path.resolve("./src/templates/case-study.js")
  const ServiceTemplate = path.resolve("./src/templates/service-page.js")
  const CCBlogPostTemplate = path.resolve("./src/templates/cc-blog-post.js")
  const OOAwardTemplate = path.resolve("./src/templates/oo-award.js")
  const GBBlogPostTemplate = path.resolve("./src/templates/gb-blog-post.js")
  const GBPostWithPhotosTemplate = path.resolve("./src/templates/gb-blog-post-with-photos.js")
  const PressMain = path.resolve("./src/templates/press.js")
  const PressCategoryArchive = path.resolve("./src/templates/press-category-archive.js")
  const PressMonthArchive = path.resolve("./src/templates/press-month-archive.js")
  const PressReleaseTemplate = path.resolve("./src/templates/press-post.js")
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
      allWordpressWpCcBlogPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressWpOoAward {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      givingBackPost: allWordpressWpGbBlogPost(filter: {categories: {elemMatch: {wordpress_id: {nin: 59}}}}) {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      givingBackPostWithPhotos: allWordpressWpGbBlogPost(filter: {categories: {elemMatch: {wordpress_id: {in: 59}}}}) {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressWpPressRelease {
        edges {
          node {
            slug
            wordpress_id
            title
            timestamp: date
            month: date(formatString: "YYYY/MM")
            categories {
              name
              slug
            }
            acf {
              published_date
              published_slug
            }
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
              path: `/blog/${post.node.slug}`,
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
    const CCBlogPosts = result.data.allWordpressWpCcBlogPost.edges
        CCBlogPosts.forEach(ccblogpost => {
            createPage({
                path: `/consultant-community-blog/${ccblogpost.node.slug}`,
                component: CCBlogPostTemplate,
                context: {
                id: ccblogpost.node.wordpress_id,
                },
            })
        })
    const OOAwardPages = result.data.allWordpressWpOoAward.edges
        OOAwardPages.forEach(ooaward => {
            createPage({
                path: `/optomi-opportunities/awards/${ooaward.node.slug}`,
                component: OOAwardTemplate,
                context: {
                id: ooaward.node.wordpress_id,
                },
            })
        })
    const GBBlogPosts = result.data.givingBackPost.edges
        GBBlogPosts.forEach(gbblogpost => {
            createPage({
                path: `/giving-back/${gbblogpost.node.slug}`,
                component: GBBlogPostTemplate,
                context: {
                id: gbblogpost.node.wordpress_id,
                },
            })
        })
    const GBBlogPostsWithPhotos = result.data.givingBackPostWithPhotos.edges
        GBBlogPostsWithPhotos.forEach(gbblogpostphotos => {
            createPage({
                path: `/giving-back/${gbblogpostphotos.node.slug}`,
                component: GBPostWithPhotosTemplate,
                context: {
                id: gbblogpostphotos.node.wordpress_id,
                },
            })
        })
    // Press Pagination
    const pressPosts = result.data.allWordpressWpPressRelease.edges
    const postsPerPage = 10
    const numPages = Math.ceil(pressPosts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/press` : `/press/${i + 1}`,
        component: PressMain,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
    // Press Category Archive
    const PressCategories = []
      pressPosts.forEach(pressPost => {
        pressPost.node.categories.forEach(category => {
          let newObj = {
            title: category.name,
            slug: category.slug
          }
          PressCategories.push(newObj)
        })
      })
      PressCategories.forEach(pressCategory => {
        createPage({
          path: `/press/category/${pressCategory.slug}`,
          component: PressCategoryArchive,
          context: {
            metaTitle: pressCategory.title,
            category: pressCategory.slug,
          },
        })
      })
    // Date Archives - this time with ACF
    pressPosts.forEach(pressPost => {
      createPage({
        path: `/press/${pressPost.node.acf.published_slug}`,
        component: PressMonthArchive,
        context: {
          pubTitle: pressPost.node.acf.published_date,
          pubDate: pressPost.node.acf.published_slug,
        },
      })
    })
    // Press Date Archive - tried using date, didn't work because queries can't use arrays I guess//
    /*
    const PressDates = []
    pressPosts.forEach(pressPost => {
      let PressDate = {
        month: pressPost.node.month,
        timestamp: pressPost.node.timestamp,
        wordpressID: pressPost.node.wordpress_id
      }
      PressDates.push(PressDate)
    })
    const PressMonths = [
      {month: "2000/01"},
      {timestamp:[]},
      {wordpressID: []}
    ]
    let i = 0
    PressDates.forEach(object => {
      if(object.month === PressMonths[i].month) {
        let newTimestamp = object.timestamp
        let newWordpressID = object.wordpressID
        PressMonths[i].timestamp.push(newTimestamp)
        PressMonths[i].wordpressID.push(newWordpressID)
      } else {
        let newObject = {
          month: object.month,
          timestamp: [object.timestamp],
          wordpressID: [object.wordpressID]
        }
        PressMonths.push(newObject)
        i++
      }
    })
    console.log(PressMonths)
    PressMonths.forEach(pressMonth => {
      createPage({
        path: `/press-staging/${pressMonth.month}`,
        component: PressMonthArchive,
        context: {
          idArray: pressMonth.wordpressID,
        },
      })
    })*/

    const PressReleases = result.data.allWordpressWpPressRelease.edges
        PressReleases.forEach(pressRelease => {
            createPage({
                path: `/press/${pressRelease.node.slug}`,
                component: PressReleaseTemplate,
                context: {
                id: pressRelease.node.wordpress_id,
                },
            })
        })
}


