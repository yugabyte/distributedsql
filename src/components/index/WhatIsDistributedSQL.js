import React from 'react';
import Img from 'gatsby-image';
import { graphql, Link, StaticQuery } from 'gatsby';

const WhatIsDistributedSQL = (props) => (
  <StaticQuery query={
    graphql`
      query {
       FooterImage: file(relativePath: { eq: "FooterImage.png" }) {
         childImageSharp {
           fluid(quality: 90, maxWidth: 4160) {
             ...GatsbyImageSharpFluid_withWebp
           }
         }
      },
      SQLImage: file(relativePath: { eq: "distributedsql/sql-transactions.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      ResilienceImage: file(relativePath: { eq: "distributedsql/ultra-resilience.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      ScalabilityImage: file(relativePath: { eq: "distributedsql/scalability.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      GeoDistributionImage: file(relativePath: { eq: "distributedsql/geo-distribution.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
     }
   `}
    render={
      data => {
        const sqlImage = data.SQLImage.childImageSharp.fluid;
        const resilienceImage = data.ResilienceImage.childImageSharp.fluid;
        const scalabilityImage = data.ScalabilityImage.childImageSharp.fluid;
        const geodistributeionImage = data.GeoDistributionImage.childImageSharp.fluid;
        return (
          <section id="distributedsql-section">
            <div className="inner container">
              <div className="value-props">
                <div className="value-props__item">
                  <Img fluid={sqlImage} alt="SQL And Transactions" className="icon" />
                  <h4>
                    SQL AND<br />TRANSACTIONS
                  </h4>
                </div>
                <div className="value-props__item">
                  <Img fluid={resilienceImage} alt="ULTRA RESILIENCE" className="icon" />
                  <h4>
                    ULTRA<br />RESILIENCE
                  </h4>
                </div>
                <div className="value-props__item">
                  <Img fluid={scalabilityImage} alt="MASSIVE SCALABILITY" className="icon" />
                  <h4>MASSIVE<br />SCALABILITY</h4>
                </div>
                <div className="value-props__item">
                  <Img fluid={geodistributeionImage} alt="GEO DISTRIBUTED" className="icon" />
                  <h4>
                    GEO<br />DISTRIBUTED
                  </h4>
                </div>
              </div>
              <div className="distributedsql-text">
                <h2>What is Distributed SQL?</h2>
                <div className="content">
                  <p>
                    Distributed SQL databases are relational databases that distribute data over multiple compute instances (each instance a node in a database cluster) and offer a SQL-compatible distributed query layer.
                  </p>

                  <p>
                    Distributed SQL databases are highly resilient, massively scalable, and can be geo-distributed across availability zones, regions, and often cloud providers.
                  </p>

                  <p>
                    Distributed SQL databases deliver strong consistency and ACID transactions with single-digit millisecond latency. These databases are increasingly powering a new generation of always-on, highly available, hyper-scalable applications and microservices.
                  </p>

                  {<div className="actions">
                    <h4>Ready to join us?</h4>
                    <Link to="https://www.eventbrite.com/e/252327376977" className="btn-rounded">
                      Register
                    </Link>
                  </div>}
                </div>
              </div>
            </div>
          </section>
        )
      }
    }
  />
)

export default WhatIsDistributedSQL;
