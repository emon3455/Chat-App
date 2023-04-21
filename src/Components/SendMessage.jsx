import React, { useState } from 'react';
import { UserAuth } from '../Context/AuthContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const SendMessage = () => {

    const [values , setValues] = useState(null);
    const {currentUser} = UserAuth();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const messages = e.target.name.value;

        if(messages === ""){
            alert("please enter valid message!!!");
            return;
        }

        try{
            const {uid , displayName , photoURL} = currentUser;
            await addDoc(collection(db,"message"),{
                text: messages,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
            })
        }
        catch(er){
            console.log(er);
        }

        setValues(messages);
        e.target.name.value=""
    }
    console.log(values);


    return (
        <div className='bg-gray-200 fixed bottom-0 w-full py-10 px-2 shadow-lg'>
            <form onSubmit={handleSubmit} className='conatinerWrap flex '>
                <input name='name' className='input w-full focus:outline-none bg-gray-100 rounded-r-none ' type="text" />
                <button type='submit' className='bg-gray-500 rounded-r-lg px-5 text-sm text-white'>Send</button>
            </form>
        </div>
    );
};

export default SendMessage;