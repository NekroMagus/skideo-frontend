import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Logo.module.css';
import kickWhite from '../../../static/kick-white.png';

const Logo = ({isBottom}) => {
    return (
        <div className={css.logo}>
            <img className={`${css.img} ${isBottom && css.top}`} src={kickWhite} alt=""/>
            <NavLink to="#">Skideo</NavLink>
        </div>

    );
};

export default Logo;