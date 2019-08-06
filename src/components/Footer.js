import React from 'react'
import LogoSmall from "../assets/images/LogoSmall.png"
import { Link } from 'gatsby'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner wide flex">
            <div className="flex2">
                <ul className="icons">
                    <li><a rel="noopener noreferrer" href="https://twitter.com/yugabyte" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.facebook.com/yugabyte" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.linkedin.com/company/yugabyte/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Distributed SQL</li><li>Gatsby Theme by: <a href="https://html5up.net">HTML5 UP</a></li>
                    <li>
                        <Link to="/code-of-conduct">Code of Conduct</Link>
                    </li>
                </ul>
            </div>
            <div className="flex2">
                <p>Distributed SQL is brought to you YugaByte.</p>
                <ul className="actions">
                    <li>
                        <a style={{
                            border:'none'
                        }} href="https://hasura.io/" rel="noopener noreferrer">
                        <img style={{
                            width: '150px',
                            objectFit: 'contain'
                        }} src={LogoSmall} alt="YugaByte" />
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </footer>
)

export default Footer
