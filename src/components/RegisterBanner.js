import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, Link, StaticQuery } from 'gatsby'

const RegisterBanner = ({ confirmed }) => (
  <StaticQuery query={graphql`
    query {
      desktopBannerImage: file(relativePath: { eq: "DSS-Asia-Desktop-Header-5.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileBannerImage: file(relativePath: { eq: "DSS-Asia-Mob-Header.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
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
        <BackgroundImage Tag="section" fluid={sources} id="register-banner">
          {confirmed ? (
            <div className="confirmation">
              <div className="inner">
                <h1>You're going to Distributed SQL Virtual Summit <span className="accent">Asia</span></h1>
              </div>
            </div>
           ) : (
            <div className="inner">
              <Link to="/" className="back-link">
                  <svg xmlns="http://www.w3.org/2000/svg" className="chevron-left" viewBox="10 0 25 50" enable-background="new 0 0 50 50"><path d="M27.3 34.7L17.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z"/></svg>
                  <div className="link-text">Summit Page</div>
              </Link>
              <header className="major">
                <h1>Register for Distributed SQL Virtual Summit <span className="accent">Asia</span></h1>              
                <div className="container">
                  <ul className="details">
                    <li>
                      <div>
                        <h3>Jan 20, 2021 <span className="accent">Workshop Day</span></h3>
                        <h3>Jan 21 - 22, 2021 <span className="accent">Conference Days</span></h3>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>10am – 3pm <span className="accent">IST</span></h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </header>
            </div>
          )}
        </BackgroundImage>
      )
    }
    }
  />
)

export default RegisterBanner
