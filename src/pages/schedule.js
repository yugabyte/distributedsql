import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import EventSchedule from '../components/EventSchedule'
import ContactBanner from '../components/ContactBanner'

class Schedule extends React.Component {
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
                <Banner title="Schedule" hideSecondary/>
                <EventSchedule />
                <ContactBanner
                    title="Join Us!"
                    btnText="Register Now"
                    btnLink="/register"
                />
            </Layout>
        )
    }
}

export default Schedule
