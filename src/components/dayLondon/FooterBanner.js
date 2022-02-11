import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery, Link } from 'gatsby';

const ContactBanner = ({ title, description, btnText, btnLink }) => (
  <StaticQuery query={graphql`
     query {
      desktopFooterImage: file(relativePath: { eq: "banner/dss-summit-day-london-footer.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
     }
   `}
    render={data => {
      const sources = [
        data.desktopFooterImage.childImageSharp.fluid
      ];
      return (
        <BackgroundImage Tag="section" fluid={sources} id="contact-banner">
          <div className="inner">
            <div className="content organized-by">
              <h2 className="header">{title}</h2>
              {description && <h4>{description}</h4>}
            </div>
            {btnText && (
              btnLink && btnLink[0] === '/' ? (
                <Link to={btnLink} className="btn-rounded">{btnText}</Link>
              ) : (
                <a href={btnLink} className="btn-rounded">{btnText}</a>
              )
            )}
          </div>
        </BackgroundImage>
      );
    }}
  />
)


export default ContactBanner
