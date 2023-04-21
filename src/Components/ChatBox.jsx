import React from 'react';
import Message from './Message';

const ChatBox = () => {

    const messages =[
        {
            id: 1,
            text: "hello there!",
            name: "Emon"
        },
        {
            id: 2,
            text: "hi!",
            name:"john"
        }
    ]

    return (
        <div className='pb-44 pt-20 conatinerWrap'>
            {
                messages.map(message => <Message key={message.id} message={message}></Message>)
            }
        </div>
    );
};

export default ChatBox;