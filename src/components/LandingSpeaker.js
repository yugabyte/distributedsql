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

const LandingSpeaker = ({data}) => {

  var landingSpeakerList = []
  const sortedSpeakers = [...speakerData].filter((v=>v.featured===true)).sort((a,b)=>a.sortOrder-b.sortOrder)

  sortedSpeakers.forEach(speaker => {
    const speakerData =  speaker
    try {
    if(data[speakerData.speakerPicture+'1']){
      landingSpeakerList.push(
      <Speaker
        key={'s'+speakerData.speakerId}
        speakerId={speakerData.speakerId}
        speakerName={speakerData.speakerName}
        speakerImage={data[speakerData.speakerPicture+'1'].childImageSharp.fluid.src}
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
              Speakers 2019
            </h2>
        </header>
        <div className="speakerListWrppar">
          {landingSpeakerList}
        </div>
      </div>
    </section>
)}

const query = graphql`
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
    MaheshTyagarajan1: file(relativePath: { eq: "MaheshTyagarajan.jpg" }) {
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
    RyanScheidter1: file(relativePath: { eq: "RyanScheidter.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    PeterZaitsev1: file(relativePath: { eq: "PeterZaitsev.jpg" }) {
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
    GuilermoTantachuco1: file(relativePath: { eq: "GuilermoTantachuco.jpg" }) {
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
    KannanMuthukkaruppan1: file(relativePath: { eq: "KannanMuthukkaruppan.jpg" }) {
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

  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <LandingSpeaker data={data} {...props} />}
  />
)

// export default LandingSpeaker
