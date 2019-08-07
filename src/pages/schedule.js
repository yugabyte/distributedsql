import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SpeakerList from '../components/SpeakerList'


const Speakers = (props) => (
  <Layout>
    <Helmet>
      <title>Schedule - Distributed SQL Summit - 2019</title>
      <meta name="description" content="Distributed SQL Summit - 2019" />
    </Helmet>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner removePaddBottom">
                <header className="major removeMarBottom">
                    <h1 className="removeMarBottom">
                      Schedule
                    </h1>
                </header>
            </div>
        </section>
    </div>

    <div id="speakerlist">
      <SpeakerList isAgenda={true} data={props.data} />
    </div>

  </Layout >
)

export default Speakers



export const agendaQuery = graphql`
  query {
    JamesWatters: file(relativePath: { eq: "JamesWatters.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    JeffRothschild: file(relativePath: { eq: "JeffRothschild.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KannanMuthukkaruppan: file(relativePath: { eq: "KannanMuthukkaruppan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KamalGupta: file(relativePath: { eq: "KamalGupta.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    CampbellFraser: file(relativePath: { eq: "CampbellFraser.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MaheshTyagarajan: file(relativePath: { eq: "MaheshTyagarajan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KamalGupta: file(relativePath: { eq: "KamalGupta.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KamalGupta: file(relativePath: { eq: "KamalGupta.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RamRavichandran: file(relativePath: { eq: "RamRavichandran.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RobertWinslow: file(relativePath: { eq: "RobertWinslow.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    PeterZaitsev: file(relativePath: { eq: "PeterZaitsev.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RobertWinslow: file(relativePath: { eq: "RobertWinslow.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RyanScheidter: file(relativePath: { eq: "RyanScheidter.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RajkumarSen: file(relativePath: { eq: "RajkumarSen.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    GuilermoTantachuco: file(relativePath: { eq: "GuilermoTantachuco.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    NikhilChandrappa: file(relativePath: { eq: "NikhilChandrappa.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KarthikRanganathan: file(relativePath: { eq: "KarthikRanganathan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    DhrubaBorthakur: file(relativePath: { eq: "DhrubaBorthakur.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Break: file(relativePath: { eq: "Break.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Lunch: file(relativePath: { eq: "lunch.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
