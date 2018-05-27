import React from 'react'
import { COLORS } from '../../theme'

const styles = {
  backgroundColor: COLORS.PASTEL_BLUE,
  padding: '40px 20px',
  title: {
    color: COLORS.ACCENT,
    margin: 0,
  },
}

const TitleCard = props => (
  <div style={{ ...styles }}>
    <h1 style={{ ...styles.title }}>stephen ward</h1>
    <div>full-stack engineer</div>
  </div>
)

export default TitleCard
