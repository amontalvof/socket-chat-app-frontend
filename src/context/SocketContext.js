import React, { createContext, useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';
import useSocket from '../hooks/useSocket';

export const SocketContext = createContext();

const backendUrl =
    process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_BACKEND_PRODUCTION_URL
        : process.env.REACT_APP_BACKEND_DEVELOPMENT_URL;

export const SocketProvider = ({ children }) => {
    const { socket, online, connectSocket, disconnectSocket } =
        useSocket(backendUrl);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        if (auth.logged) {
            connectSocket();
        }
    }, [auth, connectSocket]);

    useEffect(() => {
        if (!auth.logged) {
            disconnectSocket();
        }
    }, [auth, disconnectSocket]);

    useEffect(() => {
        socket?.on('list-users', (users) => {
            console.log(users);
        });
    }, [socket]);

    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    );
};
