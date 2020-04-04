import React from 'react';
import img from '../../../static/img/index.jpg';
import css from './Avatar.module.css';

const Avatar = () => {
    return (
        <div>
            <img className={css.avatar} src={img} alt="avatar"/>
        </div>
    );
};

export default Avatar;