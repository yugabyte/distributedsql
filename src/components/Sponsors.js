import React from 'react'
import YBLogo from "../assets/images/YBLogoDark.png"
import PostgresConfLog from '../assets/images/LogoDark.png'

const Sponsors = (props) => (
  <div id="sponsors" className="inner" style={{padding: '4em 6em'}}>
    <section style={{width: '50%', display: 'inline-block'}}>
      <header className="major" style={{marginBottom: '2em'}}>
        <h2>
          Organized By
        </h2>
      </header>
      <ul className="actions">
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
    </section>
    <section style={{width: '50%', display: 'inline-block'}}>
      <header className="major" style={{marginBottom: '2em'}}>
        <h2>
          Hosted By
        </h2>
      </header>
      <ul className="actions">
          <li>
              <a style={{
                  border:'none'
              }} href="https://postgresconf.org/">
              <img style={{
                  width: '300px',
                  objectFit: 'contain',
                  // padding: '.5em'
              }} src={PostgresConfLog} alt="Postgres Conf" />
              </a>
          </li>
      </ul>
    </section>
  </div>
)


export default Sponsors
