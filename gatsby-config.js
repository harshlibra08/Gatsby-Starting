/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Harsh Choudhary',
    description: 'Web Dev Portfolio',
    copyright: 'This Website is Copyrighted 2023 Harsh Choudhary'
  }
}

