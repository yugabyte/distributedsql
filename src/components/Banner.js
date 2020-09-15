import React from 'react'
import LogoSmall from "../assets/images/LogoSmall.png"
import BackgroundImage from 'gatsby-background-image'
import  ConferenceIcon from '../assets/images/conference-icon.svg'
import { graphql, Link, StaticQuery } from 'gatsby'


const Banner = ({ title, showPresents, showCaptionBar, hideSecondary }) => (
  <StaticQuery query={graphql`
    query {
      desktopBannerImage: file(relativePath: { eq: "Dist-SQL-Desktop-Header.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileBannerImage: file(relativePath: { eq: "Dist-SQL-Mobile-Header.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
       LogoSmall: file(relativePath: { eq: "LogoSmall.png" }) {
         childImageSharp {
           fixed(width: 125, height: 125) {
             ...GatsbyImageSharpFixed
           }
         }
       }
     }
   `}
    render={data => {
      const sources = [
        data.mobileBannerImage.childImageSharp.fluid,
        {
          ...data.desktopBannerImage.childImageSharp.fluid,
          media: `(min-width: 701px)`,
        },        
      ];
      return (
        <BackgroundImage Tag="section" fluid={sources} id="banner">
          <div className="inner">            
            <header className="major" style={showCaptionBar ? {marginBottom: '54px'} : null}>
              <h1>{title}</h1>
              {showPresents && 
                <div className="presents">
                  <span className="text">PRESENTED BY</span>
                  <a href="https://yugabyte.com/">
                    <img style={{
                      width: '150px',
                      objectFit: 'contain'
                    }} src={LogoSmall} alt="YugaByte" />
                  </a>
                </div>
              }
              <div className="container">
                <ul className="details">
                  <li>
                    <div>
                      <h3>Sept 15, 2020 <span className="accent">Workshop Day</span></h3>
                      <h3>Sept 16 - 17, 2020 <span className="accent">Conference Days</span></h3>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>10am – 3pm <span className="accent">Pacific</span></h3>
                    </div>
                  </li>
                </ul>
                <div className="cta-bar">
                  {!hideSecondary && <Link to="/schedule" className="btn-rounded secondary">
                      View Schedule
                  </Link>}
                  <Link to="/register" className="btn-rounded">
                    Register
                  </Link>
                </div>
                <a href="https://konf.co/event/cxCdB2WE/distributed-sql-summit" className="external-link">Already have a ticket? Enter here</a>
              </div>
            </header>
            {showCaptionBar && 
              <div className="banner-caption-bar">
                <img src={ConferenceIcon} /> A free online conference to push the boundaries of cloud native RDBMS forward.
              </div>
            }
          </div>          
        </BackgroundImage>
      )
    }
    }
  />
)

export default Banner
