import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import LogoDark from '../assets/images/LogoDark.png'
import Menu from './Menu'
const Header = (props) => (
    <header id="header" className="">
        <span><Link to="/">Home</Link></span>
        <Link to="/" className="logo">
          <img src={LogoDark} alt="Distributed SQL Summit" />
        </Link>
        <span><Link to="/agenda">Agenda</Link></span>
        <nav>
          <Menu />
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
