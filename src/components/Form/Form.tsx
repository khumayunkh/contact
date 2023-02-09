import {FC, useState} from 'react';
import { NavLink } from 'react-router-dom';
import style from './Form.module.sass'

interface FormProps {
    title: string;
    name: string;
    handleClick: (email: string, pass: string) => void;
}

export const Form: FC<FormProps> = ({title, handleClick, name}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1>{title}</h1>
                <div className={style.form}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                    />
                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="password"
                    />
                    <button
                        className={style.btn}
                        onClick={() => handleClick(email, pass)}
                    >
                        {title}
                    </button>
                    <NavLink className={style.navigate_btn} to={`/${name}`}>{name}</NavLink>
                </div>
            </div>
        </div>
    )
}
