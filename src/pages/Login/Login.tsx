import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { client } from "../../api";
import { Form } from "../../components/Form/Form";
import { useAppDispatch } from '../../hooks/actions';
import { setUser } from "../../reducers/authSlice";

export const Login = () => {
    const dispatch = useAppDispatch();

    const handleLogin = (email: string, password: string)  => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
            })
            .catch(console.error)    
    }
    
    return (
        <Form
            title="Login"
            handleClick={handleLogin}
            name='sign-up'
        /> 
    )
}
