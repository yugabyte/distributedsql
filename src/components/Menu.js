import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = ({props}) => (
    <div id="newmenu">
        <div className="inner">
            <ul className="links">
                <li><Link className={ typeof window !== 'undefined' && window && window.location.pathname === '/#speakers' ? 'active' : ''} to="#speakers">Speakers</Link></li>
                <li><Link className={ typeof window !== 'undefined' && window && window.location.pathname === '/agenda' ? 'active' : ''} to="/agenda">Agenda</Link></li>
                <li><Link className={ typeof window !== 'undefined' && window && window.location.pathname === '/venue' ? 'active' : ''} to="/venue">Venue</Link></li>
                <li className="desktop"><Link className={ typeof window !== 'undefined' && window && window.location.hash === '#contact-us' ? 'active' : ''} to="#contact-us">Contact</Link></li>
            </ul>
        </div>
    </div>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
