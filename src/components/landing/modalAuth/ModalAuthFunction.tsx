import React, {useState} from 'react';
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import UserRoleEnum from "../../../utils/enum/UserRoleEnum";
import AccountSelectButton from "./RegistrationForm/AccountSelectButton";
import formLocalize from "../../../store/localize/form";
import entryEnum from "../../../utils/enum/EntryEnum";
import EntryEnum from "../../../utils/enum/EntryEnum";
import AuthForm from "./AuthForm/AuthForm";
import PlayerRoleEnum from "../../../utils/enum/PlayerRoleEnum";

interface ModalAuthProps {
  isModalOpen: boolean,
  setIsModalOpen: Function
}

const ModalAuthFunction = ({isModalOpen, setIsModalOpen}: ModalAuthProps) => {

  const [entry, setEntry] = useState(entryEnum.AUTH);
  const [role, setRole] = useState(UserRoleEnum.NONE);
  const [playerRole, setPlayerRole] = useState(PlayerRoleEnum.NONE);
  const [hasAgent, setHasAgent] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const onCloseModal = () => {

  }

  const onChangeAuth = () => {
    setEntry(entryEnum.AUTH);
  }

  const onChangeRegistration = () => {
    setEntry(entryEnum.REGISTRATION);

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
          <div>
            <a onClick={() => setIsModalOpen(true)} className="close-modal">
              <svg viewBox="0 0 20 20">
                <path fill="#000000"
                      d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"/>
              </svg>
            </a>
            <div>
              <div className="selectorAuthReg">
                <input type="radio"/>
                <label className={`signIn ${entry === EntryEnum.AUTH ? "active" : "nonActive"}`}
                       onClick={onChangeAuth}>{formLocalize.auth}
                </label>
                <input type="radio"/>
                <label className={`signUp ${entry === EntryEnum.REGISTRATION ? "active" : "nonActive"}`}
                       onClick={onChangeRegistration}>{formLocalize.registration}
                </label>
              </div>
              {
                entry === EntryEnum.AUTH &&
                <div>
                  <h3 className="regHeader">{formLocalize.enterAccount}</h3>
                  <AccountSelectButton entry={entry}
                                       role={role}
                                       setRole={setRole}
                                       playerRole={playerRole}
                                       setPlayerRole={setPlayerRole}
                                       hasAgent={hasAgent}
                                       setHasAgent={setHasAgent}
                                       isEnabled={isEnabled}
                                       setIsEnabled={setIsEnabled}
                  />
                  <AuthForm onSubmit={onSubmitAuth}
                            entry={entry}
                            role={role}
                            isEnabled={isEnabled}
                  />
                </div>
              }
              {
                entry === EntryEnum.REGISTRATION &&
                <div>
                  <h3 className="regHeader">{formLocalize.createRegistration}</h3>
                  <AccountSelectButton entry={entry}
                                       role={role}
                                       setRole={setRole}
                                       playerRole={playerRole}
                                       setPlayerRole={setPlayerRole}
                                       hasAgent={hasAgent}
                                       setHasAgent={setHasAgent}
                                       isEnabled={isEnabled}
                                       setIsEnabled={setIsEnabled}
                  />
                  <RegistrationForm onSubmit={onSubmitRegistration}
                                    entry={entry}
                                    role={role}
                                    playerRole={playerRole}
                                    hasAgent={hasAgent}
                                    isEnabled={isEnabled}
                  />
                </div>
              }
            </div>

          </div>
        </div>
      </div>
  );
}

export default ModalAuthFunction;