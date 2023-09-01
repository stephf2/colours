import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Pages from './pages'
import './App.css'

const App = () => {
  const [colours, setColours] = useState(['red', 'yellow', 'blue', 'orange', 'green'])

  const addColour = (newColour) => {
    setColours([newColour, ...colours])
  }

    

  return (
    <div className='App'>
    <Routes>
    <Route path="/" element={<NavBar/>}>
      <Route index element={<Pages.Home/>}/> 
      
      <Route path="colours">
      <Route index element={<Pages.Colours colours={colours}/>}/>
      <Route path="new" element={<Pages.New addColour={addColour}/>}/>
      <Route path=":colour" element={<Pages.ColourItem colours={colours} />} />
      <Route path="*" element={<Pages.NotFound/>}/>
      </Route>

      <Route path="*" element={<Pages.NotFound/>}/>
    </Route>
    </Routes>
  </div>
  )
}

export default App
