import React from 'react';
import SideBarChatItem from './SideBarChatItem';

const SideBar = () => {
    const chats = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className="inbox_chat">
            {chats.map((item) => {
                return <SideBarChatItem key={item} />;
            })}
            <div className="extra_space"></div>
        </div>
    );
};

export default SideBar;
