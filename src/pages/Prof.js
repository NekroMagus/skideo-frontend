import React, {Component} from 'react';
import {connect} from "react-redux";
import HeaderSecond from "../components/common/header-another/HeaderSecond";
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import logo from '../static/img/avatar.jpg';
import ModalVideo from "../components/common/modalVideo/ModalVideo";

class Prof extends Component {

  constructor(props) {
    super(props);
    this.state ={isModalOpen: false}
  }

  openModal = () => {
    this.setState({
      isModalOpen: true
    })
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    })
  };

  render() {
    return (
        <>
          <HeaderSecond/>
          <section className="profile">
            <div className="container no-padding">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <form action="#" method="get">
                    <div className="profile-container">
                      <div className="profile-container-title">
                        <div className="profile_block text-center">
                          <img src={logo} alt=""/>
                          {/*<button className="edit_photo open-modal2">Ред.фото</button>*/}
                          <div className="profile_inicial">
                            <h2 className="profile_name">Имя
                              Фамилия: {this.props.profile.name} {this.props.profile.surname}</h2>
                            <p className="profile_country">Город: {this.props.profile.city}</p>
                          </div>

                        </div>
                        <div className="d-flex" style={{justifyContent: "space-between"}}>
                          <h1 onClick={this.openModal} className="profile-title">добавить видео</h1>
                          <NavLink className="profile_edit" to={"/profile/edit"}>Ред.
                            профиль</NavLink>
                        </div>
                      </div>
                      <div className="profile-container-body">
                        <div className="profile-container-body-content">
                          <div className="blockoutput">
                            <div className="col-6 col-md-6">
                              <div className="input-group-prepend">
                                <p>Амплуа:</p>
                              </div>
                            </div>
                            <div className="col-4">
                              <p>{this.props.profile.roleFootball}</p>
                            </div>
                          </div>
                          <div className="blockoutput">
                            <div className="col-6 col-md-6">
                              <div className="input-group-prepend">
                                <p>E-mail:</p>
                              </div>
                            </div>
                            <div className="col-4">
                              <p>{this.props.profile.email}</p>
                            </div>
                          </div>
                          <div className="blockoutput">
                            <div className="col-6 col-md-6">
                              <div className="input-group-prepend">
                                <p>Телефон:</p>
                              </div>
                            </div>
                            <div className="col-4">
                              <p>{this.props.profile.telephoneNumber}</p>
                            </div>
                          </div>
                          <div className="blockoutput">
                            <div className="col-6 col-md-6">
                              <div className="input-group-prepend">
                                <p>Дата рождения:</p>
                              </div>
                            </div>
                            <div className="col-4">
                              <p>{this.props.profile.dateOfBirth &&
                              this.props.profile.dateOfBirth.reverse().map((e, index, list) => {
                                if (index === list.length - 1) {
                                  return e;
                                }
                                return e + '.'
                              })}</p>
                            </div>
                          </div>
                          <div className="blockoutput">
                            <div className="col-6 col-md-6">
                              <div className="input-group-prepend">
                                <p>Страна:</p>
                              </div>
                            </div>
                            <div className="col-4">
                              <p>{this.props.profile.country}</p>
                            </div>
                          </div>
                          <div className="blockoutput">
                            <div className="col-6 col-md-6">
                              <div className="input-group-prepend">
                                <p>Город:</p>
                              </div>
                            </div>
                            <div className="col-4">
                              <p>{this.props.profile.city}</p>
                            </div>
                          </div>
                          <div className="blockoutput">
                            <div className="col-6 col-md-6">
                              <div className="input-group-prepend">
                                <p>Вы в соц. сети:</p>
                              </div>
                            </div>
                            <div className="col-4">
                              <p>{this.props.profile.socialNetwork}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-3">
                  <div className="btn-videos">
                    <NavLink to={"/profile/video"}>
                      <p className="btn-text">Мои видео</p>
                      <div className="circle">
                        <div className="triangle"></div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ModalVideo ismModalOpen={this.state.isModalOpen} closeModal={this.closeModal}/>
        </>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {}))(Prof);