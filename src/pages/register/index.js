import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import RegisterBanner from '../../components/RegisterBanner'
import RegisterForm from '../../components/RegisterForm'

class RegisterIndex extends React.Component {
    render() {
        return (
            <Layout footerSettings={{
                darkTheme: true
            }}>
                <Helmet
                    title="Register | Distributed SQL Summit"
                    meta={[
                        { name: 'description', content: 'Register for the 2nd annual Distributed SQL Summit, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'keywords', content: 'Register, Registration, Distributed SQL, Postgres, YugaByte' },
                        { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
                        { name: 'og:locale', content: 'en_US' },
                        { name: 'og:title', content: 'Register | Distributed SQL Summit 2020' },
                        { name: 'og:description', content: 'Register for the 2nd annual Distributed SQL Summit, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'twitter:card', content: 'summary_large_image' },
                        { name: 'twitter:description', content: 'Register for the 2nd annual Distributed SQL Summit, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'twitter:site', content: '@yugabyte' },
                        { name: 'twitter:creator', content: '@yugabyte' }
                    ]}>
                </Helmet>
                <RegisterBanner />
                <RegisterForm/>                
            </Layout>
        )
    }
}

export default RegisterIndex
