import React from "react";
import css from './Partners.module.css';
import liverpool from '../../../static/img/Liverpool.jpg';
import juventus from '../../../static/img/Juventus.jpg';
import realMadrid from '../../../static/img/Real_madrid.jpg';
import BlockTitle from "../block-title/BlockTitle";

const Partners = () => {
    return (
        <section className={css.section}>
            <BlockTitle title="Наши партнеры"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-12 alignCenter">
                        <img className={css.img} src={liverpool} alt="liverpool"/>
                        <h3>Liverpool</h3>
                        <p>Хочешь попасть в академию Liverpool? <br/>
                            Тогда отправляй нам свои видео скиллы,и может именно ты станешь тем самым счастливчиком!</p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 alignCenter">
                        <img className={css.img} src={juventus} alt="Juventus"/>
                        <h3>Juventus</h3>
                        <p>Хочешь попасть в академию Real Madrid?<br/>
                            Тогда отправляй нам свои видео скиллы,и может именно ты станешь тем самым счастливчиком!</p>
                    </div>
                    <div className="col-md-4 col-sm-12 col-12 alignCenter">
                        <img className={css.img} src={realMadrid} alt="Real Madrid"/>
                        <h3>Real Madrid</h3>
                        <p>Хочешь попасть в академию Real Madrid?<br/>
                            Тогда отправляй нам свои видео скиллы,и может именно ты станешь тем самым счастливчиком!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;