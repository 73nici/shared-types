export type TUser = {
    id?: string
    username: string
    password: string
}

export type TUserWithConfirmation = TUser & {
    passwordConfirmation: string
}

export type TUserWithNewData = TUserWithConfirmation & {
    newUsername: string
    newPassword: string
    newPasswordConfirmation: string
}

export type TUserWithoutPassword = Omit<TUser, 'password'>