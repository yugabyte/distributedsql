import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import HeaderBanner from '../components/banner/PageHeader';
import FooterBanner from '../components/banner/Footer';

class Agenda extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "//dssasia2022.sched.com/js/embed.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <Layout>
        <Helmet
          title='Agenda for Distributed SQL Summit Asia'
          meta={[
            { name: 'description', content: 'Discover sessions by leading distributed SQL experts and register for hands-on practical workshops at DSS Asia (March 30-31, 2022)' },
            { name: 'og:locale', content: 'en_US' },
            { name: 'og:title', content: 'Agenda for Distributed SQL Summit Asia' },
            { name: 'og:description', content: 'Discover sessions by leading distributed SQL experts and register for hands-on practical workshops at DSS Asia (March 30-31, 2022).' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Agenda for Distributed SQL Summit Asia' },
            { name: 'twitter:description', content: 'Discover sessions by leading distributed SQL experts and register for hands-on practical workshops at DSS Asia (March 30-31, 2022)' },
            { name: 'twitter:image', content: 'https://asia.distributedsql.org/dss-asia-2022-on-demand.jpg' },
            { name: 'twitter:site', content: '@yugabyte' },
            { name: 'twitter:creator', content: '@yugabyte' }
          ]}>
        </Helmet>
        <HeaderBanner
          title="Agenda"
        />
        <div style={{ padding: '30px 0px 15px' }}>
          <a id="sched-embed" href="//dssasia2022.sched.com/" title="View the Distributed SQL Summit Asia 2022 schedule" target="_blank" rel="noopener">
            View the Distributed SQL Summit Asia 2022 schedule &amp; directory.
          </a>
        </div>
        <FooterBanner
          title="Any questions?"
          btnText="Contact Us"
          btnLink="https://www.yugabyte.com/contact/"
        />
      </Layout>
    )
  }
}

export default Agenda;
