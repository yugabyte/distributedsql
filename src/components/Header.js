import React from 'react'
import { Link } from 'gatsby'
import LogoDark from '../assets/images/LogoDark.png'
// import Menu from './Menu'
const Header = (props) => (
    <header id="header" className="">
        <Link to="/" className="logo">
          <div className="cropped">
            <img src={LogoDark} alt="Distributed SQL Summit logo" />
          </div>
          <div className="logo-text">Distributed SQL<br />Summit <strong>2020</strong></div>
        </Link>
        <nav>
          <Link to="/schedule">Schedule</Link>
        </nav>
        {/* <nav>
          <Menu />
        </nav> */}
    </header>
)

export default Header
