import React, {useState} from "react";
import formLocalize from '../../../../store/localize/form';
import userRole from "../../../../utils/enum/userRole";

const AccountSelectButton = () => {

    const [role, setRole] = useState(userRole.NONE);

    function handleClick(newRole: userRole) {
        setRole(newRole);
    }

    const [professional, setProfessional] = useState(false);
    const [haveAgent, setHaveAgent] = useState(false);


    return (
        <div className="accountSelectButtons">
            <label className="textInput">{formLocalize.whoAreYou}</label>
            <div className="buttonsRow">
                <button onClick={() => handleClick(userRole.PLAYER)}
                        className={`accountButtons playerButton ${role === userRole.PLAYER ? "active" : ""}`}>
                    {formLocalize.player}
                </button>
                <button onClick={() => {
                    handleClick(userRole.SCOUT);
                    setProfessional(false)
                }}
                        className={`accountButtons scoutButton ${role === userRole.SCOUT ? "active" : ""}`}>
                    {formLocalize.scout}</button>
                {role === userRole.PLAYER ? <div>
                    <button onClick={()=>{setProfessional(true)}}
                        className="accountButtons playerButton newButt">
                    Professional</button>
                    <button onClick={()=>{setProfessional(false)}}
                        className="accountButtons playerButton newButt">
                    Amateur</button></div> : null}
                {professional ? <div className="agentInput"><label>I have an agent</label>
                    <input name="haveAgent" type="checkbox"
                           onChange={()=>{setHaveAgent(!haveAgent) }}   ></input></div> : null}
            </div>
            <div className="buttonsRow">
                <button onClick={() => {
                    handleClick(userRole.CLUB);
                    setProfessional(false)
                }}
                        className={`accountButtons clubButton ${role === userRole.CLUB ? "active" : ""}`}>
                    {formLocalize.club}</button>
                <button onClick={() => {
                    handleClick(userRole.ACADEMY);
                    setProfessional(false)
                }}
                        className={`accountButtons academiaButton ${role === userRole.ACADEMY ? "active" : ""}`}>
                    {formLocalize.academy}</button>

            </div>
        </div>
    );

}

export default AccountSelectButton;