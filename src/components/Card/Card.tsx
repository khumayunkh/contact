import React from "react";
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
            <div className={style.card}>
                <div className={style.user}>
                    <div className={style.back}></div>
                    <h5 className={style.name}>{item.firstName}</h5>
                </div>
                <div className={style.user_content}>
                   <p>lastName: {item.lastName}</p>
                   <p>firstName: {item.firstName}</p>
                   <p>phoneNumber: {item.phoneNumber}</p>
                   <p>email: {item.email}</p>
                   <p>category: {item.category}</p>
                </div>
                {isAuth ? <button className={style.delete}>Delete</button> : null}
            </div>
        ))}
        </>
    )
}