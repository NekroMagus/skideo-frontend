import React from "react";
import Social from "../nav/social/Social";
import Nav from "../nav/Nav";
import css from './Footer.module.css';
import football from '../../../static/img/kick-white.png';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <nav className={css.center}>
                <div className={css.padding}>
                    <img className={css.animation} src={football} alt="Skideo kick"/>
                    <NavLink className={css.title} to="/">Skideo</NavLink>
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