import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { useAppDispatch, useAppSelector } from '../../hooks/actions';
import { authActions } from "../../reducers/auth/authSlice";

export const SignUp = () => {
    const dispatch = useAppDispatch();
    const {isAuth} = useAppSelector(state => state.user)

    const handleRegister = (email: string, password: string)  => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(authActions.setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
            })
            .catch(console.error)
    }

    if(isAuth){
        return <Navigate to='/'/>
    }


    return (
        <>
         <Form
            title="SignUp"
            handleClick={handleRegister}
            name='login'
        />    
        </>
    )
}
