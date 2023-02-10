import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { client } from "../../api";
import { Form } from "../../components/Form/Form";
import { useAppDispatch } from '../../hooks/actions';
import { useAuth } from "../../hooks/auth";
import { authActions } from "../../reducers/auth/authSlice";

export const Login = () => {
    const dispatch = useAppDispatch();
    const {isAuth} = useAuth()

    const handleLogin = (email: string, password: string)  => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
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
        <Form
            title="Login"
            handleClick={handleLogin}
            name='sign-up'
        /> 
    )
}
