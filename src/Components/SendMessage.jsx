import React, { useState } from 'react';

const SendMessage = () => {

    const [values , setValues] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const messages = e.target.name.value;
        setValues(messages);
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