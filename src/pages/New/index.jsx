import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const New = ({ addColour }) => {
  const [newColour, setNewColour] = useState('')

  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleInput = (e) => {
    setNewColour(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newColour) {
      setError('You need to enter a colour')
    } else {
        addColour(newColour)
        navigate('/colours')
        setNewColour('')
        setError('')
      }
    }
      
  return (
    <>
      <h1>Add new colour</h1>
      <form onSubmit={handleSubmit}
        className='color-form'
      >
        <label>
          Enter a colour :
          <input
            type="text"
            value={newColour}
            onChange={handleInput}
          />
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
      {error ? <p>{error}</p> : null}
    </>
  )
}

export default New
