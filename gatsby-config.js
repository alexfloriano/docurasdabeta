module.exports = {
  siteMetadata: {
    title: 'Doçuras da Betas',
    author:'Alex Floriano',
   siteUrl:'https://luanorlandi.github.io/',
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
      path:`${__dirname}/src/assets/images`,
    },
  },
  {
     resolve:'gatsby-plugin-manifest',
    options:{
      icon :'src/assets/images/favicon.png',

    }   
  }
 ],   
};
