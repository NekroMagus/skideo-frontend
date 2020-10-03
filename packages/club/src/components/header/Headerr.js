import React, {useState} from 'react';
import kickWhite from "../../static/kick-white.png";
import {NavLink} from "react-router-dom";
import Modal from "../Modal";

const Headerr = () => {

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
      <header className="header">
        <div className="header header-container">
          <div className="header-title">
            <img height="40" width="40" className="header-title-img" src={kickWhite} alt="kick"/>
            <NavLink className="header-title-text" to="#">Skideo</NavLink>
          </div>
          <div className="header header-links">
            <NavLink className="header-links-item" to="/">Главная</NavLink>
            <NavLink className="header-links-item" to="#">Наши партнеры</NavLink>
            <NavLink className="header-links-item" to="#">Достижения</NavLink>
            <NavLink className="header-links-item" to="#">Регистрация</NavLink>
          </div>
          <div className="header header-social">
            <NavLink to="#" className="fa fa-vk header-social-item"/>
            <NavLink to="#" className="fa fa-facebook-official header-social-item"/>
            <NavLink to="#" className="fa fa-instagram header-social-item"/>
          </div>
        </div>
        <button className="header-button">Вход/Регистрация</button>
        <div className={`hamburger hamburger--3dx ${isBurgerOpen ? "is-active" : ""}`}
             onClick={() => setIsBurgerOpen(!isBurgerOpen)}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"/>
          </div>
        </div>
        {
          isBurgerOpen &&
          <Modal>
            <button className="modal-button">Вход/Регистрация</button>
            <ul className="modal-list">
              <li><NavLink to="/">Главная</NavLink></li>
              <li><NavLink to="#">Наши партнеры</NavLink></li>
              <li><NavLink to="#">Достижения</NavLink></li>
              <li><NavLink to="#">Регистрация</NavLink></li>
            </ul>
          </Modal>
        }
      </header>
  );
};

export default Headerr;