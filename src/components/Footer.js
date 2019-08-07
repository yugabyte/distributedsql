import React from 'react'
import OrganizedBy from "../assets/images/OrganizedBy.png"

const Footer = (props) => (
    <footer id="footer">
        <div className="inner wide flex" style={{ padding: "2em 0 1em 0"}}>
            <div className="flex2">
                <ul className="icons">
                    <li><a rel="noopener noreferrer" href="https://twitter.com/yugabyte" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.facebook.com/yugabyte" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.linkedin.com/company/yugabyte/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                </ul>
            </div>
            <div className="flex1">
                <ul className="actions">
                    <li>
                        <a style={{
                            border:'none'
                        }} href="https://yugabyte.com/" rel="noopener noreferrer">
                        <img style={{
                            width: '150px',
                            objectFit: 'contain'
                        }} src={OrganizedBy} alt="YugaByte" />
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </footer>
)

export default Footer
