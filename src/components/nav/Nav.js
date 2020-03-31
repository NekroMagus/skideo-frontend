import React, {Component} from "react";
import css from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class Nav extends Component {
    render() {
        return (
            <ul className={css.barNav}>
                <li className={css.nav}>
                    <NavLink className={css.navLink} to="/">Главная</NavLink>
                </li>
                <li className={css.nav}>
                    <NavLink className={css.navLink} to="/profile">Наши партнеры</NavLink>
                </li>
                <li className={css.nav}>
                    <NavLink className={css.navLink} to="/">Достижения</NavLink>
                </li>
                <li className={css.nav}>
                    {this.props.isAuth
                        ? <NavLink className={css.navLink} to="/">Выход</NavLink>
                        : <NavLink className={css.navLink} to="/">Регистрация</NavLink>}

                </li>
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {})(Nav);