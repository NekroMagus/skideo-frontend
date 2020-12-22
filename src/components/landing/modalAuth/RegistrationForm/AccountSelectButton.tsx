import React, {Dispatch, SetStateAction, useState} from "react";
import formLocalize from '../../../../store/localize/form';
import userRole from "../../../../utils/enum/userRole";

interface RoleProps {
    isAuth: boolean,
    role: userRole,
    setRole: Dispatch<SetStateAction<userRole>>
}

const AccountSelectButton = ({isAuth, role, setRole}: RoleProps) => {


    const handleClick = (newRole: userRole) => {
        setRole(newRole);
        if (role !== userRole.PLAYER) {
            setHasAgent(false);
            setIsProfessional(false);
        }
    }

    const [isProfessional, setIsProfessional] = useState(false);
    const [hasAgent, setHasAgent] = useState(false);

    return (
        <>
        <div className="text-center">
            <h3 className="regHeader">{formLocalize.signIn}</h3>
        </div>
        <div className="accountSelectButtons">
            <label className="textInput">{formLocalize.whoAreYou}</label>
            <div className="buttonsRow">
                <button onClick={() => handleClick(userRole.PLAYER)}
                        className={`accountButtons playerButton ${role === userRole.PLAYER ? "active" : ""}`}>
                    {formLocalize.player}
                </button>
                <button onClick={() => handleClick(userRole.SCOUT)}
                        className={`accountButtons scoutButton ${role === userRole.SCOUT ? "active" : ""}`}>
                    {formLocalize.scout}
                </button>
                {
                    role === userRole.PLAYER && !isAuth &&
                    <>
                        <div>
                            <button onClick={() => setIsProfessional(true)}
                                    className="accountButtons playerButton newButt">
                                Professional
                            </button>
                            <button onClick={() => setIsProfessional(false)}
                                    className="accountButtons playerButton newButt">
                                Amateur
                            </button>
                        </div>
                        {
                            isProfessional &&
                            <div className="agentInput">
                                <label>I have an agent</label>
                                <input name="haveAgent" type="checkbox" onChange={() => setHasAgent(!hasAgent)}/>
                            </div>
                        }
                    </>
                }

            </div>
            <div className="buttonsRow">
                <button onClick={() => handleClick(userRole.CLUB)}
                        className={`accountButtons clubButton ${role === userRole.CLUB ? "active" : ""}`}>
                    {formLocalize.club}
                </button>
                <button onClick={() => handleClick(userRole.ACADEMY)}
                        className={`accountButtons academyButton ${role === userRole.ACADEMY ? "active" : ""}`}>
                    {formLocalize.academy}
                </button>
            </div>
        </div>
            </>
    );

}

export default AccountSelectButton;