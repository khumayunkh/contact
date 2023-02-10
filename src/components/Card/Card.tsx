import React, { useState } from "react";
import { IUser } from "../../api/users/interfasec";
import { useAppDispatch } from "../../hooks/actions";
import { useAuth } from "../../hooks/auth";
import { deleteUserThunk, getAllUsersThunk } from "../../reducers/users/usersSlice";
import style from './Card.module.sass'

interface ICardProp{
    users: IUser[]
}

export const Card: React.FC<ICardProp> = ({users}) => {
    const dispatch = useAppDispatch()
    const {isAuth} = useAuth()

    const removeItem = (user: any) => {
        users.filter(item => item.id !== user.id)
    }

    return(
        <>
        {users?.map(item => (
            <div key={item.id} className={style.card}>
                <div className={style.user}>
                    <div className={style.back}></div>
                    <h5 className={style.name}></h5>
                </div>
                <div className={style.user_content}>
                   <p>lastName: {item.lastName}</p>
                   <p>firstName: {item.firstName}</p>
                   <p>phoneNumber: {item.phoneNumber}</p>
                   <p>email: {item.email}</p>
                   <p>category: {item.category}</p>
                </div>
                {isAuth ? <button onClick={() =>{ dispatch(deleteUserThunk(item.id)); removeItem(item.id)}} className={style.delete}>Delete</button> : null}
            </div>
        ))}
        </>
    )
}