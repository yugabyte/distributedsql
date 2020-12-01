import React from 'react'
import { navigate } from 'gatsby'

const RegisterForm = (props) => {

  const handleSubmit = (ev) => {
    let urlencoded = new URLSearchParams();
    Object.values(ev.target.elements).forEach(input => {
      if (input.value) {
        urlencoded.set(input.name, input.value);
      }
    });

    fetch('https://yugabyte-form-submission.herokuapp.com/distributedsql/registration', {
        method: 'POST',
        mode: 'cors',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'X-AUTH-TOKEN': '84c2c09d-2f20-48a5-b5e9-0068a95e97de'
				},
				body: urlencoded
			});
    navigate('/register/completed');
    ev.preventDefault();
  }

  return (
    <div id="register-form">
      <div className="inner">
        <aside className="register--aside">
          <form onSubmit={handleSubmit} id="form">
            {/* <a href="https://konf.co/event/cxCdB2WE/distributed-sql-summit" className="external-link">Already have a ticket? Enter here</a> */}
            <input name="firstName" required placeholder="First Name*" type="text" />
            <input name="lastName" required placeholder="Last Name*" type="text" />
            <input name="email" required placeholder="Work Email*" type="text" />
            <input name="jobTitle" required placeholder="Job Title*" type="text" />
            <input name="organization" required placeholder="Organization*" type="text" />
            <input name="reference" placeholder="How did you hear about us?" type="text" />
            <button className="btn-rounded" type="submit">
              Register
            </button>
          </form>
        </aside>
      </div>
    </div>
  );
}

export default RegisterForm
