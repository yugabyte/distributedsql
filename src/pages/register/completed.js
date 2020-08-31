import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import RegisterBanner from '../../components/RegisterBanner'
import Confirmation from '../../components/Confirmation'

class RegisterCompleted extends React.Component {
    render() {
        return (
            <Layout footerSettings={{
                darkTheme: true,
                showSocialIcons: false
            }}>
                <Helmet
                    title="Completed Registration - Distributed SQL Summit"
                    meta={[
                        { name: 'description', content: 'Completed Registration for Distributed SQL Summit, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'keywords', content: 'Register, Registration, Distributed SQL, Postgres, YugaByte' },
                        { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
                    ]}>
                </Helmet>
                <RegisterBanner noText />
                <Confirmation/>                
            </Layout>
        )
    }
}

export default RegisterCompleted
