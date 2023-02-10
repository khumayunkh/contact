import { client } from ".."
import { IUser } from "./interfasec"

export const getUsers = async() => {
    return await client.get('users.json')
}

export const createUser = async(data: IUser) => {
    const {firstName, lastName, email, phoneNumber, category} = data
    return await client.post('users.json/', data)
}

export const updateUser = async(data: IUser) => {
    return await client.put('users.json/',{ id : {data}})
}

export const deleteUser = async(id: any) => {
    return await client.delete(`users/-${id}.json`)
}