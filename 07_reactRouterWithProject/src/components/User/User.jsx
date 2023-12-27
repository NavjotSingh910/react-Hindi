import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams();
  return (
    <div className='bg-gray-700/50 flex  flex-wrap justify-center p-6 text-9xl font-bold'>User:{userid}</div>
  )
}

export default User