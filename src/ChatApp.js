import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import { ChatProvider } from './context/chat/chatContext';
import { SocketProvider } from './context/SocketContext';
import AppRouter from './router/AppRouter';

const ChatApp = () => {
    return (
        <ChatProvider>
            <AuthProvider>
                <SocketProvider>
                    <AppRouter />
                </SocketProvider>
            </AuthProvider>
        </ChatProvider>
    );
};

export default ChatApp;
