import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, StaticQuery } from 'gatsby'

const WhatIsDistributedSQL = (props) => (
  <StaticQuery query={graphql`
     query {
       FooterImage: file(relativePath: { eq: "FooterImage.png" }) {
         childImageSharp {
           fluid(quality: 90, maxWidth: 4160) {
             ...GatsbyImageSharpFluid_withWebp
           }
         }
       }
     }
   `}
    render={data => {
      const imageData = data.FooterImage.childImageSharp.fluid
      return (
         <BackgroundImage Tag="section" fluid={imageData} id="footer-banner">
           <div className="inner">
               <h1>What is Distributed SQL?</h1>
               <div className="content">
                 <h2>
                     A distributed SQL database is similar to a NoSQL database in that it can globally distribute data and elastically scale. At the same time, it can also deliver strong consistency, ACID transactions and support the SQL syntax like you would expect from a monolithic SQL system.
                 </h2>
                 <ul className="actions">
                     <li>
                         <a className="button bannerButton next" href="https://postgresconf.org/accounts/sign_up"
                            target="_blank" rel="noopener noreferrer">Register</a>
                     </li>
                     <li>
                     <a className="button bannerButton next" href="https://www.yugabyte.com/contact-us/"
                        target="_blank" rel="noopener noreferrer">Contact Us</a>

                     </li>
                 </ul>
               </div>
           </div>
         </BackgroundImage>
      )
    }
    }
   />
)

export default WhatIsDistributedSQL
