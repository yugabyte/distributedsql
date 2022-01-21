import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/banner/Header';
import EventSchedule from '../components/EventSchedule';
import ContactBanner from '../components/banner/Footer';

class Schedule extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Schedule | Distributed SQL Summit"
          meta={[
            { name: 'description', content: 'See the schedule for the list of speakers giving talks at the 2nd annual Distributed SQL Summit, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'keywords', content: 'Distributed SQL, Postgres, YugaByte, schedule, speakers, talks' },
            { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
            { name: 'og:locale', content: 'en_US' },
            { name: 'og:title', content: 'Schedule | Distributed SQL Summit 2020' },
            { name: 'og:description', content: 'See the schedule for the list of speakers giving talks at the 2nd annual Distributed SQL Summit, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:description', content: 'See the schedule for the list of speakers giving talks at the 2nd annual Distributed SQL Summit, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'twitter:image', content: 'https://asia.distributedsql.org/OGImage.png' },
            { name: 'twitter:image:src', content: 'https://asia.distributedsql.org/OGImage.png' },
            { name: 'twitter:site', content: '@yugabyte' },
            { name: 'twitter:creator', content: '@yugabyte' }
          ]}>
        </Helmet>
        <Banner title="Schedule" hideSecondary />
        <EventSchedule />
        <ContactBanner
          title="Questions?"
          btnText="Contact Us"
          btnLink="https://www.yugabyte.com/contact-us/"
        />
      </Layout>
    )
  }
}

export default Schedule
