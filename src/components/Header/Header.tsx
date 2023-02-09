import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/actions";
import style from './Header.module.sass'


function Header(){
    const {token} = useAppSelector(state => state.user)

    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.menu}>
                    <h1>Logo</h1>
                </div>
                <div className={style.profile}>
                    {token == null ? 
                    <>
                        <NavLink className={style.btn} to='/login'>Login</NavLink>
                        <NavLink className={style.signup} to='/sign-up'>SignUp</NavLink>
                    </> : 
                    <>
                        <button className={style.btn}>LogOut</button>
                    </>}    
                </div>
            </div>
        </div>
        </>
    )
}

export default Header