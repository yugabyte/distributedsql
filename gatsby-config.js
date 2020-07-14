const path = require(`path`)
var productionPlugins = []
if(process.env.GATSBY_STAGE && process.env.GATSBY_STAGE==='production') {
  productionPlugins.push(
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GATSBY_GA_TRACKING_ID}`,
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: [],
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
  )
  productionPlugins.push(
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '',
      },
    }
  )
}
module.exports = {
  assetPrefix: `https://archive.distributedsql.org`,
  siteMetadata: {
    title: "Distributed SQL",
    author: "YugaByte Inc",
    description: "Distributed SQL Summit"
  },
  plugins: [
    ...productionPlugins,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,

          },
          {
            family: `Nunito`,
            variants: [`400`,`800`,`800i`,`900`,`900i`]
          }
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: '',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`,`assets`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Distributed SQL',
        short_name: 'Distributed SQL',
        start_url: '/',
        background_color: '#FF6E42',
        theme_color: '#FF6E42',
        display: 'standalone',
        icon: 'static/Icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass'
  ],
}
