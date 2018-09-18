module.exports = {
  siteMetadata: {
    title: 'Mabdulai Gatsby Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
