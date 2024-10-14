import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Incidents from './pages/Incidents'
import Locations from './pages/Locations'
import Activities from './pages/Activities'
import Documents from './pages/Documents'
import CypherAi from './pages/CypherAi'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Dashboard />} />
      <Route path='/incidents' element = {<Incidents />} />
      <Route path='/locations' element = {<Locations />} />
      <Route path='/activities' element = {<Activities />} />
      <Route path='/documents' element = {<Documents />} />
      <Route path='/cypherai' element = {<CypherAi />} />
      <Route path='*' element = {<NotFound />} />
    </Routes>

    </>
  )
}

export default App
