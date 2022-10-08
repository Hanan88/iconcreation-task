import React, { useEffect, useState } from 'react'
import axios from 'axios'
import mission from '../../../images/assests/mission/mission.png'

const Details = () => {
  const [missionVision, setMissionVision] = useState('')

  const getMissionVision = async () => {
    try {
      const response = await axios.get('https://demos-iconcreations.com/schlafmiestrback/api/missionVision')
      setMissionVision(response.data.message.mission_vision)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMissionVision()
  }, [])

  return (
    <div>
      {missionVision && missionVision.map((item) => (
        <section key={item.id} className='flex flex-wrap pt-10 pl-24 lg:flex-nowrap md:flex-wrap sm:flex-wrap'>
          <div>
            <h2 className='text-5xl capitalize text-slate-300'>{item.type}</h2>
            <img src={mission} alt='' className='w-20 -mt-4 ml-10' />
          </div>
          <p className=' pt-8 font-medium text-sm leading-5'>
            {item.english_description.length > 150 ?
              item.english_description.slice(0, 270)
              : (item.english_description)}
          </p>
        </section>
      ))}
    </div>
  )
}

export default Details
