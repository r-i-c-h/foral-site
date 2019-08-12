const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Alisa Szaztrowski, PhD',
    description: 'Alisa Szatrowski is a mixed methods researcher with a PhD in Sociology. She utilizes quantitative and qualitative methods to help organizations better understand and fully engage the diverse populations they serve. She knows firsthand that when organizations fully understand the complex and varied needs of their clients, they can create smarter, better designs that radically change the human experience.',
    author: 'rich at richwerden.com',
  },

  plugins: [
    'gatsby-plugin-react-helmet',
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
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-plugin-react-axe',
    'gatsby-plugin-sharp',
    `gatsby-plugin-styled-components`,
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: { default: path.resolve('./src/components/layout.js') },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Alisa Szatrowski, PhD',
        short_name: 'A.Szatrowski',
        start_url: '/',
        background_color: '#E6E6D7',
        theme_color: '#E6E6D7',
        display: 'minimal-ui',
        icon: 'src/images/site-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};