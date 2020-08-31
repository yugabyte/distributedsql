import React from 'react'
import Helmet from 'react-helmet'
import '../assets/scss/main.scss'
import Header from './Header'
import ScrollTopButton from './ScrollTopButton'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: ''
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    handleToggleMenu() {
        alert('menu')
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        const { children, footerSettings = {} } = this.props
        const { darkTheme, showSocialIcons = true } = footerSettings;
        return (
            <div className={`body ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Helmet
                    title="Distributed SQL Summit"
                    meta={[
                        { name: 'description', content: 'Distributed SQL Summit' },
                        { name: 'keywords', content: 'Distributed SQL, Postgres, YugaByte' },
                        { name: 'google-site-verification', content: 'IrJBdGcrNYjaVXTiMFpMckF5pC2MsY9x6nt8TgMtmGE' },
                        { name: 'image', content: 'https://distributedsql.org/Icon.png' },
                        { name: 'og:url', content: 'https://distributedsql.org' },
                        { name: 'og:title', content: 'Distributed SQL Summit' },
                        { name: 'og:description', content: 'Distributed SQL Summit' },
                        { name: 'twitter:image', content: 'https://distributedsql.org/OGImage.jpg' },
                        { name: 'twitter:image', content: 'https://distributedsql.org/OGImage.jpg' },
                        { name: 'og:image:secure_url', content: 'https://distributedsql.org/OGImage.jpg' },
                        { name: 'twitter:image:secure_url', content: 'https://distributedsql.org/OGImage.jpg' },
                        { name: 'twitter:card', content: 'summary_large_image' },
                        { name: 'twitter:creator', content: 'yugabyte' },
                    ]}
                />
                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {children}
                    <ScrollTopButton />
                    <Footer dark={darkTheme} socialIcons={showSocialIcons} />
                </div>
            </div>
        )
    }
}

export default Layout
