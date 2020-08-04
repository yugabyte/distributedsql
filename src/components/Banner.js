import React from 'react'
import LogoSmall from "../assets/images/LogoSmall.png"
import BackgroundImage from 'gatsby-background-image'
import { graphql, Link, StaticQuery } from 'gatsby'


const Banner = (props) => (
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
            <header className="major">
              <h1>Distributed SQL Virtual Summit 2020</h1>
              <div className="presents">
                <span className="text">PRESENTED BY</span>
                <a href="https://yugabyte.com/">
                  <img style={{
                    width: '150px',
                    objectFit: 'contain'
                  }} src={LogoSmall} alt="YugaByte" />
                </a>
              </div>
              <div className="container">
                <ul className="details">
                  <li>
                    <div>
                      <h3>Sept 15 - 17 <span className="accent">2020</span></h3>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>10am – 2pm PT<span className="accent">(1pm - 5pm ET)</span></h3>
                    </div>
                  </li>                  
                </ul>                
                <Link to="/register" className="btn-rounded" style={{marginTop: '20px'}}>
                  Register
                </Link>                
              </div>
            </header>
          </div>
        </BackgroundImage>
      )
    }
    }
  />
)

export default Banner
