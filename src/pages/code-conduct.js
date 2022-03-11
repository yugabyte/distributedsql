import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import HeaderBanner from '../components/banner/PageHeader';
import Description from '../components/CodeConductDescription';

class CodeConduct extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title='Code of Conduct for Distributed SQL Summit Asia'
          meta={[
            { name: 'description', content: 'Code of Conduct for DSS Asia (March 30-31, 2022).' },
            { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
            { name: 'og:locale', content: 'en_US' },
            { name: 'og:title', content: 'Code of Conduct for Distributed SQL Summit Asia' },
            { name: 'og:description', content: 'Code of Conduct for DSS Asia (March 30-31, 2022).' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Code of Conduct for Distributed SQL Summit Asia' },
            { name: 'twitter:description', content: 'Code of Conduct for DSS Asia (March 30-31, 2022).' },
            { name: 'twitter:image', content: 'https://asia.distributedsql.org/dss-asia-2022.png' },
            { name: 'twitter:site', content: '@yugabyte' },
            { name: 'twitter:creator', content: '@yugabyte' }
          ]}>
        </Helmet>
        <HeaderBanner
          title="Code of Conduct"
        />
        <Description />
      </Layout>
    )
  }
}

export default CodeConduct;
