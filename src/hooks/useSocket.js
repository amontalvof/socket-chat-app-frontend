import { useState, useEffect, useCallback } from 'react';
import io from 'socket.io-client';

const useSocket = (serverPath) => {
    const [socket, setSocket] = useState(null);
    const [online, setOnline] = useState(false);

    const connectSocket = useCallback(() => {
        const token = localStorage.getItem('token');
        const socketTemp = io.connect(serverPath, {
            transport: ['websocket'],
            autoConnect: true,
            forceNew: true,
            query: {
                'x-token': token,
            },
        });
        setSocket(socketTemp);
    }, [serverPath]);

    const disconnectSocket = useCallback(() => {
        socket?.disconnect();
    }, [socket]);

    useEffect(() => {
        socket?.on('connect', () => {
            setOnline(true);
        });
        socket?.on('disconnect', () => {
            setOnline(false);
        });
    }, [socket]);

    return { socket, online, connectSocket, disconnectSocket };
};

export default useSocket;
