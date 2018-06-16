module.exports = {
  siteMetadata: {
    title: 'Mabdulai gatsby starter'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    {
      // Add your favourite google fonts to your project.
      // `Roboto\:400,500,700,900`,
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: []
      }
    },
    {
      // A plugin for generating all essential favicons
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ]
};
