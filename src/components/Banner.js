import React from 'react'
import Img from "gatsby-image"

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <div className="presents">
              <a href="https://yugabyte.com/">
                <Img style={{
                    width: '180px',
                    position:'relative',
                    display: 'inline-block',
                    margin: '0 auto',
                    verticalAlign: 'top'
                }}
                fluid={props.data.LogoSmall.childImageSharp.fluid} backgroundColor={'#777777'} />
              </a><span style={{ 'margin-left': '10px' }}>presents:</span></div>
            <header className="major">
                <h1>Distributed SQL Summit</h1>
                <h2>
                  <Img style={{
                      width: '20px',
                      height: '22px',
                      display: 'inline-block',
                      margin: '0 auto',
                      verticalAlign: 'top'
                  }}
                  fluid={props.data.calendar.childImageSharp.fluid} backgroundColor={'#777777'} />
                  <span style={{margin: '-10px 10px', fontSize: '20px'}}>September 20, 2019</span>
                  <Img style={{
                      width: '15px',
                      height: '22px',
                      display: 'inline-block',
                      margin: '0 auto',
                      marginLeft: '10px',
                      verticalAlign: 'middle'
                  }}
                  fluid={props.data.location.childImageSharp.fluid} backgroundColor={'#777777'} />
                  <span style={{ marginLeft: '10px' }}>San Jose, CA</span>
                </h2>
            </header>

            <div className="content">
            </div>
            <div className="content">

            <h2>
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
