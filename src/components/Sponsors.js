import React from 'react'
import YBLogo from "../assets/images/YBLogoDark.png"
import PostgresConfLogo from '../assets/images/PostgresConfLogo.png'

const Sponsors = (props) => (
  <section id="sponsors">
  <ul className="inner">
    <li className="content">
        <h2 className="header">
          Organized By
        </h2>
      <ul className="actions" >
          <li>
              <a style={{
                  border:'none'
              }} href="https://www.yugabyte.com/">
              <img style={{
                  width: '200px',
                  objectFit: 'contain'
              }} src={YBLogo} alt="YugaByte DB" />
              </a>
          </li>
      </ul>
    </li>
    <li className="content">
        <h2 className="header">
          Hosted By
        </h2>
      <ul className="actions">
          <li>
              <a style={{
                  border:'none'
              }} href="https://postgresconf.org/">
              <img style={{
                  width: '220px',
                  objectFit: 'contain'
              }} src={PostgresConfLogo} alt="PostgresConf" />
              </a>
          </li>
      </ul>
    </li>
  </ul>
  </section>
)


export default Sponsors
