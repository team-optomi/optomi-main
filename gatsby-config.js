module.exports = {
  siteMetadata: {
    title: `Optomi`,
    description: `Identifying and creating the best tech talent to help define the technology of tomorrow`,
    author: `@optomi_`,
    siteUrl: `https://optomi.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 1000
      },
    },
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `optomi.wpengine.com/`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/home_section", // <== Custom post slug
          "**/team_member", // <== Custom post slug
          "**/custom_page", // <== Custom post slug
          "**/case_study", // <== Custom post slug
          "**/service", // <== Custom post slug
          "**/location", // <== Custom post slug
          "**/core_value", // <== Custom post slug
          "**/testimonial", // <== Custom post slug
          "**/giving_slides", // <== Custom post slug
          "**/consult_testimonial", // <== Custom post slug
          "**/oo_award", // <== Custom post slug
          "**/cc_blog_post", // <== Custom post slug
          "**/gb_blog_post", // <== Custom post slug
          "**/press_release", // <== Custom post slug
          "**/press_award", // <== Custom post slug
          "**/founder", // <== Custom post slug
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `optomi_`,
        access_token: `EAAEl0BnDfP4BAGRSL5MUlVlTbJ8rPbzA9XNtmXlvHVDF7KCvoHEh1Phcwadx6QdTVQ57giF9Twcfl63qZBXapO4YdgP7zydmb629p45VDPu6enhlLT1i3kfHEp0wZA21y4cQqqmjKeSSbmfwnEsgZCAHm1RimzpfhSlavVMrwZDZD`,
        instagram_id: `17841402246705305`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-35481725-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `optomi`,
        short_name: `optomi`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#61b1e8`,
        display: `minimal-ui`,
        icon: `src/images/ops-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
  ],
}
