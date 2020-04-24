import React, {Component} from 'react';
import Nav from "../nav/Nav";
import Logo from "../nav/logo/Logo";
import Social from "../nav/social/Social";
import css from './HeaderSecond.module.css';
import {connect} from "react-redux";
import {logout} from "../../../store/reducers/authReducer";

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



  logout = () => {
    this.props.logout();
  };

  render() {
    return (
        <header className={this.state.isTop ? "" : css.scrollMenu}>
          <div className="container">
            <div className={css.mobileMenu}>
              <div onClick={this.toggleModal} id="hamburger" className="hamburger-icon-wrapper">
                <span className="hamburger-icon"></span>
              </div>
              <div className="hamburger-menu">
                {this.props.isAuth
                    ? <button onClick={this.logout} className={"btn btn-register"}>Выйти</button>
                    : <button className="btn btn-register open-modal">Вход/Регистрация</button>
                }
                <div id="menu" className="hamburger-menu-list">
                  <Nav/>
                </div>
              </div>
            </div>

            <div className={css.navbar}>
              <Logo/>
              <Nav/>
              <Social isBottom={false}/>
              {this.props.isAuth
                  ? <button onClick={this.logout} className={"btn btn-register diplay-none"}>Выйти</button>
                  : <button className="btn btn-register open-modal diplay-none">Вход/Регистрация</button>
              }
            </div>
          </div>
        </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {logout})(HeaderSecond);