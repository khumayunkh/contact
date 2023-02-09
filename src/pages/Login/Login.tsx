import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { useAppDispatch, useAppSelector } from '../../hooks/actions';
import { authActions } from "../../reducers/auth/authSlice";

export const Login = () => {
    const dispatch = useAppDispatch();
    const {isAuth} = useAppSelector(state => state.user)

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
