import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import LandingSpeaker from '../components/LandingSpeaker'

import { graphql } from 'gatsby'
import LogoSmall from '../assets/images/LogoSmall.png'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Distributed SQL Summit"
                    meta={[
                        { name: 'description', content: 'Distributed SQL Summit' },
                        { name: 'keywords', content: 'Distributed SQL, Postgres, YugaByte' },
                        { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
                    ]}
                >

                </Helmet>
                <Banner data={this.props.data} />
                <LandingSpeaker/>
            </Layout>
        )
    }
}

export default HomeIndex

export const query = graphql`
  query {
    bannerImage: file(relativePath: { eq: "bannerImage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    LogoSmall: file(relativePath: { eq: "LogoSmall.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    calendar: file(relativePath: { eq: "calendar.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    location: file(relativePath: { eq: "location.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
