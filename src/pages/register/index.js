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
                        { name: 'description', content: 'Register for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'keywords', content: 'Register, Asia, Registration, Distributed SQL, Postgres, YugaByte' },
                        { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
                        { name: 'og:locale', content: 'en_US' },
                        { name: 'og:title', content: 'Register | Distributed SQL Summit Asia' },
                        { name: 'og:description', content: 'Register for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'twitter:card', content: 'summary_large_image' },
                        { name: 'twitter:description', content: 'Register for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'twitter:image', content: 'https://asia.distributedsql.org/OGImage.png' },
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
