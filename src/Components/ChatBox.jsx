
import { useEffect, useRef, useState } from 'react';
import Message from './Message';
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from '../firebase';

const ChatBox = () => {

    const messagesEndRef = useRef();
    const [messages , setMessages] = useState([]);

    const scrollToBottom = () =>{
        messagesEndRef.current.scrollIntoView({behavior: "smooth"})
    }
    useEffect(scrollToBottom , [messages])

    useEffect(() => {
        const q = query(
            collection(db, "message"),
            orderBy("createdAt"),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const message = [];
            querySnapshot.forEach((doc) => {
                message.push({...doc.data() , id: doc.id});
            });
            setMessages(message);
        });

        return ()=> unsubscribe;

    }, [])

    return (
        <div className='pb-44 pt-20 conatinerWrap'>
            {
                messages.map(message => <Message key={message.id} message={message}></Message>)
            }
            <div className="" ref={messagesEndRef}></div>
        </div>
    );
};

export default ChatBox;