import React, {Component} from 'react';
import Nav from "../nav/Nav";
import Logo from "../nav/logo/Logo";
import Social from "../nav/social/Social";
import css from './Header.module.css';
import {connect} from "react-redux";
import commonLocalize from "../../store/localize/common";

class HeaderSecond extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      isModalOpen: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrolling, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrolling);
  }

  onScrolling = () => {
    if (window.scrollY > 10) {
      this.setState({isTop: false})
    } else {
      this.setState({isTop: true})
    }
  };

  toggleModal = () => {
    if (document.body.classList.contains("hamburger-active")) {
      document.body.classList.remove("hamburger-active");
    } else {
      document.body.classList.add("hamburger-active");
    }
  };

  onToggleLang = () => {
    this.props.toggleLang(this.props.language);
  };

  logout = () => {
    this.props.logout();
  };

  render() {
    return (
        <header className={this.state.isTop ? "" : css.scrollMenu}>
          <div className="container">
            <div className={css.mobileMenu}>
              <div className={css.toggleLangMobile} onClick={this.onToggleLang}>ru/eng</div>
              <div onClick={this.toggleModal} id="hamburger" className="hamburger-icon-wrapper">
                <span className="hamburger-icon"></span>
              </div>
              <div className="hamburger-menu">
                {
                  this.props.isAuth
                      ? <button onClick={this.logout} className={"btn btn-register"}>{commonLocalize.logout}</button>
                      : <button className="btn btn-register open-modal">{commonLocalize.authButton}</button>
                }
                <div id="menu" className="hamburger-menu-list">
                  <ul className="navbar--list">
                    <li className="navbar--list-item"><a href="#">{commonLocalize.main}</a></li>
                    <li className="navbar--list-item"><a href="#">{commonLocalize.partners}</a></li>
                    <li className="navbar--list-item"><a href="#">{commonLocalize.achievements}</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={css.navbar}>
              <Logo/>
              <Nav/>
              <Social isBottom={false}/>
              {this.props.isAuth
                  ? <button onClick={this.logout} className={"btn btn-register diplay-none"}>{commonLocalize.logout}</button>
                  : <button className="btn btn-register open-modal diplay-none">{commonLocalize.authButton}</button>
              }
              <div className={css.toggleLang} onClick={this.onToggleLang}>ru/eng</div>
            </div>
          </div>
        </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  language: state.localize.language
});

export default connect(mapStateToProps, {})(HeaderSecond);