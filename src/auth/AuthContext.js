import { createContext, useCallback, useState } from 'react';
import { fetchWithoutToken } from '../helpers/fetch';

export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null,
};

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(initialState);

    const login = async (email, password) => {
        const resp = await fetchWithoutToken({
            endpoint: 'login',
            data: { email, password },
            method: 'POST',
        });
        if (resp.ok) {
            localStorage.setItem('token', resp.token);
            const { user } = resp;
            setAuth({
                uid: user.uid,
                checking: false,
                logged: true,
                name: user.name,
                email: user.email,
            });
            console.log('Authenticated!');
        }
        return resp.ok;
    };
    const register = (name, email, password) => {};

    const verifyToken = useCallback((params) => {}, []);

    const logout = (params) => {};

    return (
        <AuthContext.Provider
            value={{ auth, login, register, verifyToken, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
