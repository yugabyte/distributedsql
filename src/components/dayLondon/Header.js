import React from 'react';
import { Link } from 'gatsby';
import LogoDSS from '../../assets/images/header/dss-summit-logo.png';
import Logoyugabytedb from '../../assets/images/yb-dark-logo.svg';

const Header = () => (
  <header id="header">
    <Link to="/" className="logo">
      <div className="cropped">
        <img src={LogoDSS} className="dss-logo" alt="Distributed SQL Summit logo" />
        <span className="divider"></span>
        <img src={Logoyugabytedb} className="yogabyte-logo" alt="YugaByte DB Logo" />
      </div>
    </Link>
    <nav>
      <Link to="#agenda">Agenda</Link>
    </nav>
  </header>
)

export default Header;
