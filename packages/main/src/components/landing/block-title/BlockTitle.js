import React from "react";
import kick from "../../../static/img/kick.png";
import css from './BlockTitle.module.css';

const BlockTitle = (props) => {
  return (
      <>
        <div className="alignCenter">
          <img src={kick} alt="kick"/>
        </div>
        <div className="alignCenter">
          <h3 className={css.title}>{props.title}</h3>
        </div>
      </>
  );
};

export default BlockTitle;
