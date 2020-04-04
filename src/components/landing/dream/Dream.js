import React from "react";
import css from './Dream.module.css';
import BlockTitle from "../block-title/BlockTitle";
import img from '../../../static/img/011-min.jpg';

const Dream = () => {
  return (
      <section>
        <div className={`container ${css.margin}`}>
          <div className="row">
            <div className="col-md-6">
              <BlockTitle title="Все начинается с мечты!"/>
              <p className="alignCenter">Привет! Ты мечтаешь стать крутым футболистом, играть в академии
                топовых клубов или выступать
                за сборную своей страны ? А может быть просто хочешь показать себя? Мы поможем тебе в этом!
                Используй наше приложение (доступно в App Store и Google Play), чтобы показать, на что ты
                способен, соревноваться с другими пользователями или найти новых друзей по интересам!
                Возможно, профессиональный тренер или скаут увидит твой профиль и выберет именно тебя.</p>
            </div>
            <div className="col-md-6">
              <img className={css.img} src={img} alt="Your dream"/>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Dream;