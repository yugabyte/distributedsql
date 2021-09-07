import React from 'react'
import Img from 'gatsby-image'
import { graphql, Link, StaticQuery } from 'gatsby'

const WhatIsDistributedSQL = (props) => (
  <StaticQuery query={graphql`
     query {
       FooterImage: file(relativePath: { eq: "FooterImage.png" }) {
         childImageSharp {
           fluid(quality: 90, maxWidth: 4160) {
             ...GatsbyImageSharpFluid_withWebp
           }
         }
       },
       SQLImage: file(relativePath: { eq: "YB-SQLTransactions.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
       },
       ResilienceImage: file(relativePath: { eq: "YB-UltraResilience.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
       },
       ScalabilityImage: file(relativePath: { eq: "YB-MassiveScalability.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
       },
       GeoDistributionImage: file(relativePath: { eq: "YB-GeoDistribution.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
       },
     }
   `}
    render={data => {
      const sqlImage = data.SQLImage.childImageSharp.fluid;
      const resilienceImage = data.ResilienceImage.childImageSharp.fluid;
      const scalabilityImage = data.ScalabilityImage.childImageSharp.fluid;
      const geodistributeionImage = data.GeoDistributionImage.childImageSharp.fluid;
      return (
        <section id="footer-banner">
          <div className="container">
            <div className="value-props">
              <div className="value-props__item">
                <Img fluid={sqlImage} alt="SQL And Transactions" className="icon" />
                <h4>SQL AND<br />TRANSACTIONS</h4>
              </div>
              <div className="value-props__item">
                <Img fluid={resilienceImage} alt="ULTRA RESILIENCE" className="icon" />
                <h4>ULTRA<br />RESILIENCE</h4>
              </div>
              <div className="value-props__item">
                <Img fluid={scalabilityImage} alt="MASSIVE SCALABILITY" className="icon" />
                <h4>MASSIVE<br />SCALABILITY</h4>
              </div>
              <div className="value-props__item">
                <Img fluid={geodistributeionImage} alt="GEO DISTRIBUTED" className="icon" />
                <h4>GEO<br />DISTRIBUTED</h4>
              </div>
            </div>
            <div className="distributedsql-text">
                <h1>What is Distributed SQL?</h1>
                <div className="content">
                  <p>
                  A distributed SQL database is a single logical relational database that distributes data over multiple compute instances – each instance a node in a database cluster – and offers a SQL-compatible distributed query layer. All the data and transactions as well as query execution is distributed across the nodes of the cluster. Distributed SQL databases are resilient, massively scalable, and can be geo-distributed across availability zones, regions, and often cloud providers while also delivering ACID transactions and RDBMS capabilities. These databases are increasingly powering a new generation of always-on, highly available, hyper-scalable applications and microservices.
                    <a className="learn-more" href="https://blog.yugabyte.com/what-is-distributed-sql/"> Learn more about Distributed SQL</a>
                  </p>
                  <div className="actions">
                    <h4>Ready to join us?</h4>
                    <a href="https://www.eventbrite.com/e/distributed-sql-summit-2021-tickets-167058688033" className="btn-rounded" target="_blank" rel="noopener noreferrer">
                      Register
                    </a>
                  </div>
                </div>
            </div>
          </div>
         </section>
      )
    }
    }
   />
)

export default WhatIsDistributedSQL
