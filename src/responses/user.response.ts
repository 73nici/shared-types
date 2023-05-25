import { TBaseResponse } from './base.response'
import { TUserWithoutPassword } from '../entities'
import { EUserMessages } from '../messages'


export type TUserLoginResponse = TBaseResponse<TUserWithoutPassword, EUserMessages.REGISTER>
export type TUserLogoutResponse = TBaseResponse<void, EUserMessages.LOGOUT>
export type TUserRegisterResponse = TBaseResponse<TUserWithoutPassword, EUserMessages.REGISTER>
export type TUserDeleteResponse = TBaseResponse<void, EUserMessages.DELETE>
export type TUserUpdateResponse = TBaseResponse<TUserWithoutPassword, EUserMessages.UPDATE>