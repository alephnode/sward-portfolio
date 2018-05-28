import React from 'react'
import { COLORS, SPACING } from '../../theme'
import Container from './Container'
import { skills, interests, aboutLinks } from '../verbiage'
import SectionTopic from './SectionTopic'

const styles = {
  backgroundColor: COLORS.OFFWHITE,
  padding: SPACING.GUTTER.PADDING_LEFT,
}

const MainStage = props => (
  <Container styleProps={{ ...styles }}>
    <SectionTopic topic="about" list={aboutLinks} isLinks />
    <SectionTopic topic="skills" list={skills} />
    <SectionTopic topic="interests" list={interests} />
  </Container>
)

export default MainStage
