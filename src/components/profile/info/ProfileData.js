import React, {Component} from 'react';
import {connect} from "react-redux";
import {setProfileData} from "../../../store/reducers/profileReducer";
import css from './ProfileData.module.css';
import {NavLink} from "react-router-dom";

class ProfileData extends Component {

    componentDidMount() {
        this.props.setProfileData();
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
                <p className={css.underline}>Логин:<span className={css.marginLeft}>{this.props.user.login}</span></p>
                <p className={css.underline}>Амплуа: {this.props.user.roleFootball}</p>
                <p className={css.underline}>E-mail: {this.props.user.email}</p>
                <p className={css.underline}>Телефон: {this.props.user.telephoneNumber}</p>
                <p className={css.underline}>Дата рождения: {this.props.user.dateOfBirth}</p>
                <p className={css.underline}>Страна: {this.props.user.country}</p>
                <p className={css.underline}>Город: {this.props.user.city}</p>
                <p className={css.underline}>Вы в соц.сети: {this.props.user.socialNetwork}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.profile
});

export default connect(mapStateToProps, {setProfileData})(ProfileData);