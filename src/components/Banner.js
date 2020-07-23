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
                      <h3>September 16 - 17</h3>
                      <small>2020</small>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>10am – 2pm <span><small>Pacific</small></span></h3>
                      <h3>1pm – 5pm <span><small>Eastern</small></span></h3>
                    </div>
                  </li>
                  <li>
                    <Link to="/register" className="btn-rounded" style={{marginTop: '15px'}}>
                      Register
                    </Link>
                  </li>
                </ul>
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
