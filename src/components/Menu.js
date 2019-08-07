import React from 'react'
import { Link } from 'gatsby'

const Menu = ({props}) => (
    <div id="newmenu">
        <div className="inner">
            <ul className="links">
                <li><Link className={ typeof window !== 'undefined' && window && window.location.pathname === '/schedule' ? 'active' : ''} to="/schedule">Schedule</Link></li>
            </ul>
        </div>
    </div>
)


export default Menu
