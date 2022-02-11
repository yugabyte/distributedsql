import React from 'react';
import '../../assets/scss/main.scss';
import Header from './Header';
import ScrollTopButton from '../ScrollTopButton';
import Footer from './Footer';

class DayLondonLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: ''
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible
    })
  }

  render() {
    const { children, footerSettings = {} } = this.props;
    const { darkTheme, showSocialIcons = true } = footerSettings;
    return (
      <div className={`body ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
        <div id="wrapper">
          <Header />
          {children}
          <ScrollTopButton />
          <Footer dark={darkTheme} socialIcons={showSocialIcons} />
        </div>
      </div>
    )
  }
}

export default DayLondonLayout;
