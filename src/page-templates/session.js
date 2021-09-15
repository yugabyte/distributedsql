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
    AbbyKearns1: file(relativePath: { eq: "AbbyKearns.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    } 
    BhaskarGhosh1: file(relativePath: { eq: "BhaskarGhosh.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ChintanMehta1: file(relativePath: { eq: "ChintanMehta.jpg" }) {
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
    MarkPaluch1: file(relativePath: { eq: "MarkPaluch.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MiroSalem1: file(relativePath: { eq: "MiroSalem.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    SriramSamu1: file(relativePath: { eq: "SriramSamu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ValerieParhamThompson1: file(relativePath: { eq: "ValerieParhamThompson.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`