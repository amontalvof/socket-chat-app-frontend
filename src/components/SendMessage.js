import React, { useContext, useState } from 'react';
import { SocketContext } from '../context/SocketContext';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/chatContext';

function SendMessage() {
    const [message, setMessage] = useState('');
    const { socket } = useContext(SocketContext);
    const {
        auth: { uid },
    } = useContext(AuthContext);
    const {
        chatState: { chatActive },
    } = useContext(ChatContext);

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (message.length === 0) return;
        socket.emit('personal-message', {
            from: uid,
            to: chatActive,
            message,
        });
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input
                        type="text"
                        className="write_msg"
                        placeholder="Message..."
                        value={message}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-sm-3 text-center">
                    <button className="msg_send_btn mt-3" type="submit">
                        Send
                    </button>
                </div>
            </div>
        </form>
    );
}

export default SendMessage;
