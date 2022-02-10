import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import HeaderBanner from '../components/HeaderBanner';
import Description from '../components/codeConduct/Description';

class CodeConduct extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Code of Conduct"
          meta={[
            { name: 'description', content: 'Code of Conduct for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'og:locale', content: 'en_US' },
            { name: 'og:title', content: 'Code of Conduct for Distributed SQL Summit Asia' },
            { name: 'og:description', content: 'Code of Conduct for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'og:image', content: 'https://asia.distributedsql.org/dss-asia-2022.png' },
            { name: 'og:image:secure_url', content: 'https://asia.distributedsql.org/dss-asia-2022.png' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:description', content: 'Code of Conduct for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'twitter:image', content: 'https://asia.distributedsql.org/dss-asia-2022.png' },
            { name: 'twitter:image:secure_url', content: 'https://asia.distributedsql.org/dss-asia-2022.png' },
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
