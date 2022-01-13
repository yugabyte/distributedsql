import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import ConferenceIcon from '../../assets/images/conference-icon.svg';
import { graphql, StaticQuery } from 'gatsby';


const PageBanner = ({ title, showCaptionBar }) => (
  <StaticQuery query={graphql`
    query {
      desktopBannerImage: file(relativePath: { eq: "banner/dss-asia-page-banner.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
     }
   `}
    render={
      data => {
        const sources = [
          data.desktopBannerImage.childImageSharp.fluid,
        ];
        return (
          <section className="code-conduct-bannner">
            <BackgroundImage Tag="div" fluid={sources} id="banner">
              <div className="inner">
                <header className="major">
                  <h1>{title}</h1>
                </header>
              </div>
            </BackgroundImage>
            {showCaptionBar &&
              <div className="banner-caption-bar">
                <img src={ConferenceIcon} alt="Conference icon" /> A free online conference to push the boundaries of cloud native RDBMS forward.
              </div>
            }
          </section>
        )
      }
    }
  />
)

export default PageBanner;
