import React, {Component} from 'react';
import Skideo2 from "../components/landing/skideo/Skideo2";
import HeaderFirst from "../components/landing/header/HeaderFirst";
import {connect} from "react-redux";
import {login, registration} from "../store/reducers/authReducer";
import Partners2 from "../components/landing/partners/Partners2";
import Dream2 from "../components/landing/dream/Dream2";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {toggleLang} from "../store/reducers/localizeReducer";
import ModalAuth from "../components/landing/modalAuth/ModalAuth";


class Landing extends Component {

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
            !this.props.isAuth &&
            <ModalAuth isOpen={this.state.isModalOpen}
                       closeModal={this.onCloseModal}
            />
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
)(Landing);