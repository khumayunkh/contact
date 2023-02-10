import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IUser } from "../../api/users/interfasec";
import { useAuth } from "../../hooks/auth";
import style from './Card.module.sass'

interface ICardProp{
    users: IUser[]
}

export const Card: React.FC<ICardProp> = ({users}) => {
    const {isAuth} = useAuth()

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
                {isAuth ? 
                    <>
                        <NavLink className={style.update} to={`/update/${item.id}`}>Update</NavLink>
                    </>
                : null}
            </div>
        ))}
        </>
    )
}