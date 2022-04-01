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
          title='Distributed SQL Summit Asia'
          meta={[
            { name: 'description', content: 'Join us for DSS Asia (March 30-31, 2022), a free online conference to push the boundaries of cloud native RDBMS.' },
            { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
            { name: 'og:locale', content: 'en_US' },
            { name: 'og:title', content: 'Distributed SQL Summit Asia' },
            { name: 'og:description', content: 'Join us for DSS Asia (March 30-31, 2022), a free online conference to push the boundaries of cloud native RDBMS.' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Distributed SQL Summit Asia' },
            { name: 'twitter:description', content: 'Join us for DSS Asia (March 30-31, 2022), a free online conference to push the boundaries of cloud native RDBMS.' },
            { name: 'twitter:image', content: 'https://asia.distributedsql.org/dss-asia-2022-on-demand.jpg' },
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
