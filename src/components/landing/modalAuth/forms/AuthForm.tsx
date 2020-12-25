import React from "react";
import {Form, Formik} from "formik";
import formLocalize from '../../../../store/localize/form';
import TextInput from "../../../common/form/TextInput";
import authValidator from "../../../../utils/validator/authValidator";
import UserRoleEnum from "../../../../utils/enum/UserRoleEnum";
import SocialButtons from "../SocialButtons";
import {playerAuthApi} from "../../../../api/players/playerApi";

interface AuthFormProps {
  role: UserRoleEnum,
}

interface FormValues {
  login: string,
  password: string,
}

const AuthForm = ({role}: AuthFormProps) => {

  const handleSubmit = async (values: FormValues) => {
    // alert(JSON.stringify((values), null, 2));

    if (role === UserRoleEnum.PLAYER) {
     const result = await playerAuthApi.login(values);
     alert(result);

    } else if (role === UserRoleEnum.SCOUT) {
      alert("url: localhost:8001/auth");
    } else if (role === UserRoleEnum.CLUB) {
      alert("url: localhost:8002/auth");
    } else if (role === UserRoleEnum.ACADEMY) {
      alert("url: localhost:8003/auth");
    }
  }

  if (role === UserRoleEnum.NONE) {
    return null;
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
                  <TextInput label={formLocalize.login}
                             name="login"
                  />
                  <TextInput label={formLocalize.password}
                             name="password"
                             type="password"
                  />
                  <h3 className="textInput">{formLocalize.registrationSocialMedia}</h3>
                  <SocialButtons />
                  <button className="signButton" type="submit">{formLocalize.auth}</button>
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

