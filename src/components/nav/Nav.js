import React from "react";
import css from "./Nav.module.css";

const Nav = () => {
    return (
        <ul className={css.barNav}>
            <li className={css.nav}>
                <a className={css.navLink} href="/">Главная</a>
            </li>
            <li className={css.nav}>
                <a className={css.navLink} href="/">Наши партнеры</a>
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