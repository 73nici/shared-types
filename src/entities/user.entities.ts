export type TUser = {
    id?: string
    username: string
    password: string
}

export type TUserWithConfirmation = TUser & {
    passwordConfirmation: string
}

export type TUserWithoutPassword = Omit<TUser, "password">