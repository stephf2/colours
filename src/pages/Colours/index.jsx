import React from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom'
import NotFound from '../NotFound'

const Colours = ( { colours } ) => {

  const navigate = useNavigate()

  return (
    <>
      <h1>Colours</h1>
      <div className='add-container'>
      <button 
          onClick={() => navigate('/colours/new')}
        >
          Add new colour
      </button>
      </div>
      <div className='colours-container'>
      <ul className='colours'>
        {colours.map((colour, index) => (
          <li className='colour-list' 
            key={index}
            style={{
              backgroundColor: colour
            }}
          >
            <Link className='colour-link'
            to={`/colours/${colour}`}
            >
              {colour}
            </Link>
          </li>
        ))}
      </ul>
      </div>
      <Outlet/>
    </>
    
  )
}

export default Colours
