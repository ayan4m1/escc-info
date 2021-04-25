require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'ESCC Info',
    description: 'A knowledge base for the AVS ESCC.',
    author: '@ayan4m1',
    siteUrl: 'https://escc.info'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/src/docs`
      }
    },
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ESCC Info',
        /* eslint-disable camelcase */
        short_name: 'escc-info',
        start_url: '/',
        background_color: '#4582ec',
        theme_color: '#4582ec',
        /* eslint-enable camelcase */
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
        anonymize: true
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          },
          {
            resolve: 'gatsby-remark-classes',
            options: {
              classMap: {
                table: 'table table-striped'
              }
            }
          },
          'gatsby-remark-autolink-headers'
        ]
      }
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-sitemap'
  ]
};
