import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import HeaderBanner from '../components/banner/DayLondonHeader';
import Description from '../components/DescriptionDayLondon';
import FooterBanner from '../components/banner/DayLondonFooter';

class DayLondon extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="DSS Day London"
          meta={[
            { name: 'description', content: 'Join us on Distributed SQL Summit Day - London.' },
            { name: 'og:locale', content: 'en_US' },
            { name: 'og:title', content: 'Distributed SQL Summit Asia' },
            { name: 'og:description', content: 'Join us on Distributed SQL Summit Day - London.' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:description', content: 'Join us on Distributed SQL Summit Day - London.' },
            { name: 'twitter:image', content: 'https://asia.distributedsql.org/dss-summit-day-london.png' },
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
        <FooterBanner
          title="Have any questions?"
          btnText="Contact Us"
          btnLink="https://www.yugabyte.com/contact/"
        />
      </Layout>
    )
  }
}

export default DayLondon;
