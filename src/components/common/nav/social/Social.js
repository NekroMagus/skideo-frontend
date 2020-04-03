import React from "react";

import css from './Social.module.css'
import vk from "../../../../static/img/vk.png";
import fb from "../../../../static/img/fb.png";
import inst from "../../../../static/img/inst.png";
import {NavLink} from "react-router-dom";

const Social = () => {
    return (
        <>
            <ul className={css.inline}>
                <li className={css.navItem}>
                    <NavLink className={css.navLink} to="/"><img className={css.vk} src={vk} alt="vk"/></NavLink>
                </li>
                <li className={css.navItem}>
                    <NavLink className={css.navLink} to="/"><img className={css.fb} src={fb} alt="fb"/></NavLink>
                </li>
                <li className={css.navItem}>
                    <NavLink className={css.navLink} to="/"><img className={css.inst} src={inst} alt="inst"/></NavLink>
                </li>
            </ul>
        </>
    );
};

export default Social;