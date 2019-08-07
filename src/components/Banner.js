import React from 'react'
import Img from "gatsby-image"
import LogoSmall from "../assets/images/LogoSmall.png"
import BackgroundImage from 'gatsby-background-image'
import { graphql, StaticQuery } from 'gatsby'


const Banner = (props) => (
  <StaticQuery query={graphql`
     query {
       bannerImage: file(relativePath: { eq: "bannerImage.jpg" }) {
         childImageSharp {
           fluid(quality: 90, maxWidth: 4160) {
             ...GatsbyImageSharpFluid_withWebp
           }
         }
       }
       LogoSmall: file(relativePath: { eq: "LogoSmall.png" }) {
         childImageSharp {
           fixed(width: 125, height: 125) {
             ...GatsbyImageSharpFixed
           }
         }
       }
       calendar: file(relativePath: { eq: "calendar.png" }) {
         childImageSharp {
           fluid(maxWidth: 500) {
             ...GatsbyImageSharpFluid
           }
         }
       }
       location: file(relativePath: { eq: "location.png" }) {
         childImageSharp {
           fluid(maxWidth: 500) {
             ...GatsbyImageSharpFluid
           }
         }
       }
     }
   `}
    render={data => {
      const imageData = data.bannerImage.childImageSharp.fluid

      return (
         <BackgroundImage Tag="section" fluid={imageData} id="banner">
           <div className="inner">
             <div className="presents">
               <a href="https://yugabyte.com/">
                 <img style={{
                     width: '150px',
                     objectFit: 'contain'
                 }} src={LogoSmall} alt="YugaByte" />
               </a><span style={{ marginLeft: '10px', verticalAlign: 'top' }}>presents:</span></div>
             <header className="major">
                 <h1>Distributed SQL Summit</h1>
                 <h2>
                   <Img style={{
                       width: '20px',
                       height: '22px',
                       display: 'inline-block',
                       margin: '0 auto',
                       verticalAlign: 'middle'
                   }}
                   fluid={data.calendar.childImageSharp.fluid} backgroundColor={'#777777'} />
                   <span style={{margin: '-10px 10px', fontSize: '20px'}}>September 20, 2019</span>
                   <a href="https://goo.gl/maps/bF9CU8Ccb8gG8z4s5"
                       target="_blank" rel="noopener noreferrer">
                     <Img style={{
                         width: '15px',
                         height: '22px',
                         display: 'inline-block',
                         margin: '0 auto',
                         marginLeft: '10px',
                         verticalAlign: 'middle'
                     }}
                     fluid={data.location.childImageSharp.fluid} backgroundColor={'#777777'} />
                   <span style={{ marginLeft: '10px', verticalAlign: 'middle' }}>Hilton, San Jose, CA</span></a>
                 </h2>
             </header>
             <div className="content">
               <h2 className="sub-text">
                   A full day of talks from experts on what it takes to build, deploy
                   and scale distributed SQL databases in the cloud and on Kubernetes
               </h2>
                   <ul className="actions">
                       <li>
                           <a className="button bannerButton next" href="https://postgresconf.org/accounts/sign_up"
                              target="_blank" rel="noopener noreferrer">Register</a>
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

export default Banner
