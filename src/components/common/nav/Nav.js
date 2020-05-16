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
            <ul className={css.navbarList}>
                <li><NavLink to="#">Главная</NavLink></li>
                <li><NavLink to="#">Наши партнеры</NavLink></li>
                <li><NavLink to="#">Достижения</NavLink></li>
                <li><NavLink to="#">Регистрация</NavLink></li>
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {logout})(Nav);