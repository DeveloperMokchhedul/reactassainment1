import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Incidents from './pages/Incidents'
import Locations from './pages/Locations'
import Activities from './pages/Activities'
import Documents from './pages/Documents'
import CypherAi from './pages/CypherAi'
import Navbar from './components/navbar/Navbar'
import SecondaryNavbar from './components/navbar/SecondaryNavbar'
import GetStartPage from './components/Incidents/GetStartPage'
import IncidentDescriber from './components/Incidents/IncidentDescriber'
import InsidentInput from './components/Incidents/insidentInput/InsidentInput'
import InsidentPlace from './components/Incidents/place/InsidentPlace'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<SecondaryNavbar />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<SecondaryNavbar />}>
          <Route path='/incidents' element={<Incidents />} />
          <Route path='/incidents/create' element={<GetStartPage />} />
          <Route path='/incidents/create/describer' element={<IncidentDescriber />} />
          <Route path='/incidents/create/describer/details' element={<InsidentInput />} />
          <Route path='/incidents/create/describer/details/location' element={ <InsidentPlace />} />
        </Route>
        <Route element = {<SecondaryNavbar />}>
          <Route path='/locations' element={<Locations />} />
        </Route>
        <Route path='/activities' element={<Activities />} />
        <Route path='/documents' element={<Documents />} />
        <Route path='/cypherai' element={<CypherAi />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
