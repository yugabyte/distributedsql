import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import HeaderBanner from '../components/banner/Header';
import Description from '../components/Description';
import WhatIsDistributedSQL from '../components/WhatIsDistributedSQL';
import WhoShouldAttend from '../components/WhoShouldAttend';
import FooterBanner from '../components/banner/Footer';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Distributed SQL Summit Asia"
          meta={[
            { name: 'description', content: 'Join us for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'keywords', content: 'Distributed SQL, Postgres, YugaByte, database, asia' },
            { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
            { name: 'og:locale', content: 'en_US' },
            { name: 'og:title', content: 'Distributed SQL Summit Asia' },
            { name: 'og:description', content: 'Join us for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:description', content: 'Join us for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'twitter:image', content: 'https://asia.distributedsql.org/OGImage.png' },
            { name: 'twitter:site', content: '@yugabyte' },
            { name: 'twitter:creator', content: '@yugabyte' }
          ]}>
        </Helmet>
        <HeaderBanner
          title="Distributed SQL Summit Asia"
          showPresents
          showCaptionBar
        />
        <Description />
        <WhatIsDistributedSQL />
        <WhoShouldAttend />
        <FooterBanner
          title="Have a talk to propose?"
          description="Or questions about the Distributed SQL Virtual Summit?"
          btnText="Contact Us"
          btnLink="https://yugabyte.com/contact-us"
        />
      </Layout>
    )
  }
}

export default HomeIndex;
