import React, {useState} from 'react';
import css from "./ModalAuth.module.css";
import AuthForm from "./AuthForm/AuthForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import userRole from "../../../utils/enum/userRole";
import AccountSelectButton from "./RegistrationForm/AccountSelectButton";
import formLocalize from "../../../store/localize/form";

interface ModalAuthProps {
    isModalOpen: boolean,
    setIsModalOpen: Function
}

const ModalAuthFunction = ({isModalOpen, setIsModalOpen}: ModalAuthProps) => {

    const [isAuth, setIsAuth] = useState(true);
    const [role, setRole] = useState(userRole.NONE);

    const onCloseModal = () => {

    }

    const onChangeAuth = () => {
        setIsAuth(true);
    }

    const onChangeRegistration = () => {
        setIsAuth(false);

    }

    const onSubmitAuth = () => {
    }

    const onSubmitRegistration = () => {

    }

    const toggleModalAuth = () => {

    }

    return (
        <div className={`modal-overlay ${isModalOpen ? "active" : ""}`}>
            <div className={`modal ${isModalOpen ? "active" : ""}`}>
                <div className={css.flexToggle}>
                    <a onClick={() => setIsModalOpen(true)} className="close-modal">
                        <svg viewBox="0 0 20 20">
                            <path fill="#000000"
                                  d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"/>
                        </svg>
                    </a>
                    <div>
                        <div className="selectorAuthReg">
                            <input type="radio"/><label className={`signIn ${ isAuth ? "" : "nonActive"}`}
                                                        onClick={onChangeAuth}>{formLocalize.auth}</label>
                            <input type="radio"/><label className={`signUp ${ isAuth ? "" : "active"}`}
                                                         onClick={onChangeRegistration}>{formLocalize.registration}</label>
                        </div>
                        {
                            isAuth ? <h3 className="regHeader">{formLocalize.enterAccount}</h3>
                                : <h3 className="regHeader">{formLocalize.createRegistration}</h3>
                        }
                        <AccountSelectButton isAuth={isAuth}
                                             role={role}
                                             setRole={setRole}
                        />
                        <RegistrationForm onSubmit={onSubmitRegistration}
                                          isAuth={isAuth}
                        />
                        {/*</div>*/}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ModalAuthFunction;