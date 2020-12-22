import React from "react";
import {Form, Formik} from "formik";
import formLocalize from '../../../../store/localize/form';
import {minLengthCreator, requiredField} from "../../../../utils/validator/Validator";
import TextInput from "../../../common/form/TextInput";
import AccountSelectButton from "./AccountSelectButton";
import AccountButton from "./AccountButton";
import iconFacebook from "../../../../static/img/socialIcon/iconFacebook.svg";
import iconVK from "../../../../static/img/socialIcon/iconVK.svg";
import iconTwitter from "../../../../static/img/socialIcon/iconTwitter.svg";
import iconGoogle from "../../../../static/img/socialIcon/iconGoogle.svg";


const RegistrationForm = (props) => {

    const minLength = minLengthCreator(6);

    const handleSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    }
    console.log(props);

    return (
        <div>
            <Formik
                initialValues={{
                    login: "",
                    password: "",
                    submitPassword: ""
                }}
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
                            />
                            {
                                props.isAuth ? <button className="signButton" type="submit">{formLocalize.auth}
                                    </button>
                                    : <div>
                                        <TextInput
                                            label={formLocalize.submitPassword}
                                            name="submitPassword"
                                        />
                                        <h3 className="textInput">{formLocalize.registrationSocialMedia}</h3>
                                        <div className="socialIconsRow ">
                                            <a href="#">< img src={iconVK} alt="Image of social icon"/></a>
                                            <a href="#">< img src={iconFacebook} alt="Image of social icon"/></a>
                                            <a href="#">< img src={iconTwitter} alt="Image of social icon"/></a>
                                            <a href="#">< img src={iconGoogle} alt="Image of social icon"/></a>
                                        </div>
                                        <button className="signButton" type="submit">{formLocalize.submitRegistration}
                                        </button>
                                        <div className="conditions">
                                            <a href="#" className="textInput">{formLocalize.rulesAndPrivacy}</a>
                                        </div>

                                    </div>
                            }
                        </div>
                    </Form>
                )}
            </Formik>


        </div>
    );
}

export default RegistrationForm;