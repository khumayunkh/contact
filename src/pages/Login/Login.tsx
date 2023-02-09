import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Form } from "../../components/Form/Form";
import { useAppDispatch } from '../../hooks/actions';
import { setUser } from "../../reducers/authSlice";

const Login = () => {
    const dispatch = useAppDispatch();

    const handleRegister = (email: string, password: string)  => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
        <>
         <Form
            title="register"
            handleClick={handleRegister}
        />    
        </>
    )
}

export {Login}