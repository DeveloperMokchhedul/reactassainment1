import React from 'react'
import ImageCardSystem from '../components/common/ImageCardSystem'
import Container from '../components/common/Container'
import GetStartPage from '../components/Incidents/GetStartPage'
import IncidentDescriber from '../components/Incidents/IncidentDescriber'
import InsidentInput from '../components/Incidents/insidentInput/InsidentInput'

function Incidents() {
  return (
    <div>
      <Container>
        <ImageCardSystem />
        <GetStartPage />
        <IncidentDescriber />
        <InsidentInput />
      </Container>
    </div>
  )
}

export default Incidents
