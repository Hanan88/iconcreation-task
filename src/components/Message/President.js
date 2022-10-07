import React, { useEffect, useState } from 'react'
import pic from '../../images/assests/president/president.png';
import axios from 'axios'

const President = () => {
    const [presidentMessage, setPresidentMessage] = useState('');

    const getPresidentMessage = async () => {
        try {
            const response = await axios.get('https://demos-iconcreations.com/schlafmiestrback/api/presidentMessage');
            setPresidentMessage(response.data.message?.president_message)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPresidentMessage()
    }, [])

    return (
        <>
            {presidentMessage && presidentMessage.map((item) => (
                <section className='flex justify-start' key={item.id}>
                    <img src={pic} alt='' className='max-h-96 z-10' />
                    <p className='bg-main-blue text-white rounded-2xl p-7 h-fit mt-9 -ml-8'>
                        <strong className='text-xl mb-4 block'>President</strong>
                        {item.english_description}
                    </p>
                </section>
            ))}
        </>
    )
}

export default President