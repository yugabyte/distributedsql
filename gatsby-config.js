const path = require(`path`)
var productionPlugins = []
if(process.env.GATSBY_STAGE && process.env.GATSBY_STAGE==='production') {
  productionPlugins.push(
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `${process.env.GATSBY_GA_TRACKING_ID}`
        ],
        gtagConfig: {
          anonymize_ip: true
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true
        }
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
  pathPrefix: `/2020`,
  siteMetadata: {
    title: "Distributed SQL",
    author: "YugaByte Inc",
    description: "Distributed SQL Summit"
  },
  plugins: [
    ...productionPlugins,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source sans pro\:300,400,500,600,700`
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
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/images\/svg/
        }
      }
    }
  ],
}
