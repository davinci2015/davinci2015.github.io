require("dotenv").config({
  path: ".env",
})

const x = process.env.MIXPANEL_API_KEY
console.log("TEST FOR env variable", x)

module.exports = {
  siteMetadata: {
    title: `Danijel Vincijanović`,
    description: `Full Stack Enginner - I code and help teams and products grow. Like a gardener.`,
    author: `Danijel Vincijanović`,
  },
  plugins: [
    `gatsby-plugin-dts-css-modules`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx"],
        gatsbyRemarkPlugins: [
          "gatsby-remark-gifs",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-images`,
        path: `${__dirname}/src/blog/images`,
      },
    },
    {
      resolve: "gatsby-plugin-mixpanel",
      options: {
        apiToken: process.env.MIXPANEL_API_KEY,
        pageViews: "all",
      },
    },
  ],
}
