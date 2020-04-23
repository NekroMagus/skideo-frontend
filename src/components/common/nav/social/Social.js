import React from "react";
import {NavLink} from "react-router-dom";
import css from './Social.module.css'

const Social = ({isBottom}) => {
    return (
        <div className={`${css.navbarSocial} ${isBottom && css.padding}`}>
            <NavLink to="#" className="fa fa-vk navbar--social--icon"/>
            <NavLink to="#" className="fa fa-facebook-official navbar--social--icon"/>
            <NavLink to="#" className="fa fa-instagram navbar--social--icon"/>
        </div>
    );
};

export default Social;