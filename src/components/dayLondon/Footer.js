import React from 'react'
import YBLogo from '../../assets/images/yb-dark-logo.svg';
import YBLogoLight from '../../assets/images/yb-light-logo.svg';
import SlackLogo from '../../assets/images/svg/slack.svg';

const Footer = ({ dark, socialIcons }) => (
  <footer id="footer" className={dark ? "dark" : ""}>
    <div className="inner container">
      <a href="https://yugabyte.com" className="logo">
        <img alt="Yugabyte Logo" src={dark ? YBLogoLight : YBLogo} width="186" height="50" />
      </a>
      {socialIcons &&
        <div className="content">
          <ul className="actions">
            <li>
              <a rel="noopener" href="https://github.com/yugabyte/yugabyte-db" className="icon alt github">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a rel="noopener" href="https://communityinviter.com/apps/yugabyte-db/register" className="icon alt slack">
                <SlackLogo style={{ width: '24px', height: '24px', marginTop: '10px' }} />
              </a>
            </li>
            <li>
              <a rel="noopener" href="https://twitter.com/yugabyte" className="icon alt twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a rel="noopener" href="https://www.linkedin.com/company/yugabyte/" className="icon alt linkedin">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      }
      <div className="legal">
        <div className="copyright">© Yugabyte, Inc. 2022</div>
        <ul className="support-links">
          <li><a href="https://www.yugabyte.com/support-policy/">Terms</a></li>
          <li>|</li>
          <li><a href="http://www.yugabyte.com/privacy-policy/">Privacy</a></li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
