import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, Link, StaticQuery } from 'gatsby'

const RegisterBanner = ({ noText }) => (
  <StaticQuery query={graphql`
    query {
      desktopBannerImage: file(relativePath: { eq: "Dist-SQL-Form-Header.png" }) {
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
          {noText ? (
            <div className="no-content"></div>
           ) : (
            <div className="inner">
              <Link to="/" className="back-link">
                  <svg xmlns="http://www.w3.org/2000/svg" className="chevron-left" viewBox="10 0 25 50" enable-background="new 0 0 50 50"><path d="M27.3 34.7L17.6 25l9.7-9.7 1.4 1.4-8.3 8.3 8.3 8.3z"/></svg>
                  <div className="link-text">Summit Page</div>
              </Link>
              <header className="major">
                <h1>Register for Distributed SQL Summit 2021</h1>              
                <div className="container">
                  <ul className="details">
                    <li>
                      <h3>September 15 <span className="accent">2021</span></h3>
                      <h3><span className="accent">Workshop Day</span></h3>
                    </li>
                    <li>
                      <h3>September 16 - 17 <span className="accent">2021</span></h3>
                      <h3><span className="accent">Conference Days</span></h3>
                    </li>
                    <li>
                        <h3>9am – 2pm <span className="accent">Pacific</span></h3>
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
