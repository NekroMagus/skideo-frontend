import React, {Dispatch, SetStateAction, useState} from "react";
import formLocalize from '../../../../store/localize/form';
import UserRoleEnum from "../../../../utils/enum/UserRoleEnum";
import EntryEnum from "../../../../utils/enum/EntryEnum";
import PlayerRoleEnum from "../../../../utils/enum/PlayerRoleEnum";

interface RoleProps {
  entry: EntryEnum,
  role: UserRoleEnum,
  setRole: Dispatch<SetStateAction<UserRoleEnum>>
}

const AccountSelectButton = ({entry, role, setRole}: RoleProps) => {

  const handleClick = (newRole: UserRoleEnum) => {
    setRole(newRole);
    if (role !== UserRoleEnum.PLAYER) {
      setHasAgent(false);
      setPlayerRole(PlayerRoleEnum.NONE);
    }
  }

  const [playerRole, setPlayerRole] = useState(PlayerRoleEnum.NONE);
  const [hasAgent, setHasAgent] = useState(false);

  return (
      <>
        <div className="accountSelectButtons">
          <label className="textInput">{formLocalize.whoAreYou}</label>
          <div className="buttonsRow">
            <button onClick={() => handleClick(UserRoleEnum.PLAYER)}
                    className={`accountButtons playerButton ${role === UserRoleEnum.PLAYER ? "active" : ""}`}>
              {formLocalize.player}
            </button>
            <button onClick={() => handleClick(UserRoleEnum.SCOUT)}
                    className={`accountButtons scoutButton ${role === UserRoleEnum.SCOUT ? "active" : ""}`}>
              {formLocalize.scout}
            </button>
            {
              role === UserRoleEnum.PLAYER && entry === EntryEnum.REGISTRATION &&
              <>
                <div>
                  <button onClick={() => setPlayerRole(PlayerRoleEnum.PROFESSIONAL)}
                          className={`newButt ${playerRole === PlayerRoleEnum.PROFESSIONAL ? "active" : ""}`}>
                    {formLocalize.professional}
                  </button>
                  <button onClick={() => setPlayerRole(PlayerRoleEnum.AMATEUR)}
                          className={`newButt ${playerRole === PlayerRoleEnum.AMATEUR ? "active" : ""}`}>
                    {formLocalize.amateur}
                  </button>
                </div>
                {
                  playerRole === PlayerRoleEnum.PROFESSIONAL &&
                  <div className="agentInput">
                    <label>{formLocalize.hasAgent}</label>
                    <input name="haveAgent" type="checkbox" onChange={() => setHasAgent(!hasAgent)}/>
                  </div>
                }
              </>
            }

          </div>
          <div className="buttonsRow">
            <button onClick={() => handleClick(UserRoleEnum.CLUB)}
                    className={`accountButtons clubButton ${role === UserRoleEnum.CLUB ? "active" : ""}`}>
              {formLocalize.club}
            </button>
            <button onClick={() => handleClick(UserRoleEnum.ACADEMY)}
                    className={`accountButtons academyButton ${role === UserRoleEnum.ACADEMY ? "active" : ""}`}>
              {formLocalize.academy}
            </button>
          </div>
        </div>
      </>
  );

}

export default AccountSelectButton;