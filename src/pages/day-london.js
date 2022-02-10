import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/dayLondon/Layout';
import HeaderBanner from '../components/dayLondon/HeaderBanner';
import Description from '../components/dayLondon/Description';
import Speaker from '../components/dayLondon/Speaker';
import Agenda from '../components/dayLondon/Agenda';
import FooterBanner from '../components/dayLondon/FooterBanner';

const speakersData = require('../data/dayLondon/Speakers.json');
const agendasData = require('../data/dayLondon/Agenda.json');

class DayLondon extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title='Distributed SQL Summit Day – London'
          meta={[
            { name: 'description', content: 'Join us on Distributed SQL Summit Day - London.' },
            { name: 'og:locale', content: 'en_US' },
            { name: 'og:title', content: 'Distributed SQL Summit Day - London' },
            { name: 'og:description', content: 'Join us on Distributed SQL Summit Day - London.' },
            { name: 'og:image', content: 'https://asia.distributedsql.org/dss-summit-day-london.png' },
            { name: 'og:image:secure_url', content: 'https://asia.distributedsql.org/dss-summit-day-london.png' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:description', content: 'Join us on Distributed SQL Summit Day - London.' },
            { name: 'twitter:image', content: 'https://asia.distributedsql.org/dss-summit-day-london.png' },
            { name: 'twitter:image:secure_url', content: 'https://asia.distributedsql.org/dss-summit-day-london.png' },
            { name: 'twitter:site', content: '@yugabyte' },
            { name: 'twitter:creator', content: '@yugabyte' }
          ]}>
        </Helmet>
        <HeaderBanner
          title='Distributed SQL Summit Day – London'
          showPresents
          showCaptionBar
        />
        <Description />

        <div className="speakers-section london-speakers">
          <div class="container">
            <h2>Meet the Speakers</h2>
            <div class="speakers-area">
              {
                speakersData.map((speakerData) => {
                  return <Speaker {...speakerData} />
                })
              }
            </div>
          </div>
        </div>
        <div id="agenda" style={{ position: 'relative', top: '-80px' }}></div>
        <div class="agenda-section london-agenda">
          <div class="container">
            <h2>Agenda</h2>
            <div class="agenda-area">
              <div class="agenda-row title-row">
                <div class="col col-1 col-start">Start</div>
                <div class="col col-2 col-speaker">Speaker</div>
                <div class="col col-3 col-session">Session</div>
                <div class="col col-4 col-info"></div>
              </div>
              {
                agendasData.map((agendaData) => {
                  return <Agenda {...agendaData} />
                })
              }
            </div>
          </div>
        </div>

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
