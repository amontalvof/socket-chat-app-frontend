import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/chatContext';
import IncomingMessage from './IncomingMessage';
import OutgoingMessage from './OutgoingMessage';
import SendMessage from './SendMessage';

const Messages = () => {
    const {
        chatState: { messages },
    } = useContext(ChatContext);
    const {
        auth: { uid },
    } = useContext(AuthContext);

    return (
        <div className="mesgs">
            <div className="msg_history" id="messages">
                {messages.map((item) =>
                    item.to === uid ? (
                        <IncomingMessage key={item._id} msg={item} />
                    ) : (
                        <OutgoingMessage key={item._id} msg={item} />
                    )
                )}
            </div>
            <SendMessage />
        </div>
    );
};

export default Messages;
