import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import HeaderBanner from '../components/index/HeaderBanner';
import Description from '../components/index/Description';
import WhatIsDistributedSQL from '../components/index/WhatIsDistributedSQL';
import WhoShouldAttend from '../components/index/WhoShouldAttend';
import FooterBanner from '../components/FooterBanner';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Distributed SQL Summit Asia"
          meta={[
            { name: 'description', content: 'Join us for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
            { name: 'og:locale', content: 'en_US' },
            { name: 'og:title', content: 'Distributed SQL Summit Asia' },
            { name: 'og:description', content: 'Join us for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'og:image', content: 'https://asia.distributedsql.org/dss-asia-2022.png' },
            { name: 'og:image:secure_url', content: 'https://asia.distributedsql.org/dss-asia-2022.png' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:description', content: 'Join us for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'twitter:image', content: 'https://asia.distributedsql.org/dss-asia-2022.png' },
            { name: 'twitter:image:secure_url', content: 'https://asia.distributedsql.org/dss-asia-2022.png' },
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
          btnLink="https://www.yugabyte.com/contact/"
        />
      </Layout>
    )
  }
}

export default HomeIndex;
