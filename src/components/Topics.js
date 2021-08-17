import React from 'react'
import { Link } from 'gatsby'

const Topics = () => (
    <section id="topics">
        <header>
            <h2>Why Attend?</h2>
        </header>
        <div className="topics__content">
            <div>
                <h3>Developers:</h3>                 
                <ul>
                    <li>Start building applications with distributed SQL in minutes with no operational overhead</li>
                    <li>Learn best practices to migrate a relational application to a distributed SQL database</li>
                    <li>Learn how you can scale resilient microservices globally while maintaining sub-second latency</li>
                    <li>Join hands-on labs and workshops to build awesome apps</li>
                </ul>
            </div>
            <div>
                <h3>DevOps engineers:</h3>
                <ul>
                    <li>Learn how to keep the database up through snowstorms, datacenter fires, network failures, and other outages</li>
                    <li>Be prepared for Black Friday, Cyber Monday, and new product launch days</li>
                    <li>Hear how the largest enterprises are efficiently delivering a DBaaS to their developers</li>
                    <li>Apply best practices to deploy distributed SQL in a Kubernetes world</li>
                </ul>
            </div>
            <div>
                <h3>Architects:</h3>        
                <ul>
                    <li>Learn about emerging data architectures in different industries</li>
                    <li>Find out How leaders of F500 companies are tackling database modernization</li>
                    <li>Understand how you can future proof your data infrastructure with a 100% open source distributed SQL database</li>
                    <li>Minimize risk during large-scale database modernization efforts</li>
                </ul>
            </div>
        </div>
        <hr className="topics__separator" />
        <p className="topics__caption">
            <strong>Who Attends:</strong> DBA’s, Developers, DevOps Engineers, Architects, Business Leaders
        </p>
        <div className="topics__archive">
            <Link to="/2020" className="btn-rounded secondary">
                View 2020 Content
            </Link>
        </div>
    </section>
)

export default Topics
