import React from "react";
import css from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <ul className={css.barNav}>
            <li className={css.nav}>
                <a className={css.navLink} href="/">Главная</a>
            </li>
            <li className={css.nav}>
                <NavLink className={css.navLink} to="/profile">Наши партнеры</NavLink>
            </li>
            <li className={css.nav}>
                <a className={css.navLink} href="/">Достижения</a>
            </li>
            <li className={css.nav}>
                <a className={css.navLink} href="/">Регистрация</a>
            </li>
        </ul>
    );
};

export default Nav;