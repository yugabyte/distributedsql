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
                    title="Register - Distributed SQL Summit"
                    meta={[
                        { name: 'description', content: 'Register for Distributed SQL Summit' },
                        { name: 'keywords', content: 'Register, Registration, Distributed SQL, Postgres, YugaByte' },
                        { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
                    ]}>
                </Helmet>
                <RegisterBanner />
                <RegisterForm/>                
            </Layout>
        )
    }
}

export default RegisterIndex
