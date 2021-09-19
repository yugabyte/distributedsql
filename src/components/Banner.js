import React from 'react'
import LogoSmall from "../assets/images/LogoSmall.png"
import BackgroundImage from 'gatsby-background-image'
import  ConferenceIcon from '../assets/images/conference-icon.svg'
import { graphql, StaticQuery } from 'gatsby'


const Banner = ({ title, showPresents, showCaptionBar, hideSecondary }) => (
  <StaticQuery query={graphql`
    query {
      desktopBannerImage: file(relativePath: { eq: "DSS-2021-Desktop-Header.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileBannerImage: file(relativePath: { eq: "DSS-2021-Mobile-Header.png" }) {
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
                    <img
                      style={{
                        width: '150px',
                        objectFit: 'contain'
                      }}                      
                      src={LogoSmall}
                      alt="YugaByte"
                    />
                  </a>
                </div>
              }
              <div className="container">
                <ul className="details">
                  <li>
                    <div>                      
                      <h3>Sept 21 - 23, <span className="accent">2021</span> ·  Virtual  ·  50+ Speakers</h3>
                    </div>
                  </li>                  
                </ul>
                <div className="cta-bar">
                  {!hideSecondary && (
                    <a href="https://www.eventbrite.com/e/distributed-sql-summit-2021-tickets-167058688033" target="_blank" rel="noopener noreferrer" className="btn-rounded secondary">
                        Register Now
                    </a>
                  )}
                </div>
              </div>
            </header>
            {showCaptionBar && 
              <div className="banner-caption-bar">
                <img alt="conference-icon" src={ConferenceIcon} /> Sessions by Fiserv, GM, Kroger, Rakuten, Wipro, and more. New sessions coming soon!
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
