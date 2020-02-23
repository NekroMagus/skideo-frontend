import React from "react";

import css from './Social.module.css'
import vk from "../../static/img/vk.png";
import fb from "../../static/img/fb.png";
import inst from "../../static/img/inst.png";

const Social = () => {
    return (
        <>
            <ul className={css.inline}>
                <li className={css.navItem}>
                    <a className={css.navLink} href="/"><img className={css.vk} src={vk} alt="vk"/></a>
                </li>
                <li className={css.navItem}>
                    <a className={css.navLink} href="/"><img className={css.fb} src={fb} alt="fb"/></a>
                </li>
                <li className={css.navItem}>
                    <a className={css.navLink} href="/"><img className={css.inst} src={inst} alt="inst"/></a>
                </li>
            </ul>
        </>
    );
};

export default Social;