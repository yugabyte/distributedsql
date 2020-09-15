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
        </div>
      </section>
    )
  }}
/>
)

export default LandingSpeaker
