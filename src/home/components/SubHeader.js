import React from 'react'
import { COLORS } from '../../theme'

const styles = {
  color: COLORS.ACCENT,
  textTransform: 'uppercase',
  fontSize: '.8rem',
  fontWeight: 900,
}

export default ({ text }) => <h2 style={{ ...styles }}>{text}</h2>
