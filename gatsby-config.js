module.exports = {
  siteMetadata: {
    title: 'Doçuras da Betas',
    author: 'Alex Floriano',
    siteUrl: 'https://luanorlandi.github.io/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.png',

      }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDQIFkvPBps22pqidMhm7ecl4eDWP_W-88",
          authDomain: "docuras-da-beta.firebaseapp.com",
          databaseURL: "https://docuras-da-beta.firebaseio.com",
          projectId: "docuras-da-beta",
          storageBucket: "docuras-da-beta.appspot.com",
          messagingSenderId: "238752127009",
          appId: "1:238752127009:web:6d53909b20efd8ac5a2b60"
        }
      }
    }

  ],
};
