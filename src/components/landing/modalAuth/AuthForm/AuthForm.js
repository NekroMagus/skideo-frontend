import React from "react";
import {Form, Formik} from "formik";
import formLocalize from '../../../../store/localize/form';
import TextInput from "../../../common/form/TextInput";
import iconFacebook from "../../../../static/img/socialIcon/iconFacebook.svg";
import iconVK from "../../../../static/img/socialIcon/iconVK.svg";
import iconTwitter from "../../../../static/img/socialIcon/iconTwitter.svg";
import iconGoogle from "../../../../static/img/socialIcon/iconGoogle.svg";
import EntryEnum from "../../../../utils/enum/EntryEnum";
import authValidator from "../../../../utils/validator/authValidator";
import UserRoleEnum from "../../../../utils/enum/UserRoleEnum";

const AuthForm = (props) => {

  const handleSubmit = (values) => {
    alert(JSON.stringify((values), null, 2));
    if (props.role === UserRoleEnum.PLAYER) {
      alert("url: localhost:8000/auth");
    } else if (props.role === UserRoleEnum.SCOUT) {
      alert("url: localhost:8001/auth");
    } else if (props.role === UserRoleEnum.CLUB) {
      alert("url: localhost:8002/auth");
    } else if (props.role === UserRoleEnum.ACADEMY) {
      alert("url: localhost:8003/auth");
    }
  }

  return (
      <div>
        <Formik
            initialValues={{
              login: "",
              password: ""
            }}
            validate={authValidator}
            onSubmit={handleSubmit}
        >
          {(formik) => (
              <Form onSubmit={formik.handleSubmit}>
                <div className="formAuthReg">
                  <TextInput
                      label={formLocalize.login}
                      name="login"
                  />
                  <TextInput
                      label={formLocalize.password}
                      name="password"
                      type="password"
                  />
                  <h3 className="textInput">{formLocalize.registrationSocialMedia}</h3>
                  <div className="socialIconsRow ">
                    <a href="#">< img src={iconVK} alt="Image of social icon"/></a>
                    <a href="#">< img src={iconFacebook} alt="Image of social icon"/></a>
                    <a href="#">< img src={iconTwitter} alt="Image of social icon"/></a>
                    <a href="#">< img src={iconGoogle} alt="Image of social icon"/></a>
                  </div>
                  <button disabled={!props.isEnabled} className="signButton" type="submit">{formLocalize.auth}
                  </button>
                  <div className="conditions">
                    <a href="#" className="textInput">{formLocalize.rulesAndPrivacy}</a>
                  </div>
                </div>
              </Form>
          )}
        </Formik>
      </div>
  );
};

export default AuthForm;

