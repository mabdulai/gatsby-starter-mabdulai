module.exports = {
  siteMetadata: {
    title: 'Mabdulai Gatsby Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'mabdulai-gatsby-starter',
        short_name: 'mabdulai-starter',
        start_url: '/',
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    'gatsby-plugin-offline',
  ],
};
