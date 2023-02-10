import { useAppSelector } from "./actions";

export function useAuth() {
    const {email, token, id} = useAppSelector(state => state.auth);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}