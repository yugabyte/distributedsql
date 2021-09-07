import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
// import EventSchedule from '../components/EventSchedule'
import ContactBanner from '../components/ContactBanner'

class Schedule extends React.Component {
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
                    title="Schedule | Distributed SQL Summit"
                    meta={[
                        { name: 'description', content: 'See the schedule for the list of speakers giving talks at the 3rd annual Distributed SQL Summit, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'keywords', content: 'Distributed SQL, Postgres, YugaByte, schedule, speakers, talks' },
                        { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
                        { name: 'og:locale', content: 'en_US' },
                        { name: 'og:title', content: 'Schedule | Distributed SQL Summit 2021' },
                        { name: 'og:description', content: 'See the schedule for the list of speakers giving talks at the 3rd annual Distributed SQL Summit, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'twitter:card', content: 'summary_large_image' },
                        { name: 'twitter:description', content: 'See the schedule for the list of speakers giving talks at the 3rd annual Distributed SQL Summit, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'twitter:site', content: '@yugabyte' },
                        { name: 'twitter:creator', content: '@yugabyte' }
                    ]}>
                </Helmet>
                <Banner title="Schedule" hideSecondary/>
                <div style={{padding: '30px 0px 15px'}}>
                    <a id="sched-embed" href="//distributedsqlsummit2021.sched.com/">View the Distributed SQL Summit 2021 schedule &amp; directory.</a><script type="text/javascript" src="//distributedsqlsummit2021.sched.com/js/embed.js"></script>                    
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

export default Schedule
