import React, {useState} from "react";
import {Form, Formik} from "formik";
import formLocalize from '../../../../store/localize/form';
import TextInput from "../../../common/form/TextInput";
import iconFacebook from "../../../../static/img/socialIcon/iconFacebook.svg";
import iconVK from "../../../../static/img/socialIcon/iconVK.svg";
import iconTwitter from "../../../../static/img/socialIcon/iconTwitter.svg";
import iconGoogle from "../../../../static/img/socialIcon/iconGoogle.svg";
import UserRoleEnum from "../../../../utils/enum/UserRoleEnum";
import registrationValidator from "../../../../utils/validator/registrationValidator";
import PlayerRoleEnum from "../../../../utils/enum/PlayerRoleEnum";
import SocialButtons from "../SocialButtons";

interface RegistrationFormProps {
  role: UserRoleEnum,
  playerRole: PlayerRoleEnum,
}

interface RegistrationValues {
  login: string,
  password: string,
  submitPassword: string
}

const RegistrationForm = ({role, playerRole}: RegistrationFormProps) => {

  const [hasAgent, setHasAgent] = useState(false);

  const handleSubmit = (values: RegistrationValues) => {
    alert(JSON.stringify(values, null, 2));
    if (role === UserRoleEnum.PLAYER) {
      alert("url: localhost:8000/auth" + " hasAgent: " + hasAgent + " playerRole " + playerRole);
    } else if (role === UserRoleEnum.SCOUT) {
      alert("url: localhost:8001/auth");
    } else if (role === UserRoleEnum.CLUB) {
      alert("url: localhost:8002/auth");
    } else if (role === UserRoleEnum.ACADEMY) {
      alert("url: localhost:8003/auth");
    }
  }

  if (role === UserRoleEnum.NONE || (role === UserRoleEnum.PLAYER && playerRole === PlayerRoleEnum.NONE)) {
    return null;
  }

  return (
      <div>
        <Formik
            initialValues={{
              login: "",
              password: "",
              submitPassword: ""
            }}
            validate={registrationValidator}
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
                  <div>
                    <TextInput label={formLocalize.submitPassword}
                               name="submitPassword"
                               type="password"
                    />
                    {
                      playerRole === PlayerRoleEnum.PROFESSIONAL &&
                      <div className="agentInput">
                        <label>{formLocalize.hasAgent}</label>
                        <input name="haveAgent" type="checkbox" onChange={() => setHasAgent(!hasAgent)}/>
                      </div>
                    }
                    <h3 className="textInput">{formLocalize.registrationSocialMedia}</h3>
                    <SocialButtons/>
                    <button className="signButton"
                            type="submit">{formLocalize.submitRegistration}
                    </button>
                    <div className="conditions">
                      <a href="#" className="textInput">{formLocalize.rulesAndPrivacy}</a>
                    </div>
                  </div>
                </div>
              </Form>
          )}
        </Formik>
      </div>
  );
}
export default RegistrationForm;