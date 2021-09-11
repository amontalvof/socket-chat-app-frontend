import React, { createContext, useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from './chat/chatContext';
import useSocket from '../hooks/useSocket';
import { types } from '../types/types';
import { scrollToBottom } from '../helpers/scrollToBottom';

export const SocketContext = createContext();

const backendUrl =
    process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_BACKEND_PRODUCTION_URL
        : process.env.REACT_APP_BACKEND_DEVELOPMENT_URL;
export const SocketProvider = ({ children }) => {
    const { socket, online, connectSocket, disconnectSocket } =
        useSocket(backendUrl);
    const { auth } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

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
            dispatch({
                type: types.usersLoaded,
                payload: users,
            });
        });
    }, [socket, dispatch]);

    useEffect(() => {
        socket?.on('personal-message', (message) => {
            dispatch({
                type: types.newMessage,
                payload: message,
            });
            scrollToBottom({ htmlId: 'messages', duration: 250 });
        });
    }, [socket, dispatch]);

    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    );
};
