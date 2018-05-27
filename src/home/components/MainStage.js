import React from 'react'
import { COLORS } from '../../theme'
import SubHeader from './SubHeader'
import Container from './Container'

const styles = {
  backgroundColor: COLORS.OFFWHITE,
  padding: '20px',
}

const MainStage = props => (
  <Container styleProps={{ ...styles }}>
    <SubHeader text="objective" />
    <div>This will be body text.</div>
  </Container>
)

export default MainStage
