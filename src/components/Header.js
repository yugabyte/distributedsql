import React from 'react'
import { Link } from 'gatsby'
import DSSLogo from '../assets/images/DSS-2021-Logo-Small.svg';
import LogoDark from '../assets/images/LogoDark.svg'
// import Menu from './Menu'
const Header = (props) => (
    <header id="header" className="">
        <Link to="/" className="logo">
          <div className="cropped" style={{height: '40px'}}>
            <img src={DSSLogo} alt="Distributed SQL Summit logo" />            
          </div>          
        </Link>
        <nav>
          <Link to="/speakers">Speakers</Link>
          <Link to="/schedule">Schedule</Link>
        </nav>        
    </header>
)

export default Header
