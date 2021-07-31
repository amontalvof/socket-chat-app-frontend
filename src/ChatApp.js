import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import AppRouter from './router/AppRouter';

const ChatApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
};

export default ChatApp;
