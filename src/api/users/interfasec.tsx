export interface IUser{
    id: string
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
    user?: IUser[]
}