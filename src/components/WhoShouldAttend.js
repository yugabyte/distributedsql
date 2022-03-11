import React from 'react';

const WhoShouldAttend = () => (
  <section id="attend-section" className="attend">
    <header className="inner">
      <h2>
        Who should attend DSS Asia and what will they learn?
      </h2>
    </header>
    <div className="inner attend__content">
      <div>
        <h3>Developers:</h3>
        <ul>
          <li>
            Scale resilient microservices globally while maintaining sub-second latency
          </li>
          <li>
            Migrate a relational application to a distributed SQL database
          </li>
          <li>
            Start building applications with distributed SQL in minutes, with no operational overhead
          </li>
          <li>
            Join hands-on labs and workshops to build awesome applications
          </li>
        </ul>
      </div>
      <div>
        <h3>DevOps:</h3>
        <ul>
          <li>
            Learn how to keep the database up through snowstorms, datacenter fires, network failures, and other outage risks
          </li>
          <li>
            Be prepared for Black Friday, Cyber Monday, and new product launch days
          </li>
          <li>
            Discover how the largest enterprises are efficiently delivering DBaaS to their developers
          </li>
          <li>
            Apply best practices to deploy distributed SQL in Kubernetes
          </li>
        </ul>
      </div>
      <div>
        <h3>Architects:</h3>
        <ul>
          <li>
            Learn about emerging data architectures in different industries
          </li>
          <li>
            Find out how leaders of F500 companies tackle database modernization
          </li>
          <li>
            Understand how to future proof your data infrastructure with a 100% open source distributed SQL database
          </li>
          <li>
            Minimize risk during large-scale database modernization projects
          </li>
        </ul>
      </div>
    </div>
    <hr className="separator" />
    <p className="attend__caption">
      <strong>Relevant for:</strong> DBA’s, developers, DevOps engineers, architects, business leaders, and anyone with an interest in Distributed SQL.
    </p>
    <div className="attend__archive">
      <a href="/code-conduct/" className="btn-rounded">
        DSS Code of Conduct
      </a>
    </div>
  </section>
)

export default WhoShouldAttend;
