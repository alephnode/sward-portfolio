import React from 'react'

const styles = {
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  fullWidth: {
    maxWidth: '100%',
  },
}

export default ({ children, styleProps, modifier }) => (
  <div style={{ ...styles.main, ...styles[modifier], ...styleProps }}>
    {children}
  </div>
)
