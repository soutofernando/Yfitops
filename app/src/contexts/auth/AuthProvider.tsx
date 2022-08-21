import React, { createContext, FC, useEffect, useState } from 'react'
import { variablesAmbient } from '~/src/features/types/ApiTypes'

interface AuthProps {
    token: string | null
    setToken(e: string): void
    getToken(): void
    logged: boolean
    setLogged(login: boolean): void
    variables: {
        "CLIENT_ID": string,
        "REDIRECT_URI": string,
        "AUTH_ENDPOINT": string,
    },
    setVariables(variables: any): void
    checkLogged(): void
}

export const AuthContext = createContext<AuthProps>({
    token: "",
    setToken: () => { },
    getToken: () => { },
    logged: false,
    setLogged: () => { },
    variables: {
        "CLIENT_ID": "",
        "REDIRECT_URI": "",
        "AUTH_ENDPOINT": "",
    },
    setVariables: () => { },
    checkLogged: () => { },
})

const AuthProvider: FC = ({ children }) => {

    const [token, setToken] = useState<string | null>("")
    const [logged, setLogged] = useState(false)
    const [variables, setVariables] = useState({
        "CLIENT_ID": "",
        "REDIRECT_URI": "",
        "AUTH_ENDPOINT": "",
    })

    const getToken = () => {
        let urlParams = new URLSearchParams(window.location.hash.replace("#", "?"));
        let token = urlParams.get('access_token');
        setToken(token)

        if (token != null) {
            localStorage.setItem("accessToken", token)
        }

        if (token) {
            if (token.length > 10) {
                setLogged(true)
            }
        }
    }
    const checkLogged = () => {
        if (localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken"))
        }
    }

    return (
        <AuthContext.Provider value={{
            token,
            setToken,
            getToken,
            logged,
            setLogged,
            variables,
            setVariables,
            checkLogged,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider