import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IUser, IUserCreate } from "../../api/users/interfasec";
import { useAppDispatch, useAppSelector } from "../../hooks/actions";
import { deleteUserThunk, getSingleUserThunk, editUserThunk } from "../../reducers/users/usersSlice";
import style from './Edit.module.sass'

export const Edit = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const [job, setJob] = useState(false)
    const [family, setFamily] = useState(false)
    const {user} = useAppSelector(state => state.users)

    const {register, handleSubmit, reset} = useForm<IUserCreate>()

    useEffect(() => {
        dispatch(getSingleUserThunk(id))
    },[])

    const firstName = register('firstName')
    const lastName = register('lastName')
    const email = register('email')
    const phoneNumber = register('phoneNumber')
    
    const onSubmit = (data: IUser) => {
        dispatch(editUserThunk({
            id: id,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            category: job ? 'Job' : 'Family'
        }))
        reset()
        navigate('/')
    }

    return(
        <>
        <div className={style.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.content}>
                <h2>{user?.email}</h2>
                <input className={style.input} {...firstName} placeholder='FirstName'/>
                <input className={style.input} {...lastName} placeholder='LastName'/>
                <input className={style.input} {...email} placeholder='Email'/>
                <input className={style.input} {...phoneNumber} placeholder='PhoneNumber'/>
                <div>
                <div className={style.category}>
                        <div onClick={() => {setJob(!job); setFamily(false)}}>
                            <h4 className={job ? style.active : style.category_in}>Job</h4>
                        </div>
                        <div onClick={() => {setFamily(!family); setJob(false)}}>
                            <h4  className={family ? style.active : style.category_in}>Family</h4>
                        </div>
                    </div>
                </div>
                <div className={style.btns}>
                    <a onClick={() => {dispatch(deleteUserThunk(id)); navigate('/')}} className={style.delete}>Delete Contact</a>
                    <NavLink className={style.cancel} to='/'>Cancel</NavLink>
                    <button className={style.btn}>Save</button>
                </div>
            </form>
        </div>
        </>
    )
}
