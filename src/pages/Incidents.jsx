import React from 'react'
import ImageCardSystem from '../components/common/ImageCardSystem'
import Container from '../components/common/Container'
import IncidentDescriber from '../components/Incidents/IncidentDescriber'
import InsidentInput from '../components/Incidents/insidentInput/InsidentInput'
import InsidentPlace from '../components/Incidents/place/InsidentPlace'

function Incidents() {
  return (
    <div>
      <Container>
        <ImageCardSystem />
      </Container>
    </div>
  )
}

export default Incidents
