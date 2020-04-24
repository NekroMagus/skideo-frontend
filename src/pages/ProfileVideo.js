import React, {Component} from 'react';
import HeaderSecond from "../components/common/header-another/HeaderSecond";
import {NavLink} from "react-router-dom";

class ProfileVideo extends Component {
  render() {
    return (
        <>
          <HeaderSecond/>
          <section className="text-center" style={{"paddingBottom": "100px","paddingTop": "100px"}}>
            <div className="container">
              <h1 className="" style={{"color": "#000"}}>Мои видео</h1>
              <div className="push20"></div>
              <p style={{"color": "#000"}}>Вы еще не добавили видео.</p>
              <div className="row">
                <div className="col">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/SEqF-iHCblE" frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
                </div>
              </div>
              <div className="push20"></div>
              <NavLink to={"/profile"} className="btn open-modal2">Назад в профиль</NavLink>
              <div className="push20"></div>
            </div>

          </section>
        </>
    );
  }
}

export default ProfileVideo;