import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { useAppDispatch } from '../../hooks/actions';
import { useAuth } from "../../hooks/auth";
import { authActions } from "../../reducers/auth/authSlice";

export const SignUp = () => {
    const dispatch = useAppDispatch();
    const {isAuth} = useAuth()

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
            .catch( (e) => {(console.log(e))} )
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
