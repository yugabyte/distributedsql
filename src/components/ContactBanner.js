import React from 'react'
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby'

const ContactBanner = (props) => (
  <StaticQuery query={graphql`
     query {
      desktopFooterImage: file(relativePath: { eq: "Dist-SQL-Desktop-Footer.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileFooterImage: file(relativePath: { eq: "Dist-SQL-Mobile-Footer.png" }) {
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
        data.mobileFooterImage.childImageSharp.fluid,
        {
          ...data.desktopFooterImage.childImageSharp.fluid,
          media: `(min-width: 701px)`,
        },
      ];
      return (
      <BackgroundImage Tag="section" fluid={sources} id="contact-banner">
        <div className="inner">
          <div className="content organized-by">
            <h2 className="header">
              Have a talk to propose?
            </h2>
            <h4>Or questions about the Distributed SQL Virtual Summit?</h4>
          </div>
          <a href="https://yugabyte.com/contact-us" className="btn-rounded">Contact Us</a>
        </div>
      </BackgroundImage>
      );
    }}
  />
)


export default ContactBanner
