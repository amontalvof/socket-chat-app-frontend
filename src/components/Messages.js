import React from 'react';
import IncomingMessage from './IncomingMessage';
import OutgoingMessage from './OutgoingMessage';
import SendMessage from './SendMessage';

const Messages = () => {
    const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className="mesgs">
            <div className="msg_history">
                {messages.map((item) =>
                    item % 2 === 0 ? (
                        <IncomingMessage key={item} />
                    ) : (
                        <OutgoingMessage key={item} />
                    )
                )}
            </div>
            <SendMessage />
        </div>
    );
};

export default Messages;
