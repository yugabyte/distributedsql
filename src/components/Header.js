import React from 'react'
import { Link } from 'gatsby'
import LogoDark from '../assets/images/LogoDark.png'
import Menu from './Menu'
const Header = (props) => (
    <header id="header" className="">
        <Link to="/2019" className="logo">
          <img src={LogoDark} alt="Distributed SQL Summit" />
        </Link>
        <span><Link to="/2019/schedule">Schedule</Link></span>
        <nav>
          <Menu />
        </nav>
    </header>
)

export default Header
