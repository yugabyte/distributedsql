import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Speaker from '../components/Speaker'
import ContactBanner from '../components/ContactBanner'
import Img from "gatsby-image"
import { Link, graphql } from 'gatsby'

const speakerData = require('../data/data.json')

const SessionPage = (props) => {
  const { talk, description, speakers, video, transcription } = props.pageContext;
  const talkSpeakers = speakers.map(id => {
    return {
      ...speakerData[id],
      profilePicture: props.data[id + '1']
    }
  })
  return (
    <Layout>
      <Helmet>
        <title>{talk} - Distributed SQL Summit</title>
        <meta name="description" content={`${talk} - Hosted by Distributed SQL Summit 2021`} />
      </Helmet>
      <ContactBanner title="Virtual Experience" />
      <div id="session" className="alt">
        <section>
          <div className="container">
            <header style={{
              width: '100%',
              minHeight: '300px',
            }} className="major workshopDetails">              
              {video &&
                <div className="video-container">
                  <iframe src={`${video}?title=0&byline=0&portrait=0`} width="733" height="419" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>                  
                  {transcription &&
                    <section className="transcript">
                      <h3>Transcript</h3>
                      <div>
                        {transcription}
                      </div>
                    </section>
                  }                 
                </div>
              }
              <div className="session-info">
                <div className="column-header">
                  Talk / Speaker / Abstract
                </div>
                <h3>{talk}</h3>
                {talkSpeakers.map(speakerData => (
                  <Speaker                    
                    speakerPosition={speakerData.speakerPosition}
                    size={"small"}
                    orientation="landscape"
                    speakerId={speakerData.speakerId}
                    speakerImage={speakerData.profilePicture.childImageSharp.fluid.src}
                    speakerName={speakerData.speakerName}
                    speakerCompany={speakerData.speakerCompany}
                  />
                ))}
                <p dangerouslySetInnerHTML={{__html: description}}></p>
              </div>
            </header>
            <p>&lt; <Link to="/schedule">Back to Schedule page</Link></p>

            <div style={{ clear: 'both' }} />
          </div>
        </section>
      </div>
    </Layout >
  )
}

export default SessionPage

export const queryProfilePictures = graphql`
  query {
    AlanCaldera1: file(relativePath: { eq: "AlanCaldera.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AllisonKunz1: file(relativePath: { eq: "AllisonKunz.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AmeyBanarse1: file(relativePath: { eq: "AmeyBanarse.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    BreneshStanslasFlowerMary1: file(relativePath: { eq: "BreneshStanslasFlowerMary.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ChristophPakulski1: file(relativePath: { eq: "ChristophPakulski.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    DaShaunCarter1: file(relativePath: { eq: "DaShaunCarter.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    EthanUberseder1: file(relativePath: { eq: "EthanUberseder.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    EvanPowell1: file(relativePath: { eq: "EvanPowell.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    HaleDonertasli1: file(relativePath: { eq: "HaleDonertasli.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    HudsonClark1: file(relativePath: { eq: "HudsonClark.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    JamesHartig1: file(relativePath: { eq: "JamesHartig.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    JamesTaylor1: file(relativePath: { eq: "JamesTaylor.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    JoeBeda1: file(relativePath: { eq: "JoeBeda.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    JoeHellerstein1: file(relativePath: { eq: "JoeHellerstein.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KartikRallapalli1: file(relativePath: { eq: "KartikRallapalli.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }   
    KarthikRanganathan1: file(relativePath: { eq: "KarthikRanganathan.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    KenOwens1: file(relativePath: { eq: "KenOwens.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    LianghongXu1: file(relativePath: { eq: "LianghongXu.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MaheshTyagarajan1: file(relativePath: { eq: "MaheshTyagarajan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MehrdadNurolahzade1: file(relativePath: { eq: "MehrdadNurolahzade.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MikeDenman1: file(relativePath: { eq: "MikeDenman.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    NikhilChandrappa1: file(relativePath: { eq: "NikhilChandrappa.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    PrasadRadhakrishnan1: file(relativePath: { eq: "PrasadRadhakrishnan.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    PuneetDevadiga1: file(relativePath: { eq: "PuneetDevadiga.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TravisLogan1: file(relativePath: { eq: "TravisLogan.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TobiasMeixner1: file(relativePath: { eq: "TobiasMeixner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    TylerRamer1: file(relativePath: { eq: "TylerRamer.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`