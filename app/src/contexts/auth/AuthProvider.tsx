import React, { createContext, FC, useEffect, useState } from 'react'
import { variablesAmbient } from '~/src/features/types/ApiTypes'

interface AuthProps {
    token: string
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
})

const AuthProvider: FC = ({ children }) => {

    const [token, setToken] = useState("")
    const [logged, setLogged] = useState(false)
    const [variables, setVariables] = useState({
        "CLIENT_ID": "",
        "REDIRECT_URI": "",
        "AUTH_ENDPOINT": "",
    })

    const getToken = () => {
        let urlParams = new URLSearchParams(window.location.hash.replace("#", "?"));
        let token = urlParams.get('access_token');
        if (token != null) {
            setToken(token)
            localStorage.setItem("accessToken", token)
        }

        setLogged(true)
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
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider