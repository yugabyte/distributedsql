import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Speaker from './Speaker'

const featuredSpeakers = require('../data/data.json')

const LandingSpeaker = (props) => (
  <StaticQuery query={graphql`
    query {
      AlanCaldera1: file(relativePath: { eq: "AlanCaldera.png" }) {
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
      ChiragNarang1: file(relativePath: { eq: "ChiragNarang.jpeg" }) {
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
      LaurentGil1: file(relativePath: { eq: "LaurentGil.jpeg" }) {
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
      PeteDejoy1: file(relativePath: { eq: "PeteDejoy.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      VirajParekh1: file(relativePath: { eq: "VirajParekh.jpg" }) {
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
          <hr className="separator" />
          <div className="stay-tuned">Stay tuned for more speaker announcements!</div>
        </div>
      </section>
    );
  }}
/>
)

export default LandingSpeaker
