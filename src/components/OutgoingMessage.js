import React from 'react';
import hourMonth from '../helpers/hourMonth';

const OutgoingMessage = ({ msg }) => {
    const dateTime = hourMonth(msg.createdAt);
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{msg.message}</p>
                <span className="time_date">{dateTime}</span>
            </div>
        </div>
    );
};

export default OutgoingMessage;
