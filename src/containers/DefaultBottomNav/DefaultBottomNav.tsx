
import * as React from 'react'
import { History } from 'history'

import { IconItem } from '@voiceofamerica/voa-shared/components/BottomNav'

import MainBottomNav from 'containers/MainBottomNav'

interface Props {
  history: History
}

const HOME_RGX = /^\/$/
const BREAKING_NEWS_RGX = /^\/breakingNews/
const LIVE_STREAM_RGX = /^\/liveStream/
const SETTINGS_RGX = /^\/settings/

export default class DefaultBottomNav extends React.Component<Props> {
  renderLeft () {
    const { history } = this.props

    const path = history.location.pathname
    const homeActive = HOME_RGX.test(path)
    const breakingNewsActive = BREAKING_NEWS_RGX.test(path)

    return [
      <IconItem key={0} active={homeActive} onClick={() => history.replace('/')}>
        <i className='mdi mdi-home-outline' />
      </IconItem>,
      <IconItem key={1} active={breakingNewsActive} onClick={() => history.replace('/breakingNews')}>
        <i className='mdi mdi-flash-outline' />
      </IconItem>,
    ]
  }

  renderRight () {
    const { history } = this.props

    const path = history.location.pathname
    const liveStreamActive = LIVE_STREAM_RGX.test(path)
    const settingsActive = SETTINGS_RGX.test(path)

    return [
      <IconItem key={0} active={liveStreamActive} onClick={() => history.replace('/liveStream')}>
        <i className='mdi mdi-radio-tower' />
      </IconItem>,
      <IconItem key={1} active={settingsActive} onClick={() => history.replace('/settings')}>
        <i className='mdi mdi-account-outline' />
      </IconItem>,
    ]
  }

  render () {
    return (
      <MainBottomNav
        left={this.renderLeft()}
        right={this.renderRight()}
      />
    )
  }
}
