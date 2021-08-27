import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import userLogo from '../icons/user.png';
import { ChatContext } from '../context/chat/chatContext';
import { types } from '../types/types';
import { fetchWithToken } from '../helpers/fetch';
import { scrollToBottom } from '../helpers/scrollToBottom';

const SideBarChatItem = ({ user }) => {
    const { name, online, uid } = user;
    const {
        chatState: { chatActive },
        dispatch,
    } = useContext(ChatContext);

    const handleClick = async () => {
        dispatch({ type: types.activateChat, payload: uid });

        // * Load chat messages
        const resp = await fetchWithToken(`messages/${user.uid}`);
        dispatch({ type: types.loadMessages, payload: resp.messages });

        scrollToBottom({ htmlId: 'messages', duration: 0 });
    };

    return (
        <div
            className={`chat_list ${uid === chatActive && 'active_chat'}`}
            onClick={handleClick}
        >
            <div className="chat_people">
                <div className="chat_img">
                    <img src={userLogo} alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>{name}</h5>
                    {online ? (
                        <span className="text-success">Online</span>
                    ) : (
                        <span className="text-danger">Offline</span>
                    )}
                </div>
            </div>
        </div>
    );
};

SideBarChatItem.propTypes = {
    user: PropTypes.object,
};

SideBarChatItem.defaultProps = {
    user: undefined,
};

export default SideBarChatItem;
