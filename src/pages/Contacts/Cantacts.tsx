import React from "react";
import style from './Contacts.module.sass'
import { Card } from "../../components/Card/Card";
import { useAuth } from "../../hooks/auth";

export const Contacts = () => {
    const {isAuth} = useAuth()

    return(
        <>
        <div className={style.container}>
            <Card/>
            {isAuth ? <div className={style.add}>+</div> : null}
        </div>
        </>
    )
}
