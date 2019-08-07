import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Img from "gatsby-image"
import { Link, graphql } from 'gatsby'

const speakerData = require('../data/data.json')

const SpeakerPage = (props) => {
    var speakerName = ''
    var speakerPicture = null
    try {
    speakerPicture = props.data[props.pageContext.speakerPicture].childImageSharp.fluid
    } catch (error) {

    }
    try {
        speakerName = props.pageContext.speakerName
    } catch (error) {

    }

    console.log(speakerData, props.pageContext.speakerPicture)
    const talks = speakerData.filter((speaker) => speaker.speakerPicture === props.pageContext.speakerPicture);
    console.log(talks)
    return(
    <Layout>
      <Helmet>
        <title>{speakerName} - Distributed SQL Summit</title>
        <meta name="description" content="Distributed SQL Summit Speakers" />
      </Helmet>
      <div id="main" className="alt">
          <section id="one">
              <div className="inner">
                  <header style={{
                      width: '100%',
                      minHeight: '300px',
                  }} className="major workshopDetails">
                      <div className="image workleft" style={{
                          width:'225px',
                          height:'225px',
                          minWidth: '225px',
                          objectFit: 'cover',
                          maxWidth: '300px',
                      }}>
                      {
                          speakerPicture ?
                          <Img style={{

                          }} fluid={speakerPicture} alt={speakerName} />
                          :null
                      }
                      </div>
                      <div>
                        <h1
                        style={{
                            margin: '0',
                            paddingTop: '50px',
                        }}
                        >{speakerName}

                        </h1>
                        <h3 style={{
                            fontSize: '18px',
                            color: "#777",
                            textTransform: 'uppercase',
                        }}>{props.pageContext.speakerPosition}</h3>
                        {
                            props.pageContext.twitter ?
                            <a style={{
                                textIndent: '-1000px',
                                fontSize: '26px',
                            }} rel="noopener noreferrer" target="_blank" href={`https://twitter.com/${props.pageContext.twitter}`} className="fa-twitter icon">&nbsp;</a>
                            :null
                        }
                        <h2 style={{
                            fontSize: '18px',
                            color: '#e535ab',
                            textTransform: 'uppercase',
                        }}>About</h2>
                        <p>
                        {props.pageContext.speakerDescription}
                        </p>


                        {talks.map((talk) => {
                          return (
                            <div key={'talk-' + talk.speakerId}>
                              <h2 style={{
                                  fontSize: '18px',
                                  color: '#e535ab',
                                  position: 'relative',
                                  textTransform: 'uppercase',
                              }}>
                              { talk.type }

                                <div style={{
                                    left: '-40px',
                                    top: '5px',
                                    position: 'absolute',
                                }} className="pinkCircleSmall pinkCircleSmall1">
                                </div>
                              </h2>
                              <h3 style={{
                                  fontSize: '18px',
                              }}>{talk.talkTitle}</h3>
                              <p>{talk.talkAbstract}</p>
                              <h5>Timings: {talk.time}</h5>
                            </div>
                          )
                        })}

                      </div>
                      </header>
                        <p>&lt; <Link to="/schedule">Back to Schedule page</Link></p>

                        <div style={{clear:'both'}} />

              </div>
          </section>
      </div>
    </Layout >
  )
}

export default SpeakerPage

export const query1 = graphql`
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
    PeterZaitsev: file(relativePath: { eq: "PeterZaitsev.png" }) {
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
