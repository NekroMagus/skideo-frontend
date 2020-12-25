import React, {Dispatch, SetStateAction} from "react";
import formLocalize from '../../../store/localize/form';
import UserRoleEnum from "../../../utils/enum/UserRoleEnum";
import PlayerRoleEnum from "../../../utils/enum/PlayerRoleEnum";
import EntryEnum from "../../../utils/enum/EntryEnum";

interface RoleProps {
  entry: EntryEnum,
  role: UserRoleEnum,
  setRole: Dispatch<SetStateAction<UserRoleEnum>>
  playerRole: PlayerRoleEnum,
  setPlayerRole: Dispatch<SetStateAction<PlayerRoleEnum>>,
}

const AccountSelectButton = ({
                               entry,
                               role,
                               setRole,
                               playerRole,
                               setPlayerRole,
                             }: RoleProps) => {

  const handleClick = (newRole: UserRoleEnum) => {
    setRole(newRole);
    if (role !== UserRoleEnum.PLAYER) {
      setPlayerRole(PlayerRoleEnum.NONE);
    }
  }

  const handleRole = (newRole: PlayerRoleEnum) => {
    setPlayerRole(newRole);
  }

  return (
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
                <button onClick={() => handleRole(PlayerRoleEnum.PROFESSIONAL)}
                        className={`newButt ${playerRole === PlayerRoleEnum.PROFESSIONAL ? "active" : ""}`}>
                  {formLocalize.professional}
                </button>
                <button onClick={() => handleRole(PlayerRoleEnum.AMATEUR)}
                        className={`newButt ${playerRole === PlayerRoleEnum.AMATEUR ? "active" : ""}`}>
                  {formLocalize.amateur}
                </button>
              </div>
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
  );

}

export default AccountSelectButton;