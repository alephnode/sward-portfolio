import React from 'react'
import { listItems } from '../../utils'
import SubHeader from './SubHeader'
import { SPACING } from '../../theme'

const styles = {
  marginBottom: SPACING.BODY_SECTION,
}

export default ({ topic, list, isLinks = false }) => (
  <div style={{ ...styles }}>
    <SubHeader text={topic} />
    <ul>{listItems(list, isLinks && 'link')}</ul>
  </div>
)
