const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Alisa Szatrowski, Ph.D.',
    titleTemplate: '%s - A.Szatrowski',
    description: 'Alisa Szatrowski Online Portfolio',
    owner: 'Alisa Szatrowski',
    author: 'Alisa Szatrowski',
    socialImage: '',
    url: "https://www.example.com",
    siteBy: 'Rich @RichWerden.com',
    keywords: ["portfolio", "research", "researcher", "PhD", "academic"]
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/articles`,
        name: `articles`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-axe',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          articles: require.resolve("./src/components/ArticleTemplate.js"),
          default: require.resolve("./src/components/layout.js")
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              quality: 90,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          // Don't think I actually need the below, but just in case....
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          }
        ],
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
    //?? 'gatsby-plugin-sitemap',
    //?? 'gatsby-plugin-netlify'
  ],
};
