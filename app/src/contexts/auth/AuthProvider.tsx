import React, { createContext, FC, useEffect, useState } from 'react'

interface AuthProps {
    token: string
    setToken(e: string): void
    getToken(): void
    logged: boolean
    setLogged(login: boolean): void
}

export const AuthContext = createContext<AuthProps>({
    token: "",
    setToken: () => { },
    getToken: () => { },
    logged: false,
    setLogged: () => { },
})

const AuthProvider: FC = ({ children }) => {

    const [token, setToken] = useState("")
    const [logged, setLogged] = useState(false)

    const getToken = () => {
        let urlParams = new URLSearchParams(window.location.hash.replace("#", "?"));
        let token = urlParams.get('access_token');
        if (token != null) {
            setToken(token)
            localStorage.setItem("accessToken", token)
    }
        setLogged(!logged)
    }

    return (
        <AuthContext.Provider value={{
            token,
            setToken,
            getToken,
            logged,
            setLogged,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider