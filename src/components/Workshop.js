import React from 'react'
import ServerStackIcon from '../assets/images/server-stack.png'

const Workshop = (props) => (
  <section id="workshop-details">
    <div className="container">
      <div className="event-date">
        Jan 20 — Workshop Details
      </div>
      <div className="workshop__content">
        <div className="title">
          <h2>Hands-on workshops by the Yugabyte team</h2>
          <img src={ServerStackIcon} alt="Server stack"/>
        </div>
        <div className="talks-card">
          <ul>
            <li>
              <h5>Going cloud native</h5>
              <p>Build a cloud-native application on a distributed SQL database</p>
            </li>
            <li>
              <h5>Achieving zero downtime</h5>
              <p>Surviving failures and performing day 2 operations</p>
            </li>
            <li>
              <h5>Migrating to distributed SQL</h5>
              <p>How to move from a traditional RDBMS to cloud native</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Workshop
