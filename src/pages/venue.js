import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pic03 from '../assets/images/hilton_san_jose.jpg'

const Venue = (props) => (
    <Layout>
        <Helmet>
            <title>Venue - Distributed SQL Summit</title>
            <meta name="description" content="Join us for Distributed SQL Summit at Hilton, San Jose" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>
                        Join us for Distributed SQL Summit - 2019
                        </h1>
                        <h3>The conference will take place in Hilton, San Jose.</h3>
                    </header>

                    <span className="image medium"><img src={pic03} alt="Chancery Pavillion" /></span>
                    <p>Connected to the San Jose McEnery Convention Center and situated at the hub of a city flourishing with industry, our Hilton San Jose hotel is an ideal choice for business travelers. Relax at our outdoor patio or refresh with a dip in our heated outdoor pool. With modern rooms and suites, a European-inspired restaurant, 24-hour fitness center and pool and extensive event space, the hotel offers all you need for a memorable trip to San Jose.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Venue
