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
            <p>{formLocalize.whoAreYou}</p>
            <button onClick={() => handleClick(userRole.PLAYER)}
                    className={`accountButtons playerButton ${role === userRole.PLAYER ? "active" : ""}`}>
                        {formLocalize.player}
            </button>
            <button onClick={() => handleClick(userRole.SCOUT)}
                    className="accountButtons scoutButton">{formLocalize.scout}</button>
            <button onClick={() => handleClick(userRole.CLUB)}
                    className="accountButtons clubButton">{formLocalize.club}</button>
            <button onClick={() => handleClick(userRole.ACADEMY)}
                    className="accountButtons academiaButton">{formLocalize.academy}</button>
        </div>
    );

}

export default AccountSelectButton;