import { createContext, useCallback, useState } from 'react';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';

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
    const register = async (name, email, password) => {
        const resp = await fetchWithoutToken({
            endpoint: 'login/new',
            data: { email, password, name },
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
        return resp.msg;
    };

    const verifyToken = useCallback(async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            });
            return false;
        }
        const resp = await fetchWithToken({ endpoint: 'login/renew' });
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
            return true;
        } else {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            });
            return false;
        }
    }, []);

    const logout = (params) => {};

    return (
        <AuthContext.Provider
            value={{ auth, login, register, verifyToken, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
