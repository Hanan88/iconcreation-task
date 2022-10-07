import React, { useEffect, useState } from 'react'
import pic from '../../images/assests/vicePresident/vice.png';
import axios from 'axios'

const VicePresident = () => {
    const [vicepresidentMessage, setVicePresidentMessage] = useState('');

    const getVicePresidentMessage = async () => {
        try {
            const response = await axios.get('https://demos-iconcreations.com/schlafmiestrback/api/vicePresident');
            console.log(response, response);
            setVicePresidentMessage(response.data.message?.vice_president)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getVicePresidentMessage()
    }, [])

    return (
        <>
            {vicepresidentMessage && vicepresidentMessage.map((item) => (
                <section className='flex justify-start' key={item.id}>
                    <p className='bg-main-blue text-white rounded-2xl p-7 h-fit mt-14 -mr-9 ml-3'>
                        <strong className='text-xl mb-4 block ml-3'>Vice President</strong>
                        {item.english_description}
                    </p>
                    <img src={pic} alt='' className='max-h-96 z-10 -mr-5' />
                </section>
            ))}
        </>
    )
}

export default VicePresident