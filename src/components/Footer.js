import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner" style={{ padding: "2em 0 1em 0"}}>
            <div className="content">
                <ul className="actions">
                    <li><a rel="noopener noreferrer" href="https://twitter.com/yugabyte" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.facebook.com/yugabyte" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.linkedin.com/company/yugabyte/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer
