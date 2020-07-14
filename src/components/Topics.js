import React from 'react'
import { Link } from 'gatsby'

const Topics = ({mobile}) => (
    <aside className={mobile ? "topics mobile" : "topics"}>
        <header>
            <h3>What will you learn?</h3>
        </header>
        <div className="topics__content">
            <h3>Developers:</h3>
            <ul>
                <li>How to scale microservices globally while maintaining sub-second latency</li>
                <li>Scalability without sacrificing data integrity or transactional consistency</li>
                <li>How to migrate an existing relational application to a distributed SQL database</li>
            </ul>
            
            <h3>DevOps engineers:</h3>
            <ul>
                <li>How to migrate while capturing data from an existing monolithic database</li>
                <li>How leaders deploy and manage distributed SQL databases across multiple geographic zones</li>
                <li>Managing complexity in a Kubernetes world</li>
            </ul>
            <p className="topics__caption">
                And everyone will benefit from learning from industry leaders and experts in internet-scale, serverless, and distributed SQL.                
            </p>
            <p className="topics__caption"><strong>See what happened in 2019:</strong></p>
        </div>
        <div className="topics__archive">
            <Link to="/2019" className="btn-rounded secondary">                
                View 2019 Content
            </Link>
        </div>
    </aside>
)

export default Topics
