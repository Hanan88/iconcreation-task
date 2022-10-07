import React from 'react' 
import President from './President';
import VicePresident from './VicePresident';

const Message = () => {
    return (
        <div className='container mx-auto px-20 py-3'>
            <h2 className='text-main-orange text-3xl ml-52 mt-16 mb-5'>Message From The President & Vice President</h2>
            <President />
            <VicePresident />
        </div>
    )
}

export default Message