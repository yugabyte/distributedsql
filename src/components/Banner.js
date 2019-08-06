import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <div className="presents">
              <a href="https://yugabyte.com/">
                <Img style={{
                    width: '150px',
                    position:'relative'
                }}
                fluid={props.data.LogoSmall.childImageSharp.fluid} backgroundColor={'#777777'} />
              </a><span style={{
                position: 'absolute',
                top: '50px',
                left: '180px',
                display: 'block'
              }}>presents:</span></div>
            <header className="major">
                <h1>Distributed SQL Summit 2019</h1>
                <h2>
                    A full day of talks from experts on what it takes to build, deploy<br/>
                    and scale distributed SQL systems in the cloud and on Kubernetes
                </h2>
                <h2>
                  <Img style={{
                      width: '20px',
                      position:'relative'
                  }}
                  fluid={props.data.calendar.childImageSharp.fluid} backgroundColor={'#777777'} />
                  <span style={{
                    position: 'absolute',
                    top: '-4px',
                    left: '45px',
                    display: 'block'
                  }}>20th September</span>
                  <Img style={{
                      width: '20px',
                      position:'absolute',
                      top: '5px',
                      left: '235px'
                  }}
                  fluid={props.data.location.childImageSharp.fluid} backgroundColor={'#777777'} />
                  <span style={{
                    position: 'absolute',
                    top: '-2px',
                    left: '260px',
                    display: 'block'
                  }}>San Jose</span>
                </h2>
            </header>
            <div className="content">
                <ul className="actions">
                    <li>
                        <Link className="button bannerButton next" to="/agenda">View agenda</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'block',
            zIndex: 0
        }}>
        <Img fluid={props.data.bannerImage.childImageSharp.fluid} backgroundColor={'#777777'} />
        </div>
    </section>
)

export default Banner
