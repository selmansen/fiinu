module.exports = {
  siteMetadata: {
    title: `Fiinu`,
    description: `Fiinu description`,
    author: `Selman Bilal Şen`,
    siteUrl: `https://fiinu.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        fileName: false,
        ssr: false,
        displayName: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato`,
          `lato\:,400,,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
      // {
      //   resolve: `gatsby-plugin-manifest`,
      //   options: {
      //     name: `gatsby-starter-default`,
      //     short_name: `starter`,
      //     start_url: `/`,
      //     background_color: `#663399`,
      //     // This will impact how browsers show your PWA/website
      //     // https://css-tricks.com/meta-theme-color-and-trickery/
      //     // theme_color: `#663399`,
      //     display: `minimal-ui`,
      //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      //   },
      // },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    ],
  }
  