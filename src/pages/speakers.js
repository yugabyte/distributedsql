import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import ContactBanner from '../components/ContactBanner'

class Speakers extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://distributedsqlsummit2021.sched.com/js/embed.js";
        script.async = true;

        document.body.appendChild(script);
    }
    render() {
        return (
            <Layout>
                <Helmet
                    title="Speakers | Distributed SQL Summit"
                    meta={[
                        { name: 'description', content: 'See who is speaking at the 3rd annual Distributed SQL Summit, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'keywords', content: 'Distributed SQL, Postgres, YugaByte, schedule, speakers, talks' },
                        { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
                        { name: 'og:locale', content: 'en_US' },
                        { name: 'og:title', content: 'Speakers | Distributed SQL Summit 2021' },
                        { name: 'og:description', content: 'See who is speaking at the 3rd annual Distributed SQL Summit, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'twitter:card', content: 'summary_large_image' },
                        { name: 'twitter:description', content: 'See who is speaking at the 3rd annual Distributed SQL Summit, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'twitter:site', content: '@yugabyte' },
                        { name: 'twitter:creator', content: '@yugabyte' }
                    ]}>
                </Helmet>
                <Banner title="Speakers" hideSecondary/>
                <div style={{padding: '30px 0px 15px'}}>                  
                    <a id="sched-embed" href="https://distributedsqlsummit2021.sched.com/directory/speakers">View the Distributed SQL Summit 2021 schedule &amp; directory.</a>
                </div>
                <ContactBanner
                    title="Join Us!"
                    btnText="Learn More"
                    btnLink="https://yugabyte.com"
                />
                
            </Layout>
        )
    }
}

export default Speakers
