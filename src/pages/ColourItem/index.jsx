import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NotFound from '../NotFound'

const ColourItem = ({ colours }) => {

  const { colour } = useParams()

  const navigate = useNavigate()
  
  const selectedColour = colours.find((selectedcolour) => selectedcolour === colour)

  if(!selectedColour) {
    return <NotFound/>
  } else {
    return (
      <>
        <div className='btn-container2'>
        <button
        onClick={()=> navigate('/colours')}
        >
          Back to Colours
        </button>
        </div>

        
        <div className='selected-container'>
          <h1  className='selected'
          style={{backgroundColor: selectedColour}}
          >
            {selectedColour}
          </h1>
        </div>
      </>
    )
  }


}

export default ColourItem
