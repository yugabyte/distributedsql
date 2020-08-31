import React from 'react'
import YBLogo from '../assets/images/yb-dark-logo.svg';
import YBLogoLight from '../assets/images/yb-light-logo.svg';
import SlackLogo from '../assets/images/svg/slack.svg'

const Footer = ({ dark, socialIcons }) => (
    <footer id="footer" className={dark ? "dark" : ""}>
        <div className="inner container">
            <a href="https://yugabyte.com" className="logo">
                <img src={dark ? YBLogoLight : YBLogo} width="186" height="50"/>
            </a>
            {socialIcons &&
                <div className="content">
                    <ul className="actions">
                        <li><a rel="noopener noreferrer" href="https://github.com/yugabyte/yugabyte-db" className="icon alt"><i className="fa fa-github"></i></a></li>
                        <li><a rel="noopener noreferrer" href="https://www.yugabyte.com/slack" className="icon alt"><SlackLogo style={{width: '24px', height: '24px', marginTop: '10px'}} /></a></li>
                        <li><a rel="noopener noreferrer" href="https://twitter.com/yugabyte" className="icon alt"><i className="fa fa-twitter"></i></a></li>
                        <li><a rel="noopener noreferrer" href="https://www.linkedin.com/company/yugabyte/" className="icon alt"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            }
            <div className="legal">
                <div className="copyright">© Yugabyte, Inc. 2020</div>
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
