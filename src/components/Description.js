import React from 'react'

const Description = () => (
  <section id="conf-description">
    <div className="inner">
      <div className="description">
        <div style={{fontSize: '18px'}}>
          For years, developers, operators, and architects have driven the business forward by delivering always-on, highly available applications and services. You have accelerated digital transformation by embracing the cloud, Kubernetes, and microservices; now it’s time to bring your database to the cloud native era. Distributed SQL Summit 2021 is bringing together builders, ops, architects and thought leaders for three days of learning, networking, and inspiration.
        </div>
        <a onClick={() => document.getElementById('topics').scrollIntoView({behavior: "smooth"})} className="learn-btn">Why attend?</a>
      </div>
    </div>
  </section>
);

export default Description