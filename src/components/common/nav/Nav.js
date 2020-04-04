import React, {Component} from "react";
import css from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../../store/reducers/authReducer";

class Nav extends Component {

  onClickLogout = () => {
    this.props.logout();
  };

  render() {
    return (
        <ul className={css.barNav}>
          <li className={css.nav}>
            <NavLink className={css.navLink} to="/">Главная</NavLink>
          </li>
          <li className={css.nav}>
            {this.props.isAuth
                ? <NavLink className={css.navLink} to={"/profile"}>Профиль</NavLink>
                : <NavLink className={css.navLink} to="/">Наши партнеры</NavLink>}
          </li>
          <li className={css.nav}>
            <NavLink className={css.navLink} to="/">Достижения</NavLink>
          </li>
          <li className={css.nav}>
            {this.props.isAuth
                ? <NavLink className={css.navLink} to={"/"} onClick={this.onClickLogout}>Выход</NavLink>
                : <NavLink className={css.navLink} to="/">Регистрация</NavLink>}

          </li>
        </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {logout})(Nav);