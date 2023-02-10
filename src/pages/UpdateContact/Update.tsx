import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/actions";
import { getSingleUserThunk } from "../../reducers/users/usersSlice";
import style from './Update.module.sass'

export const Update = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.users)

    useEffect(() => {
        dispatch(getSingleUserThunk(id))
    },[])

    console.log(user)

    return(
        <>

        </>
    )
}
