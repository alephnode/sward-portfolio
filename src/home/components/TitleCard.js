import React from 'react'
import { COLORS, FONTS, SPACING } from '../../theme'
import Container from './Container'

const styles = {
  backgroundColor: COLORS.PASTEL_BLUE,
  padding: `40px ${SPACING.GUTTER.PADDING_LEFT}`,
  title: {
    color: COLORS.ACCENT,
    fontWeight: 900,
    margin: 0,
  },
  fontFamily: FONTS.ROBOTO,
}

const TitleCard = props => (
  <Container styleProps={styles} modifier="fullWidth">
    <h1 style={{ ...styles.title }}>stephen ward</h1>
    <div>full-stack engineer</div>
  </Container>
)

export default TitleCard
