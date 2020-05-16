import React from "react";
import Social from "../nav/social/Social";
import css from './Footer.module.css';
import Nav from "../nav/Nav";
import Logo from "../nav/logo/Logo";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Logo isBottom={true}/>
                <div className={css.navbar}>
                    <Nav/>
                </div>
                <Social isBottom={true}/>
            </div>
        </footer>
    );
};


export default Footer;