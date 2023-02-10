import { client } from ".."
import { IUser, IUserCreate } from "./interfasec"

export const getUsers = async() => {
    return await client.get('users.json')
}

export const getSingleUser = async(id: string | undefined) => {
    return await client.get(`users/${id}.json`)
}

export const createUser = async(data: IUserCreate) => {
    const {firstName, lastName, email, phoneNumber, category} = data
    return await client.post('users.json/', data)
}

export const updateUser = async(data: IUser) => {
    return await client.put(`users/${data.id}.json/`, data)
}

export const deleteUser = async(id: any) => {
    return await client.delete(`users/${id}.json`)
}