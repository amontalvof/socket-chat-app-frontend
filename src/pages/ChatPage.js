import React, { useContext } from 'react';
import ChatSelect from '../components/ChatSelect';
import InboxPeople from '../components/InboxPeople';
import Messages from '../components/Messages';
import { ChatContext } from '../context/chat/chatContext';
import '../css/chat.css';

const ChatPage = () => {
    const {
        chatState: { chatActive },
    } = useContext(ChatContext);
    return (
        <div className="messaging">
            <div className="inbox_msg">
                <InboxPeople />
                {chatActive ? <Messages /> : <ChatSelect />}
            </div>
        </div>
    );
};

export default ChatPage;
