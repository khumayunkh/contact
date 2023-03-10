export interface IUser{
    id: string | undefined
    lastName: string
    firstName: string
    phoneNumber: string
    email: string
    category: string
}

export interface IUserCreate{
    lastName: string
    firstName: string
    phoneNumber: string
    email: string
    category: string
}

export interface IUserState {
    userIsLoading: boolean
    userErrorMessage?: string
    users?: IUser[]
    user? : IUser
}