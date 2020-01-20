/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  // path:`env.${process.env.NODE_ENV}`
})

module.exports = {
  plugins: [
    {
      resolve:`gatsby-source-prismic`,
      options: {
        repositoryName: 'farfelle-dusk',
        accessToken: `${process.env.PRISMIC_KEY}`,
        linkResolver: ({ node, key, value }) => article => `/${article.uid}`,
        schemas: {
          config: require('./src/prismic-schemas/config.json'),
          // article: require('./src/prismic-schemas/article.json')
        }
      }
    }
  ],
  
}
