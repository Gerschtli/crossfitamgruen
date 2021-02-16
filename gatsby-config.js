module.exports = {
  flags: {
    FAST_REFRESH: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Didact Gothic:400,700`],
        display: 'swap',
      },
    },
    `gatsby-plugin-netlify-cms-paths`, // convert paths for images
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: '@rstacruz/gatsby-remark-component',
            options: { components: ['contact-form'] },
          },
          `gatsby-plugin-netlify-cms-paths`, // convert paths for images
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 800,
              quality: 80,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        htmlTitle: 'CMS // CrossFit am Grün',
      },
    },
    'gatsby-plugin-netlify',
  ],
}
