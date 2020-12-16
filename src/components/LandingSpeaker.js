import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Speaker from './Speaker'

const featuredSpeakers = require('../data/data.json')

const mcListData = [
  {
    speakerPicture: 'GrishmaMehta',
    speakerName: 'Grishma Mehta',
    speakerId: 'grishma-mehta',
    speakerPosition: 'Visual Designer',
    speakerCompany: 'Yugabyte',
    borderColor: '#FB9216'
  },
  {
    speakerPicture: 'MichelleBrinich',
    speakerName: 'Michelle Brinich',
    speakerId: 'michelle-brinich',
    speakerPosition: 'Sr. Director, Marketing',
    speakerCompany: 'Yugabyte',
    borderColor: '#FF6E42'
  },
];

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
      AmeyBanarse1: file(relativePath: { eq: "AmeyBanarse.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      AnjulSahu1: file(relativePath: { eq: "AnjulSahu.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BhavinGandhi1: file(relativePath: { eq: "BhavinGandhi.jpg" }) {
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
      CharlesPretzer1: file(relativePath: { eq: "CharlesPretzer.png" }) {
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
      DanZentgraf1: file(relativePath: { eq: "DanZentgraf.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      JohnForrest1: file(relativePath: { eq: "JohnForrest.jpeg" }) {
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
      MichaelJames1: file(relativePath: { eq: "MichaelJames.png" }) {
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
      PeteDeJoy1: file(relativePath: { eq: "PeteDeJoy.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PrasadBopardikar1: file(relativePath: { eq: "PrasadBopardikar.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      QinYu1: file(relativePath: { eq: "QinYu.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PraveenKumarPurushothaman1: file(relativePath: { eq: "PraveenKumarPurushothaman.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      TaylorMull1: file(relativePath: { eq: "TaylorMull.jpeg" }) {
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
      CharlotteHamilton1: file(relativePath: { eq: "CharlotteHamilton.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GrishmaMehta1: file(relativePath: { eq: "GrishmaMehta.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MichelleBrinich1: file(relativePath: { eq: "MichelleBrinich.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}

  render={data => {
    const generateList = config => config.map(speakerInfo => {
      const speakerPicture = data[speakerInfo.speakerPicture+'1'] ? data[speakerInfo.speakerPicture+ '1'].childImageSharp.fluid.src : speakerInfo.speakerPicture.src;
      return (
        <Speaker
          key={'s'+speakerInfo.speakerId}
          speakerId={speakerInfo.speakerId}
          speakerName={speakerInfo.speakerName}
          speakerImage={speakerPicture}
          speakerPosition={speakerInfo.speakerPosition}
          speakerCompany={speakerInfo.speakerCompany}
          borderColor={speakerInfo.borderColor}
        />
      );
    });

    const landingSpeakerList = generateList(Object.values(featuredSpeakers));
    const mcList = generateList(mcListData);

    return (
      <section id="landingSpeaker" className="major">
        <div className="inner">                    
          <header className="major">
            <h2>Meet the Speakers</h2>
          </header>
          <div className="speakerList">
            {landingSpeakerList}
          </div>

          <header className="major">
            <h2>Meet the MCs</h2>
          </header>
          <div className="speakerList">
            {mcList}
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
