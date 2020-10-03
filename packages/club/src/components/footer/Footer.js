import React from 'react';
import kickWhite from "../../static/kick-white.png";
import {NavLink} from "react-router-dom";

const Footer = () => {

  return (
      <div className="footer">
        <div className="footer__container">
          <div className="footer__title">
            <img width="40" height="40" className="footer__title-img" src={kickWhite} alt="kick"/>
            <NavLink className="header-title-text" to="#">Skideo</NavLink>
          </div>
          <div className="footer__links">
            <NavLink className="header-links-item" to="/">Главная</NavLink>
            <NavLink className="header-links-item" to="#">Наши партнеры</NavLink>
            <NavLink className="header-links-item" to="#">Достижения</NavLink>
            <NavLink className="header-links-item" to="#">Регистрация</NavLink>
          </div>
          <div className="footer__social">
            <NavLink to="#" className="fa fa-vk header-social-item"/>
            <NavLink to="#" className="fa fa-facebook-official header-social-item"/>
            <NavLink to="#" className="fa fa-instagram header-social-item"/>
          </div>
        </div>
      </div>
  );
};

export default Footer;