import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import LandingSpeaker from '../components/LandingSpeaker'
import WhatIsDistributedSQL from '../components/WhatIsDistributedSQL'
import Sponsors from '../components/Sponsors'

class HomeIndex extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet
                    title="Distributed SQL Summit"
                    meta={[
                        { name: 'description', content: 'Distributed SQL Summit' },
                        { name: 'keywords', content: 'Distributed SQL, Postgres, YugaByte' },
                        { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
                    ]}>
                </Helmet>
                <Banner />
                <LandingSpeaker/>
                <WhatIsDistributedSQL/>
                <Sponsors />
            </Layout>
        )
    }
}

export default HomeIndex
