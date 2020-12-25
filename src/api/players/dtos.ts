import PlayerRoleEnum from "../../utils/enum/PlayerRoleEnum";

export interface AuthDto {
  login: string,
  password: string,
}

export interface RegistrationDto {
  login: string,
  password: string,
  role: PlayerRoleEnum,
  agent: boolean,
}

