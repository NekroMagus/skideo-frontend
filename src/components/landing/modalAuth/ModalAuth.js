import React, {Component} from 'react';
import css from './ModalAuth.module.css';
import AuthForm from "./AuthForm/AuthForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import {login, registration} from "../../../store/reducers/authReducer";
import {connect} from "react-redux";

class ModalAuth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSetAuth: true
        }
    }

    onChangeAuth = () => {
        this.setState({
            ...this.state,
            isSetAuth: true
        })
    };

    onChangeRegistration = () => {
        this.setState({
            ...this.state,
            isSetAuth: false
        })
    };

    onSubmitAuth = (data) => {
        this.props.login(data.login, data.password);
    };

    onSubmitRegistration = (data) => {
        this.props.registration(data.login, data.password);
    };

    render() {
        if (!this.props.isModalShow) {
            return null;
        }

        if (this.props.isAuth) {
            return null;
        }

        return (
            <div className={css.authModalWindow}>
                <div className={css.modalInner}>
                    <div className={css.flexToggle}>
                        <button onClick={this.onChangeAuth} className={css.toggleButton}>Авторизация</button>
                        <button onClick={this.onChangeRegistration} className={css.toggleButton}>Регистрация</button>
                    </div>
                    <div className={css.inputsContainer}>
                        {this.state.isSetAuth
                            ? <AuthForm onSubmit={this.onSubmitAuth}/>
                            : <RegistrationForm onSubmit={this.onSubmitRegistration}/>}
                        <button className={`${css.button} ${css.center}`}
                                onClick={this.props.toggleModalAuth}>Закрыть
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login, registration})(ModalAuth);