import React from 'react'
import Topics from './Topics'
import { Link, StaticQuery, graphql } from 'gatsby'

const speakerData = require('../data/data.json')

const featuredSpeakers = [
  {
    "speakerPicture": "LianghongXu",
    "speakerName": "Lianghong Xu",
    "speakerId": "lianghong-xu",
    "speakerPosition":["Engineering Manager", "Storage and Caching Team"],
    "speakerCompany":"Pinterest",
    "borderColor":"#D03A6C"
  },
  {
    "speakerPicture": "KarthikRanganathan",
    "speakerName": "Karthik Ranganathan",
    "speakerId": "karthik-ranganathan",
    "speakerPosition":"CTO and Co-Founder",
    "speakerCompany":"Yugabyte",
    "borderColor":"#885DD7"
  },
  {
    "speakerPicture": "SidChoudhury",
    "speakerName": "Sid Choudhury",
    "speakerId": "sid-choudhury",
    "speakerPosition":"SVP of Product",
    "speakerCompany":"Yugabyte",
    "borderColor":"#FF6E42"
  },
  {
    "speakerPicture": "MehrdadNurolahzade",
    "speakerName": "Mehrdad Nurolahzade",
    "speakerId": "mehrdad-nurolahzade",
    "speakerPosition":"Platform Engineer",
    "speakerCompany":"Twitter",
    "borderColor":"#1da4f2"
  }
];

const Speaker = (props) => {
  const borderColor = props.borderColor || '#000041';
  let speakerPosition = props.speakerPosition;
  if (typeof props.speakerPosition !== 'string') {
    const arr = []
    props.speakerPosition.forEach((x, index) => {
      if (index !== 0) {
        arr.push(<br />);
      }
      arr.push(x);
    });
    speakerPosition = arr;
  }
  return (
    <div className="speakerList" >
      <div className="profile" key={props.speakerId} id={props.speakerId}>
        <div className="speakerImage">
          <img src={props.speakerImage} alt="profile" style={{border: `3px solid ${borderColor}`}}/>
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
          <div className="profileBio">
            {speakerPosition},&nbsp;
            <strong>{props.speakerCompany}</strong>
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
      LianghongXu1: file(relativePath: { eq: "LianghongXu.png" }) {
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
      SidChoudhury1: file(relativePath: { eq: "SidChoudhury.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MehrdadNurolahzade1: file(relativePath: { eq: "MehrdadNurolahzade.jpeg" }) {
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
    let landingSpeakerList = [];
    featuredSpeakers.forEach((speakerInfo) => {
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
          <Topics />
          <div className="description">
            <p>
            <strong>Join us</strong> for the second annual Distributed SQL Summit, the event that brings together thought leaders, database builders, and application developers to discuss how to leverage distributed SQL systems to build applications and services in the cloud.
            </p>
          </div>        
          <header className="major">
              <h2>
                Featured Speakers
              </h2>
              <aside>Full schedule coming soon</aside>
          </header>
          <div className="speakerListWrappar">
            {landingSpeakerList}
          </div>
        </div>        
      </section>
    )
  }}
/>
)

export default LandingSpeaker
