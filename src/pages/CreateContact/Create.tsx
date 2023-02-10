import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { IUserCreate } from "../../api/users/interfasec";
import { useAppDispatch } from "../../hooks/actions";
import { createUserThunk, getAllUsersThunk } from "../../reducers/users/usersSlice";
import style from './Create.module.sass'

export const Create = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, reset} = useForm<IUserCreate>()
    const [job, setJob] = useState(false)
    const [family, setFamily] = useState(false)
    
    const firstName = register('firstName')
    const lastName = register('lastName')
    const email = register('email')
    const phoneNumber = register('phoneNumber')
    
    const onSubmit = (data: IUserCreate) =>{
        dispatch(createUserThunk({
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
                <h2>Create New Contact</h2>
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
                    <NavLink className={style.cancel} to='/'>Cancel</NavLink>
                    <button className={style.btn}>Save</button>
                </div>
            </form>
        </div>
        </>
    )
}