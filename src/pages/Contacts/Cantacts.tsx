import React, { useState, useEffect } from "react";
import style from './Contacts.module.sass'
import { Card } from "../../components/Card/Card";
import { useAuth } from "../../hooks/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/actions";
import { getAllUsersThunk } from "../../reducers/users/usersSlice";
import { NavLink } from "react-router-dom";

export const Contacts = () => {
    const {isAuth} = useAuth()
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.users.users)

    const users = []

    useEffect(() => {
        dispatch(getAllUsersThunk())
    },[])

    for(let key in user){
        users.unshift(
            {
                ...user[key as any],
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
                <NavLink to='/create'>
                    <div 
                    className={style.add}>
                        +
                    </div>
                </NavLink> : null
            }
        </div>
        </>
    )
}
