import React, {Component} from 'react';
import {connect} from "react-redux";
import {getProfileData} from "../../../store/reducers/profileReducer";
import css from './ProfileData.module.css';
import {NavLink} from "react-router-dom";

class ProfileData extends Component {

  componentDidMount() {
    this.props.getProfileData();
  }

  render() {
    return (
        <div>
          {this.props.user.name} {this.props.user.surname}
          <div className={css.flex}>
            <div className={css.about}>Обо мне</div>
            <div className={css.editProfile}>
              <NavLink to={"/profile/edit"}>ред. профиль</NavLink>
            </div>
          </div>
          <div className={"row"}>
            <div className={`col-4 offset-2 ${css.underline}`}>
              <span>Логин:</span>
            </div>
            <div className={`col-4 ${css.underline} alignEnd`}>
              <span>{this.props.user.login}</span>
            </div>
          </div>
          <div className={"row"}>
            <div className={`col-4 offset-2 ${css.underline}`}>
              <span>Амплуа:</span>
            </div>
            <div className={`col-4 ${css.underline} alignEnd`}>
              <span>{this.props.user.roleFootball}</span>
            </div>
          </div>
          <div className={"row"}>
            <div className={`col-4 offset-2 ${css.underline}`}>
              <span>E-mail:</span>
            </div>
            <div className={`col-4 ${css.underline} alignEnd`}>
              <span>{this.props.user.email}</span>
            </div>
          </div>
          <div className={"row"}>
            <div className={`col-4 offset-2 ${css.underline}`}>
              <span>Телефон:</span>
            </div>
            <div className={`col-4 ${css.underline} alignEnd`}>
              <span>{this.props.user.telephoneNumber}</span>
            </div>
          </div>
          <div className={"row"}>
            <div className={`col-4 offset-2 ${css.underline}`}>
              <span>Дата рождения:</span>
            </div>
            <div className={`col-4 ${css.underline} alignEnd`}>
              <span>{this.props.user.dateOfBirth}</span>
            </div>
          </div>
          <div className={"row"}>
            <div className={`col-4 offset-2 ${css.underline}`}>
              <span>Страна:</span>
            </div>
            <div className={`col-4 ${css.underline} alignEnd`}>
              <span>{this.props.user.country}</span>
            </div>
          </div>
          <div className={"row"}>
            <div className={`col-4 offset-2 ${css.underline}`}>
              <span>Город:</span>
            </div>
            <div className={`col-4 ${css.underline} alignEnd`}>
              <span>{this.props.user.city}</span>
            </div>
          </div>
          <div className={"row"}>
            <div className={`col-4 offset-2 ${css.underline}`}>
              <span>Вы в соц.сети:</span>
            </div>
            <div className={`col-4 ${css.underline} alignEnd`}>
              <span>{this.props.user.socialNetwork}</span>
            </div>
          </div>
          <div className={`alignCenter ${css.marginTop}`}>
            <NavLink to={"/profile/video"}>Мои видео</NavLink>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.profile
});

export default connect(mapStateToProps, {getProfileData})(ProfileData);