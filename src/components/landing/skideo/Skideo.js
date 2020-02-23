import React from "react";
import css from './Skideo.module.css';

const Skideo = () => {
    return (
        <section>
            <div className={css.background}>
                <div className={css.darkTheme}>
                    <div className={`alignCenter ${css.center}`}>
                        <h1 className={css.title}>Skideo</h1>
                        <p className={css.text}>UPLOAD YOUR SKILLS AND GET A CHANCE</p>
                        <button className={css.button}>Добавить видео</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skideo;