import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <div className="presents">
              <a href="https://yugabyte.com/">
                <Img style={{
                    width: '180px',
                    position:'relative'
                }}
                fluid={props.data.LogoSmall.childImageSharp.fluid} backgroundColor={'#777777'} />
              </a><span style={{
                position: 'absolute',
                top: '24px',
                left: '210px',
                display: 'block',
                fontSize: '24px',
                fontWeight: '300'
              }}>presents:</span></div>
            <header className="major">
                <h1>Distributed SQL Summit</h1>

                <h2>
                  <Img style={{
                      width: '19px',
                      height: '20px',
                      position:'relative'
                  }}
                  fluid={props.data.calendar.childImageSharp.fluid} backgroundColor={'#777777'} />
                  <span style={{
                    position: 'absolute',
                    top: '-6px',
                    left: '50px',
                    display: 'block'
                  }}>September 20, 2019</span>
                  <Img style={{
                      width: '15px',
                      height: '20px',
                      position:'absolute',
                      top: '1px',
                      left: '275px'
                  }}
                  fluid={props.data.location.childImageSharp.fluid} backgroundColor={'#777777'} />
                  <span style={{
                    position: 'absolute',
                    top: '-6px',
                    left: '300px',
                    display: 'block'
                  }}>San Jose, CA</span>
                </h2>
            </header>

            <div className="content">
            </div>
            <div className="content">

            <h2>
                A full day of talks from experts on what it takes to build, deploy<br/>
                and scale distributed SQL databases in the cloud and on Kubernetes
            </h2>
                <ul className="actions">
                    <li>
                        <Link className="button bannerButton next" to="/agenda">Register</Link>
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
