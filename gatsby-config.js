module.exports = {
  siteMetadata: {
<<<<<<< HEAD
    title: 'gatsby-starter-mabdulai'
=======
    title: 'Mabdulai Gatsby Starter',
>>>>>>> 3844799ebd392e29bc559c193394ce3878708662
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
<<<<<<< HEAD
        name: 'gatsby-starter-mabdulai',
        short_name: 'mabdulai-starter',
        start_url: '/'
      }
=======
        name: 'mabdulai-gatsby-starter',
        short_name: 'mabdulai-starter',
        start_url: '/',
      },
>>>>>>> 3844799ebd392e29bc559c193394ce3878708662
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
