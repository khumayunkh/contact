import React from "react";
import style from './Contacts.module.sass'

export const Contacts = () => {
    return(
        <>
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.user}>
                    <div className={style.back}></div>
                    <h5 className={style.name}>H</h5>
                </div>
                <div className={style.user_content}>
                   <p>name</p>
                   <p>email</p>
                </div>
            </div>  
        </div>
        </>
    )
}
