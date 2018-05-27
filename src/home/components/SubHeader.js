import React from 'react'
import { COLORS } from '../../theme'

const styles = {
  color: COLORS.ACCENT,
  textTransform: 'uppercase',
  fontSize: '1rem',
}

export default ({ text }) => <h2 style={{ ...styles }}>{text}</h2>
