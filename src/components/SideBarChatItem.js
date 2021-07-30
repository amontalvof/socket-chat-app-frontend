import React from 'react';
import user from '../icons/user.png';

const SideBarChatItem = () => {
    return (
        <div className="chat_list ">
            {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img">
                    <img src={user} alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>Some random name</h5>
                    <span className="text-success">Online</span>
                    <span className="text-danger">Offline</span>
                </div>
            </div>
        </div>
    );
};

export default SideBarChatItem;
