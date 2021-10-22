module.exports = {
  siteMetadata: {
    title: `Gatsby Agency Site`,
    description: `Agency Site by gatsby.`,
    author: `@shazyleshan`,
    siteUrl: `https://shazy-agency-site.netlify.app/`,
    image: `/agency-site.png`,
    twitterUsername: `@shazyleshan`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-DWNG3BK8PF`,
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-DWNG3BK8PF", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,    
        },
      },
    }
  ],
}