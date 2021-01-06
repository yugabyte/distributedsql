import React from 'react'
import { Link } from 'gatsby'
import LogoDark from '../assets/images/LogoDark.png'

const Header = () => (
  <header id="header" className="">
      <Link to="/" className="logo">
        <div className="cropped">
          <img src={LogoDark} alt="Distributed SQL Summit logo" />
        </div>
        <div className="logo-text">Distributed SQL<br />Summit <strong>Asia</strong></div>
      </Link>
      <nav>
        <Link to="/schedule">Schedule</Link>
      </nav>
  </header>
)

export default Header
