import React, {useState} from "react";
import formLocalize from '../../../../store/localize/form';
import userRole from "../../../../utils/enum/userRole";


const AccountSelectButton = () => {

    const [role, setRole] = useState(userRole.PLAYER);

    function handleClick(newRole: userRole) {
        setRole(newRole);
    }

    return (
        <div className="accountSelectButtons">
            <label className="textInput" >{formLocalize.whoAreYou}</label>
            <div className="buttonsRow">
                <button onClick={() => handleClick(userRole.PLAYER)}
                        className={`accountButtons playerButton ${role === userRole.PLAYER ? "active" : ""}`}>
                            {formLocalize.player}
                </button>
                <button onClick={() => handleClick(userRole.SCOUT)}
                        className={`accountButtons scoutButton ${role === userRole.SCOUT ? "active" : ""}`}>
                            {formLocalize.scout}</button>
            </div>
            <div className="buttonsRow">
                <button onClick={() => handleClick(userRole.CLUB)}
                        className={`accountButtons clubButton ${role === userRole.CLUB ? "active" : ""}`}>
                            {formLocalize.club}</button>
                <button onClick={() => handleClick(userRole.ACADEMY)}
                        className={`accountButtons academiaButton ${role === userRole.ACADEMY ? "active" : ""}`}>
                            {formLocalize.academy}</button>

            </div>
        </div>
    );

}

export default AccountSelectButton;