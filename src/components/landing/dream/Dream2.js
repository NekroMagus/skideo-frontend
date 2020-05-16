import React, {Component} from 'react';
import kick from "../../../static/img/kick.png";
import dream from "../../../static/img/011-min.jpg";

class Dream2 extends Component {
  render() {
    return (
        <section className="start">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img className="start-img" src={kick} alt="kick"/>
                <h2 className="start-title"><b>Все начинается с мечты!</b></h2>
                <div className="start-border">
                  <div className="border"></div>
                </div>
                <p>Привет! Ты мечтаешь стать крутым футболистом, играть в академии топовых клубов или выступать за
                  сборную своей страны ? А может быть просто хочешь показать себя? Мы поможем тебе в этом! Используй
                  наше приложение (доступно в App Store и Google Play), чтобы показать, на что ты способен,
                  соревноваться с другими пользователями или найти новых друзей по интересам! Возможно,
                  профессиональный тренер или скаут увидит твой профиль и выберет именно тебя.
                </p>
              </div>
              <div className="col-md-6">
                <img className="w-100" src={dream} style={{"marginTop": "100px"}} alt=""/>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Dream2;