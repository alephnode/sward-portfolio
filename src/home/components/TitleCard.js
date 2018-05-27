import React from 'react'
import { COLORS } from '../../theme'
import Container from './Container'

const styles = {
  backgroundColor: COLORS.PASTEL_BLUE,
  padding: '40px 20px',
  title: {
    color: COLORS.ACCENT,
    margin: 0,
  },
}

const TitleCard = props => (
  <Container styleProps={styles} modifier="fullWidth">
    <h1 style={{ ...styles.title }}>stephen ward</h1>
    <div>full-stack engineer</div>
  </Container>
)

export default TitleCard
