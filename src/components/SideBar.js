import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/chatContext';
import SideBarChatItem from './SideBarChatItem';

const SideBar = () => {
    const {
        chatState: { users },
    } = useContext(ChatContext);
    const {
        auth: { uid },
    } = useContext(AuthContext);

    return (
        <div className="inbox_chat">
            {users
                .filter((item) => item.uid !== uid)
                .map((item) => {
                    return <SideBarChatItem key={item.uid} user={item} />;
                })}
            <div className="extra_space"></div>
        </div>
    );
};

export default SideBar;
