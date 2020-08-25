import React from "react";
import Social from "../nav/social/Social";
import css from './Footer.module.css';
import Nav from "../nav/Nav";
import Logo from "../nav/logo/Logo";
import {connect} from "react-redux";

const Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <Logo isBottom={true}/>
                <div className={css.navbar}>
                    <Nav language={props.language}/>
                </div>
                <Social isBottom={true}/>
            </div>
        </footer>
    );
};

const mapStateToProps = state => ({
  language: state.localize.language
});


export default connect(mapStateToProps)(Footer);