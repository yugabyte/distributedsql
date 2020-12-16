import React from 'react'

const Description = () => (
  <section id="conf-description">
    <div className="inner">
      <div className="description">
        <div>
          <strong>Join us</strong> for Distributed SQL Summit Asia, the event that brings together thought leaders, database builders, and application developers to discuss how to leverage distributed SQL systems to build applications and services in the cloud.
        </div>
        <a onClick={() => document.getElementById('topics-section').scrollIntoView({behavior: "smooth"})} className="learn-btn">Why attend?</a>
      </div>
    </div>
  </section>
);

export default Description