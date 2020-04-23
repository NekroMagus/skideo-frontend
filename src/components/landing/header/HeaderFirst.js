import React, {Component} from 'react';
import css from './HeaderFirst.module.css';
import Logo from "../../common/nav/logo/Logo";
import Nav from "../../common/nav/Nav";
import Social from "../../common/nav/social/Social";
import {connect} from "react-redux";
import {logout} from "../../../store/reducers/authReducer";

class HeaderFirst extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      isModalOpen: false
    }
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

  componentDidMount() {
    window.addEventListener('scroll', this.onScrolling, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrolling);
  }

  render() {
    return (
        <header className={`${this.state.isTop ? css.top : css.headerBg}`}>

          <div className="container">

            <div className={css.mobileMenu}>
              <div onClick={this.toggleModal} id="hamburger" className="hamburger-icon-wrapper">
                <span className="hamburger-icon"></span>
              </div>
              <div className="hamburger-menu">
                {this.props.isAuth
                    ? <button onClick={this.logout} className={"btn btn-register"}>Выйти</button>
                    : <button onClick={this.props.onOpenModal}
                              className="btn btn-register open-modal">Вход/Регистрация</button>
                }
                <div id="menu" className="hamburger-menu-list">
                  <ul className="navbar--list">
                    <li className="navbar--list-item"><a href="#">Главная</a></li>
                    <li className="navbar--list-item"><a href="#">Наши партнеры</a></li>
                    <li className="navbar--list-item"><a href="#">Достижения</a></li>
                    <li className="navbar--list-item"><a onClick={this.props.onOpenModal}>Регистрация</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={css.navbar}>
              <Logo/>
              <Nav/>
              <Social isBottom={false}/>

              {
                this.props.isAuth
                  ? <button onClick={this.logout} className={"btn btn-register display-none"}>Выйти</button>
                  : <button onClick={this.props.onOpenModal}
                            className="btn btn-register open-modal diplay-none">Вход/Регистрация</button>
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

export default connect(mapStateToProps, {logout})(HeaderFirst);