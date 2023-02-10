import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IUser } from "../../api/users/interfasec";
import { useAppDispatch } from "../../hooks/actions";
import { createUserThunk } from "../../reducers/users/usersSlice";
import style from './PopUp.module.sass'


interface PopUpProps {
    open: boolean,
    onClose: () => void;
}

export const PopUp: React.FC<PopUpProps>  = ({open, onClose}) => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit, reset} = useForm<IUser>()
    const [job, setJob] = useState(false)
    const [family, setFamily] = useState(false)
    
    const firstName = register('firstName')
    const lastName = register('lastName')
    const email = register('email')
    const phoneNumber = register('phoneNumber')
    
    const onSubmit = (data: IUser) =>{
        dispatch(createUserThunk({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            category: job ? 'Job' : 'Family'
        }))
        reset()
    }

    if (!open) return null;

    return(
        <>
        <div onClick={onClose} className={style.overlay}></div>
        <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={style.modalContainer}
            >
            <div className={style.modal_in}>
                <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                    <input {...firstName} className={style.input} placeholder="First Name"/>
                    <input {...lastName} className={style.input} placeholder="Last Name"/>
                    <input {...email} className={style.input} placeholder="Email"/>
                    <input {...phoneNumber} className={style.input} placeholder="Phone Number"/>
                    <div className={style.category}>
                        <div onClick={() => {setJob(!job); setFamily(false)}}>
                            <h4 className={job ? style.active : style.category_in}>Job</h4>
                        </div>
                        <div onClick={() => {setFamily(!family); setJob(false)}}>
                            <h4  className={family ? style.active : style.category_in}>Family</h4>
                        </div>
                    </div>
                    <button className={style.btn}>Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}