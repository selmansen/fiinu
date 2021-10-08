module.exports = {
  siteMetadata: {
    title: `Fiinu`,
    description: `Pre-IPO fintech with an expected bank licence`,
    author: `SB ŞEN`,
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
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-mdx",
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/about`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fiinu`,
        short_name: `Fiinu`,
        start_url: `/`,
        background_color: `#333D47`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/favicon.svg`, 
      },
    },
    `gatsby-plugin-offline`,
  ],
}
  