import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Speaker from './Speaker'

const featuredSpeakers = require('../data/data.json')

const LandingSpeaker = (props) => (
  <StaticQuery query={graphql`
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
  `}
  render={data => {
    let landingSpeakerList = [];
    Object.values(featuredSpeakers).forEach((speakerInfo) => {
      const speakerPicture = data[speakerInfo.speakerPicture+'1'] ? data[speakerInfo.speakerPicture+ '1'].childImageSharp.fluid.src : speakerInfo.speakerPicture.src;
      landingSpeakerList.push(<Speaker
        key={'s'+speakerInfo.speakerId}
        speakerId={speakerInfo.speakerId}
        speakerName={speakerInfo.speakerName}
        speakerImage={speakerPicture}
        speakerPosition={speakerInfo.speakerPosition}
        speakerCompany={speakerInfo.speakerCompany}
        borderColor={speakerInfo.borderColor}
      />);
    });
    return (
      <section id="landingSpeaker" className="major">
        <div className="inner">                    
          <header className="major">
            <h2>Meet the Speakers</h2>
          </header>
          <div className="speakerList">
            {landingSpeakerList}
          </div>
          <div style={{marginTop: '45px'}}>
            <Link to="/speakers" className="btn-rounded secondary">View All Speakers</Link>
          </div>
        </div>
      </section>
    )
  }}
/>
)

export default LandingSpeaker
