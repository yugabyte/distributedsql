import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const speakerData = require('../data/data.json')

const Speaker = (props) => {
  return (
    <div className="speakerList" >
      <div className="profile" key={props.speakerId} id={props.speakerId}>
        <div className="speakerImage">
          <img src={props.speakerImage} alt="profile"/>
        </div>
        <div className="speakerProfile">
          <div className="profileWrapper">
            <div className="profileName">
              {
                props.speakerId?
              <Link to={`/speaker/${props.speakerId}`}>
              {props.speakerName}
              </Link>
              :
              props.speakerName
              }

            </div>
          </div>
          <div className="profielBio">
            {props.speakerPosition}
            <br />
            {props.speakerCompany}
          </div>
        </div>
      </div>
    </div>
  )
};

const LandingSpeaker = (props) => (
  <StaticQuery query={graphql`
    query {
      JamesWatters1: file(relativePath: { eq: "JamesWatters.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      JeffRothschild1: file(relativePath: { eq: "JeffRothschild.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      VictoriaDudin1: file(relativePath: { eq: "VictoriaDudin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      KadirOzdemir1: file(relativePath: { eq: "KadirOzdemir.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      RamRavichandran1: file(relativePath: { eq: "RamRavichandran.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      TanmaiGopal1: file(relativePath: { eq: "TanmaiGopal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      VishalKathuria1: file(relativePath: { eq: "VishalKathuria.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      KamalGupta1: file(relativePath: { eq: "KamalGupta.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CampbellFraser1: file(relativePath: { eq: "CampbellFraser.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HarrisonFisk1: file(relativePath: { eq: "HarrisonFisk.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      RyanScheidter1: file(relativePath: { eq: "RyanScheidter.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PeterZaitsev1: file(relativePath: { eq: "PeterZaitsev.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      DhrubaBorthakur1: file(relativePath: { eq: "DhrubaBorthakur.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      RobertWinslow1: file(relativePath: { eq: "RobertWinslow.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GuillermoTantachuco1: file(relativePath: { eq: "GuillermoTantachuco.jpg" }) {
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
      RajkumarSen1: file(relativePath: { eq: "RajkumarSen.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      KarthikRanganathan1: file(relativePath: { eq: "KarthikRanganathan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MuruGuruswamy1: file(relativePath: { eq: "MuruGuruswamy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
  render={data => {
    var landingSpeakerList = []
    const sortedSpeakers = [...speakerData].filter((v=>v.featured===true)).sort((a,b)=>a.sortOrder-b.sortOrder)
    sortedSpeakers.forEach(speaker => {
      const speakerData =  speaker
      try {
        const speakerPicture = data[speakerData.speakerPicture+'1'] ?
          data[speakerData.speakerPicture+'1'].childImageSharp.fluid.src :
          speakerData.speakerPicture.src;
        if(speakerPicture) {
          landingSpeakerList.push(
            <Speaker
              key={'s'+speakerData.speakerId}
              speakerId={speakerData.speakerId}
              speakerName={speakerData.speakerName}
              speakerImage={speakerPicture}
              speakerPosition={speakerData.speakerPosition}
              speakerCompany={speakerData.speakerCompany}
            />
          )
        }
      } catch (error) {
        console.error(error)
      }
    });
    return (
      <section id="landingSpeaker" className="major">
        <div className="inner">
          <header className="major">
              <h2>
                Speakers
              </h2>
          </header>
          <div className="speakerListWrppar">
            {landingSpeakerList}
          </div>
        </div>
      </section>
    )
  }}
/>
)

export default LandingSpeaker
