import React, {Component} from 'react';
import Skideo2 from "../components/landing/skideo/Skideo2";
import HeaderFirst from "../components/landing/header/HeaderFirst";
import AuthForm from "../components/landing/modalAuth/AuthForm/AuthForm";
import RegistrationForm from "../components/landing/modalAuth/RegistrationForm/RegistrationForm";
import {connect} from "react-redux";
import {login, registration} from "../store/reducers/authReducer";
import Partners2 from "../components/landing/partners/Partners2";
import Dream2 from "../components/landing/dream/Dream2";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {toggleLang} from "../store/reducers/localizeReducer";
import formLocalize from "../store/localize/form";
  
class Land extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      language: this.props.language
    };
  }

  onOpenModal = () => {
    this.setState({
      ...this.state,
      isModalOpen: true
    })
  };

  onCloseModal = () => {
    this.setState({
      ...this.state,
      isModalOpen: false
    })
  };

  onSubmitAuth = (data) => {
    let redirect = this.props.login(data.login, data.password);
    redirect.then((success) => {
      if (success) {
        this.onCloseModal();
        this.props.history.push('/profile');
      }
    });
  };

  onSubmitRegistration = (data) => {
    let redirect = this.props.registration(data.login, data.password);
    redirect.then(success => {
      if (success) {
        this.onCloseModal();
        this.props.history.push('/profile/edit');
      }
    });
  };

  onRedirectAfterAuth = () => {
    this.props.history.push('/profile');
  };

  onToggleLang = () => {
    this.props.toggleLang(this.props.language);
  };


  render() {
    return (
        <>
          <HeaderFirst onOpenModal={this.onOpenModal}
                       toggleLang={this.onToggleLang}
                       language={this.props.language}
          />
          <Skideo2 onOpenModal={this.onOpenModal}
                   isAuth={this.props.isAuth}
                   redirect={this.onRedirectAfterAuth}
          />
          <Partners2/>
          <Dream2/>
          {
            this.props.isAuth ?
                null :
                <div className={`modal-overlay ${this.state.isModalOpen ? "active" : ""}`}>
                  <div className={`modal ${this.state.isModalOpen ? "active" : ""}`}>
                    <a onClick={this.onCloseModal} className="close-modal">
                      <svg viewBox="0 0 20 20">
                        <path fill="#000000"
                              d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"/>
                      </svg>
                    </a>
                    <div className="tabs">
                      <input type="radio" name="inset" value="" id="tab_1" checked/>
                      <label className="l-center" htmlFor="tab_1">{formLocalize.auth}</label>

                      <input type="radio" name="inset" value="" id="tab_2"/>
                      <label htmlFor="tab_2">{formLocalize.registration}</label>
                      <div id="txt_1">
                        <AuthForm onSubmit={this.onSubmitAuth} language={this.props.language}/>
                      </div>
                      <div id="txt_2">
                        <RegistrationForm onSubmit={this.onSubmitRegistration} language={this.props.language}/>
                      </div>
                    </div>
                  </div>
                </div>
          }
        </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  language: state.localize.language
});

export default compose(
    withRouter,
    connect(mapStateToProps, {login, registration, toggleLang})
)(Land);