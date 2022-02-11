import React from 'react';
import LogoSmall from '../../assets/images/logo/yb-light.svg';
import LogoDSSBanner from '../../assets/images/banner/dss-summit-day-london-logo.png';
import BackgroundImage from 'gatsby-background-image';
import ConferenceIcon from '../../assets/icons/event-white.svg';
import calenderIcon from '../../assets/icons/calendar.svg';
import mapIcon from '../../assets/icons/map-icon-orange.png';
import { graphql, Link, StaticQuery } from 'gatsby';

const DayLondonHeader = ({ title, showPresents, showCaptionBar }) => (
  <StaticQuery query={graphql`
    query {
      desktopBannerImage: file(relativePath: { eq: "banner/dss-summit-day-london.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
       LogoSmall: file(relativePath: { eq: "yb-light-logo.svg" }) {
         childImageSharp {
           fixed(width: 125, height: 125) {
             ...GatsbyImageSharpFixed
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
          <section className="day-london-conference" id="day-london-hero">
            <BackgroundImage Tag="div" fluid={sources} id="banner">
              <div className="inner">
                <header className="major">
                  <div className="logo-area">
                    <img src={LogoDSSBanner} alt="DSS Day London" />
                    <h1>{title}</h1>
                    {showPresents &&
                      <div className="presents">
                        <span className="text">presented by</span>
                        <a href="https://yugabyte.com/" title="Yugabyte">
                          <img style={{
                            width: '150px',
                            objectFit: 'contain'
                          }} src={LogoSmall} alt="YugaByte" />
                        </a>
                      </div>
                    }
                  </div>
                  <div className="schedule-area">
                    <ul className="details">
                      <li className="data-time">
                        <img className="icon" src={calenderIcon} alt="Calender" />
                        March 08, 2022 <br />
                        <span> 13:00 - 18:30 </span>
                      </li>
                      <li className="location">
                        <img className="icon" src={mapIcon} alt="Location Icon" />
                        <a href="https://www.codenode.live/" target="_blank" rel="noopener" title="Code.Node">Code.Node</a><br />
                        <span>10 South Place,</span><br />
                        <span> London EC2M 7EB</span>
                      </li>
                    </ul>
                    <div className="cta-bar">
                      {<Link to="https://www.eventbrite.com/e/distributed-sql-day-london-tickets-260672597757" className="btn-rounded">
                        Register
                      </Link>}
                    </div>
                  </div>
                </header>
              </div>
            </BackgroundImage>
            {showCaptionBar &&
              <div className="banner-caption-bar">
                <img src={ConferenceIcon} alt="Conference icon" /> We are excited to announce Yugabyte’s first London in-person event!
              </div>
            }
          </section>
        )
      }
    }
  />
)

export default DayLondonHeader;
