import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/actions";
import { useAuth } from "../../hooks/auth";
import { authActions } from "../../reducers/auth/authSlice";
import style from './Header.module.sass'


function Header(){
    const dispatch = useAppDispatch()
    const { isAuth, email } = useAuth()

    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.menu}>
                    <h1>Logo</h1>
                </div>
                <div className={style.profile}>
                    {!isAuth ? 
                    <>
                        <NavLink className={style.btn} to='/login'>Login</NavLink>
                        <NavLink className={style.signup} to='/sign-up'>SignUp</NavLink>
                    </> : 
                    <>
                        <h5>{email}</h5>
                        <button 
                            onClick={() => dispatch(authActions.removeUser())}
                            className={style.btn}>LogOut</button>
                    </>}    
                </div>
            </div>
        </div>
        </>
    )
}

export default Header