import React, { useState, useEffect } from "react";
import style from './Contacts.module.sass'
import { Card } from "../../components/Card/Card";
import { useAuth } from "../../hooks/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/actions";
import { getAllUsersThunk } from "../../reducers/users/usersSlice";
import { PopUp } from "../../components/PopUp/PopUp";

export const Contacts = () => {
    const {isAuth} = useAuth()
    const dispatch = useAppDispatch()
    const [moduleActive, setModuleActive] = useState(false) 
    const user = useAppSelector(state => state.users.user)

    useEffect(() => {
        dispatch(getAllUsersThunk())
    },[])

    const users = []

    for(let key in user){
        users.unshift(
            {
                ...user[key],
                id: key
            }
        )
    }

    return(
        <>
        <div className={style.container}>
            <Card
                users={users}
            />
            {isAuth ? 
                <div 
                    onClick={() => setModuleActive(true)}
                    className={style.add}>
                        +
                </div> : null
            }
            <PopUp
                open={moduleActive}
                onClose={() => setModuleActive(false)}
            />
        </div>
        </>
    )
}
