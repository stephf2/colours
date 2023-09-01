import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Home Page</h1>
      <div className='btn-container'>  
        <button
        onClick={()=> navigate('/colours')}
        >
          See Colours
        </button>   
        <button 
            onClick={() => navigate('/colours/new')}
          >
            Add Colour
        </button>

      </div>

    </>
  )
}

export default Home
