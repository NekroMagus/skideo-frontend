import React, {Component} from "react";
import css from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import commonLocalize from "../../../store/localize/common";

class Nav extends Component {

  render() {
        return (
            <ul className={css.navbarList}>
                <li><NavLink to="#">{commonLocalize.main}</NavLink></li>
                <li><NavLink to="#">{commonLocalize.partners}</NavLink></li>
                <li><NavLink to="#">{commonLocalize.achievements}</NavLink></li>
                <li><NavLink to="#">{commonLocalize.registration}</NavLink></li>
            </ul>
        );
    }
}

export default Nav;