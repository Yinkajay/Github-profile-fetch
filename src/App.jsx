import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Repos from './components/Repos'
import StateContext from './store/state-context'

function App() {

  return (
    <StateContext.Provider value={
      {
        githubProfileName: '',
        hasFetchedProfile: false,
        numberOfRepositories: 0,
        testData: 'YINX'
      }
    }>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/repos' element={<Repos />} />
        </Routes>
      </>
    </StateContext.Provider>
  )
}

export default App
