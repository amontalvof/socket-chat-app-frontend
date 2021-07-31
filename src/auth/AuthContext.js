import { createContext, useCallback, useState } from 'react';

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

    const login = (email, password) => {};
    const register = (name, email, password) => {};

    const verifyToken = useCallback((params) => {}, []);

    const logout = (params) => {};

    return (
        <AuthContext.Provider value={{ login, register, verifyToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
