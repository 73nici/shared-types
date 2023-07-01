import { TUser, TUserWithConfirmation, TUserWithNewData } from '../entities/user.entities'

export type TUserLoginArgs = TUser
export type TUserLogoutArgs = void
export type TUserRegisterArgs = TUserWithConfirmation
export type TUserDeleteArgs = TUserWithConfirmation
export type TUserUpdateArgs = TUserWithNewData