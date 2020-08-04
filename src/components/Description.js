import React from 'react'

const Description = () => (
  <section id="conf-description">
    <div className="inner">
      <div className="description">
        <div>
          <strong>Join us</strong> for the second annual Distributed SQL Summit, the event that brings together thought leaders, database builders, and application developers to discuss how to leverage distributed SQL systems to build applications and services in the cloud.
        </div>
        <a onClick={() => document.getElementById('topics').scrollIntoView({behavior: "smooth"})} className="learn-btn">What will you learn?</a>
      </div>
    </div>
  </section>
);

export default Description