import React from 'react'

const Confirmation = (props) => {
  return (
    <div id="register-form">
      <div className="inner">
        <aside className="register--aside confirmation">
            <div className="thank-you-note">Thank you for registering!</div>
            <h2>Check your email for confirmation.</h2>
            <div className="reminder">Time to mark your calendar and tell your friends about it!</div>
            <div className="social-media">
                <ul className="actions">
                    <li><a rel="noopener noreferrer" href="https://github.com/yugabyte/yugabyte-db" className="icon alt"><i className="fa fa-github"></i></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.yugabyte.com/slack" className="icon alt"><i className="fa fa-slack"></i></a></li>
                    <li><a rel="noopener noreferrer" href="https://twitter.com/yugabyte" className="icon alt"><i className="fa fa-twitter"></i></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.linkedin.com/company/yugabyte/" className="icon alt"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </aside>
      </div>
    </div>
  );
}

export default Confirmation
