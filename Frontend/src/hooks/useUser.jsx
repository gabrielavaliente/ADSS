import { useCallback, useContext, useState } from "react";
import Context from "../context/Usercontext";
import loginService from '../services/login'

function useUser() {
    const { jwt, setJWT } = useContext(Context)
    const [state, setState] = useState({ loading: false, error: false })

    const login = useCallback(({ identifier, password }) => {
        setState({ loading: true, error: false })
        loginService({ identifier, password })
            .then(jwt => {
                setState({ loading: false, error: false })
                setJWT(jwt)
            })
            .catch(err => {
                setState({ loading: false, error: true })
                console.error(err)
            })
    }, [setJWT])

    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout
    }
}

export default useUser;
