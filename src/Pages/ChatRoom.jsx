import React from 'react';
import ChatBox from '../Components/ChatBox';
import SendMessage from '../Components/SendMessage';

const ChatRoom = () => {
    return (
        <div>
            <ChatBox></ChatBox>
            <SendMessage></SendMessage>
        </div>
    );
};

export default ChatRoom;