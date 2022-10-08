import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='container text-center mt-72'>
        <h1 className='text-4xl font-bold text-main-blue mb-2 uppercase '>Page Not Found</h1>
        <h3 className='text-sm font-thin text-main-orange mb-8 '>Please check the URL and try again</h3>
        <Link to='/' className='bg-main-orange text-white p-3 rounded mt-8'>GO back home</Link>
    </div>
  )
}

export default PageNotFound