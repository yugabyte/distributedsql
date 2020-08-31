import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Description from '../components/Description'
import LandingSpeaker from '../components/LandingSpeaker'
import Topics from '../components/Topics'
import Workshop from '../components/Workshop'
import WhatIsDistributedSQL from '../components/WhatIsDistributedSQL'
import ContactBanner from '../components/ContactBanner'

class HomeIndex extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet
                    title="Distributed SQL Summit"
                    meta={[
                        { name: 'description', content: 'Join us for the 2nd annual Distributed SQL Summit, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'keywords', content: 'Distributed SQL, Postgres, YugaByte' },
                        { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
                    ]}>
                </Helmet>
                <Banner
                    title="Distributed SQL Virtual Summit 2020"
                    showPresents
                    showCaptionBar
                />
                <Description />
                <LandingSpeaker/>
                <Topics />
                <Workshop />
                <WhatIsDistributedSQL/>
                <ContactBanner
                    title="Have a talk to propose?"
                    description="Or questions about the Distributed SQL Virtual Summit?"
                    btnText="Contact Us"
                    btnLink="https://yugabyte.com/contact-us"
                />
            </Layout>
        )
    }
}

export default HomeIndex
