import React from 'react';
import iconVK from "../../../static/img/socialIcon/iconVK.svg";
import iconFacebook from "../../../static/img/socialIcon/iconFacebook.svg";
import iconTwitter from "../../../static/img/socialIcon/iconTwitter.svg";
import iconGoogle from "../../../static/img/socialIcon/iconGoogle.svg";

const SocialButtons = () => {
  return (
      <div className="socialIconsRow ">
        <a href="#"><img src={iconVK} alt="Image of social icon"/></a>
        <a href="#"><img src={iconFacebook} alt="Image of social icon"/></a>
        <a href="#"><img src={iconTwitter} alt="Image of social icon"/></a>
        <a href="#"><img src={iconGoogle} alt="Image of social icon"/></a>
      </div>
  );
}

export default SocialButtons;