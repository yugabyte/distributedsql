import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const featuredSpeakers = require('../data/data.json')

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
    <div className="speaker">
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
            {speakerPosition},<br />
            <strong>{props.speakerCompany}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingSpeaker = (props) => (
  <StaticQuery query={graphql`
    query {
      AllisonKunz1: file(relativePath: { eq: "AllisonKunz.png" }) {
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
      EthanUberseder1: file(relativePath: { eq: "EthanUberseder.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HaleDonertasli1: file(relativePath: { eq: "HaleDonertasli.jpeg" }) {
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
      JoeBeda1: file(relativePath: { eq: "JoeBeda.jpg" }) {
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
      JamesTaylor1: file(relativePath: { eq: "JamesTaylor.png" }) {
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
      PuneetDevadiga1: file(relativePath: { eq: "PuneetDevadiga.jpeg" }) {
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
          <header className="major">
            <h2>Meet the Speakers</h2>
          </header>
          <div className="speakerList">
            {landingSpeakerList}
          </div>          
        </div>        
      </section>
    )
  }}
/>
)

export default LandingSpeaker
