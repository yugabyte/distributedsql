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
                    title="Completed Registration | Distributed SQL Summit"
                    meta={[
                        { name: 'description', content: 'Completed Registration for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'keywords', content: 'Register, Registration, Asia, Distributed SQL, Postgres, YugaByte' },
                        { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
                        { name: 'og:locale', content: 'en_US' },
                        { name: 'og:title', content: 'Completed Registration | Distributed SQL Summit Asia' },
                        { name: 'og:description', content: 'Completed Registration for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'twitter:card', content: 'summary_large_image' },
                        { name: 'twitter:description', content: 'Completed Registration for Distributed SQL Summit Asia, a free online conference to push the boundaries of cloud native RDBMS forward.' },
                        { name: 'twitter:site', content: '@yugabyte' },
                        { name: 'twitter:image', content: 'https://asia.distributedsql.org/OGImage.png' },
                        { name: 'twitter:creator', content: '@yugabyte' }
                    ]}>
                </Helmet>
                <RegisterBanner confirmed />
                <Confirmation/>                
            </Layout>
        )
    }
}

export default RegisterCompleted
