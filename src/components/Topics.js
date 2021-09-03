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
                    <li>How to scale microservices globally while maintaining sub-second latency</li>
                    <li>Scalability without sacrificing data integrity or transactional consistency</li>
                    <li>How to migrate an existing relational application to a distributed SQL database</li>
                </ul>
            </div>
            <div>
            <h3>DevOps engineers:</h3>
            <ul>
                <li>How to migrate while capturing data from an existing monolithic database</li>
                <li>How leaders deploy and manage distributed SQL databases across multiple geographic zones</li>
                <li>Managing complexity in a Kubernetes world</li>
            </ul>
            </div>
        </div>
        <hr className="topics__separator" />
        <p className="topics__caption">
            <strong>And everyone will benefit from learning from industry leaders and experts in internet-scale, serverless, and distributed SQL.</strong>
        </p>
        <div className="topics__archive">
            <a href="https://distributedsql.org/2019/" className="btn-rounded secondary">
                View 2019 Content
            </a>
        </div>
    </section>
)

export default Topics
