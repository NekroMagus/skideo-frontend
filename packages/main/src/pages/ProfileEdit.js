import React from 'react';
import ProfileEditForm from "../components/profile/editForm/ProfileEditForm";
import {connect} from "react-redux";
import {setProfileData} from "../store/reducers/profileReducer";

const ProfileEdit = (props) => {

  const onSubmitForm = (data) => {
    props.setProfileData(data);
  };

  return (
      <main>
        <ProfileEditForm onSubmit={onSubmitForm}/>
      </main>
  );
};

export default connect(null, {setProfileData})(ProfileEdit);