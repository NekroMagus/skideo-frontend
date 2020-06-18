import React, {Component} from 'react';
import css from './HeaderFirst.module.css';
import Logo from "../../common/nav/logo/Logo";
import Nav from "../../common/nav/Nav";
import Social from "../../common/nav/social/Social";
import {connect} from "react-redux";
import {logout} from "../../../store/reducers/authReducer";
import commonLocalize from "../../../store/localize/common";

class HeaderFirst extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      isModalOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrolling, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrolling);
  }

  onScrolling = () => {
    if (window.scrollY > 10) {
      this.setState({
        ...this.state,
        isTop: false
      });
    } else {
      this.setState({
        ...this.state,
        isTop: true
      });
    }
  };

  toggleModal = () => {
    if (document.body.classList.contains("hamburger-active")) {
      document.body.classList.remove("hamburger-active");
    } else {
      document.body.classList.add("hamburger-active");
    }
  };

  logout = () => {
    this.props.logout();
  };

  render() {
    return (
        <header className={`${this.state.isTop ? css.top : css.headerBg}`}>
          <div className="container">
            <div className={css.mobileMenu}>
              <div onClick={this.toggleModal} id="hamburger" className="hamburger-icon-wrapper">
                <span className="hamburger-icon"></span>
              </div>
              <div className="hamburger-menu">
                {
                  this.props.isAuth
                    ? <button onClick={this.logout} className={"btn btn-register"}>{commonLocalize.exit}</button>
                    : <button onClick={this.props.onOpenModal}
                              className="btn btn-register open-modal">{commonLocalize.authButton}</button>
                }
                <div id="menu" className="hamburger-menu-list">
                  <ul className="navbar--list">
                    <li className="navbar--list-item"><a href="#">{commonLocalize.main}</a></li>
                    <li className="navbar--list-item"><a href="#">{commonLocalize.partners}</a></li>
                    <li className="navbar--list-item"><a href="#">{commonLocalize.achievements}</a></li>
                    <li className="navbar--list-item"><a onClick={this.props.onOpenModal}>{commonLocalize.registration}</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={css.navbar}>
              <Logo/>
              <Nav language={this.state.language}/>
              <Social isBottom={false}/>
              {
                this.props.isAuth
                  ? <button onClick={this.logout} className={"btn btn-register display-none"}>{commonLocalize.exit}</button>
                  : <button onClick={this.props.onOpenModal}
                            className="btn btn-register open-modal diplay-none">{commonLocalize.authButton}</button>
              }
              <div className={css.toggleLang} onClick={this.props.toggleLang}>ru/eng</div>
            </div>
          </div>
        </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {logout})(HeaderFirst);