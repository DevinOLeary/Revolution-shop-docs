module.exports = {
  siteMetadata: {
    title: `Bike Shop Buddy`,
  },
  plugins: [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sass`,
  `gatsby-transformer-sharp`,
  `gatsby-transformer-remark`,
   `gatsby-plugin-sharp`,
   `gatsby-plugin-glamor`,
   {
     resolve: `gatsby-source-contentful`,
     options: {
       spaceId:`4xr2i3jvj2ft`,
       accessToken: `828e9d7ba2e5ebdb6b8508d4eda81865cfd150699353c711ee994ea0406ffa4c`
     }
   }
  ],
}
