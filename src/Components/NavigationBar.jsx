import React from 'react';

const NavigationBar = () => {
    return (
        <div className='navbar bg-neutral text-neutral-content'>
            <div className="conatinerWrap flex justify-between">
                <a className="btn btn-ghost normal-case text-xl">Instant Chat</a>
                <button>Log Out</button>
            </div>
        </div>
    );
};

export default NavigationBar;