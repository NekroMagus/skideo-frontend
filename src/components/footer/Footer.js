import React from "react";
import Social from "../social/Social";
import Nav from "../nav/Nav";
import css from './Footer.module.css';
import football from '../../static/img/kick-white.png';

const Footer = () => {
    return (
        <footer>
            <nav className={css.center}>
                <div className={css.padding}>
                    <img className={css.animation} src={football} alt="Skideo kick"/>
                    <a className={css.title} href="/">Skideo</a>
                </div>
                <div>
                    <Nav/>
                </div>
                <div>
                    <Social/>
                </div>
            </nav>
        </footer>
    );
};


export default Footer;