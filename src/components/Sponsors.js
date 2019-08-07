import React from 'react'
import YBLogo from "../assets/images/YBLogoDark.png"
import PostgresConfLogo from '../assets/images/PostgresConfLogo.png'

const Sponsors = (props) => (
  <div id="sponsors" className="inner sponsors-inner">
    <div className="organized-by">
      <header className="major" style={{margin: '0 auto'}}>
        <h2>
          Organized By
        </h2>
      </header>
      <ul className="actions" style={{textAlign: 'center'}}>
          <li>
              <a style={{
                  border:'none'
              }} href="https://www.yugabyte.com/">
              <img style={{
                  width: '275px',
                  objectFit: 'contain'
              }} src={YBLogo} alt="YugaByte DB" />
              </a>
          </li>
      </ul>
    </div>
    <div className="hosted-by">
      <header className="major" style={{margin: '0 auto'}}>
        <h2>
          Hosted By
        </h2>
      </header>
      <ul className="actions" style={{textAlign: 'center'}}>
          <li>
              <a style={{
                  border:'none'
              }} href="https://postgresconf.org/">
              <img style={{
                  width: '300px',
                  objectFit: 'contain'
              }} src={PostgresConfLogo} alt="PostgresConf" />
              </a>
          </li>
      </ul>
    </div>
  </div>
)


export default Sponsors
