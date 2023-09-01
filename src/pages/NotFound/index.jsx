import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Page <span>{location.pathname}</span> not found</h1>
      <div className='btn-container2'>
        <button
        onClick={()=> navigate('/colours')}
        >
          Back to Colours
        </button>
      </div>
    </>
  )
}

export default NotFound
