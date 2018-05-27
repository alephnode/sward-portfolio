import React from 'react'
import { COLORS } from '../theme'
import TitleCard from './components/TitleCard'
import MainStage from './components/MainStage'

const styles = {
  color: COLORS.PRIMARY,
}

export default () => (
  <div style={{ ...styles }}>
    <TitleCard />
    <MainStage />
  </div>
)
