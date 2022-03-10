import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import HeaderBanner from '../components/banner/PageHeader';
import FooterBanner from '../components/banner/Footer';

class CodeConduct extends React.Component {
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
          title="Agenda for Distributed SQL Summit Asia"
          meta={[
            { name: 'description', content: 'Agenda for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'keywords', content: 'Distributed SQL, Postgres, YugaByte, database, asia' },
            { name: 'og:locale', content: 'en_US' },
            { name: 'og:title', content: 'Agenda for Distributed SQL Summit Asia' },
            { name: 'og:description', content: 'Agenda for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:description', content: 'Agenda for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
            { name: 'twitter:image', content: 'https://asia.distributedsql.org/dss-asia-2022.png' },
            { name: 'twitter:site', content: '@yugabyte' },
            { name: 'twitter:creator', content: '@yugabyte' }
          ]}>
        </Helmet>
        <HeaderBanner
          title="Agenda"
        />
        <div style={{ padding: '30px 0px 15px' }}>
          <a id="sched-embed" href="//dssasia2022.sched.com/">View the Distributed SQL Summit Asia 2022 schedule &amp; directory.</a>
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

export default CodeConduct;
