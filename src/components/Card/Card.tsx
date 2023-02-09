import React from "react";
import style from './Card.module.sass'


export const Card = () => {
    return(
        <>
        <div className={style.card}>
            <div className={style.user}>
                <div className={style.back}></div>
                <h5 className={style.name}>H</h5>
            </div>
            <div className={style.user_content}>
               <p>lastName: qwerty</p>
               <p>firstName: qwerty</p>
               <p>phoneNumber: qwerty</p>
               <p>email: qwerty</p>
               <p>category: qwerty</p>
            </div>
            <button className={style.delete}>Delete</button>
        </div>  
        </>
    )
}