import React, {Component} from 'react';
import HeaderSecond from "../components/common/header-another/HeaderSecond";
import ProfileEditForm from "../components/profile/editForm/ProfileEditForm";
import {connect} from "react-redux";
import {setProfileData} from "../store/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import profileLocalize from "../store/localize/profile";

class ProfEdit extends Component {

  onSubmitForm = (data) => {
    let redirect = this.props.setProfileData(data);
    redirect.then(success =>{
      if (success){
        this.props.history.push('/profile');
      }
    })
  };

  render() {
    return (
        <>
          <HeaderSecond/>
          <section className="edit">
            <div className="container center">
              <div className="col-md-6 no-padding">
                <h1 className="edit-title">{profileLocalize.general}</h1>
                <ProfileEditForm onSubmit={this.onSubmitForm}/>
              </div>
            </div>
          </section>
        </>
    );
  }
}

const mapStateToProps = state => ({});

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {setProfileData}))(ProfEdit);