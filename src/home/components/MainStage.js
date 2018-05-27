import React from 'react'
import { COLORS } from '../../theme'
import SubHeader from './SubHeader'

const styles = {
  backgroundColor: COLORS.OFFWHITE,
  padding: '20px',
}

const MainStage = props => (
  <div style={{ ...styles }}>
    <SubHeader text="objective" />
    <div>This will be body text.</div>
  </div>
)

export default MainStage
