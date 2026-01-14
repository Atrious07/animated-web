import React, { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Agent from './pages/Agent'
import Navigation from './components/home/Navigation'
const App = () => {

  return (
    <>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mission' element={<Project />} />
          <Route path='/agents' element={<Agent/>} />
        </Routes>
    </>
  )
}

export default App 