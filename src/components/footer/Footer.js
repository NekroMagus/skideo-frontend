import React from "react";
import Social from "../social/Social";
import MainLinks from "../mainLinks/MainLinks";
import css from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <nav className="navbar-dark justify-content-md-center">
                <a className="" href="/">Skideo</a>
                <div className={css.inline}>
                    <MainLinks/>
                    <Social/>
                </div>
            </nav>
        </footer>
    );
};


export default Footer;