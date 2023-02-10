import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IUser } from "../../api/users/interfasec";
import { useAuth } from "../../hooks/auth";
import style from './Card.module.sass'

interface ICardProp{
    users: IUser[]
    query: string
}

export const Card: React.FC<ICardProp> = ({users, query}) => {
    const {isAuth} = useAuth()

    return(
        <>
        { users?.filter(item => {
            if (query === '') {
              return item;
            } else if (item.email.toLowerCase().includes(query.toLowerCase()) 
                        || item.firstName.toLowerCase().includes(query.toLowerCase()) 
                        || item.lastName.toLowerCase().includes(query.toLowerCase())
                        || item.phoneNumber.toLowerCase().includes(query.toLowerCase())) {
              return item;
            }
        }).map(item => (
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
                        <NavLink className={style.update} to={`/update/${item.id}`}>Edit</NavLink>
                    </>
                : null}
            </div>
        ))}
        </>
    )
}