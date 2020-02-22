import React from "react";

import css from './Social.module.css'
import vk from "../../static/img/vk.png";
import fb from "../../static/img/fb.png";
import inst from "../../static/img/inst.png";

const Social = () => {
    return (
        <>
                <li className="nav-item">
                    <a className="nav-link" href="#"><img className={css.vk} src={vk} alt="vk"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><img className={css.fb} src={fb} alt="fb"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><img className={css.inst} src={inst} alt="inst"/></a>
                </li>
        </>
    );
};

export default Social;