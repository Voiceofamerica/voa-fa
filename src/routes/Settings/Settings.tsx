
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { connect, Dispatch } from 'react-redux'
import { compose } from 'redux'

import BottomNav, { IconItem } from '@voiceofamerica/voa-shared/components/BottomNav'

import DefaultBottomNav from 'containers/DefaultBottomNav'
import analytics, { AnalyticsProps } from 'helpers/analytics'
import clearAll from 'redux-store/actions/clearAll'

import { settings, panicButtonHolder, panicButton, topNav, buttons, settingsButton, buttonIcon } from './Settings.scss'

interface DispatchProps {
  clearAll: () => void
}

type RouteProps = RouteComponentProps<void>

type Props = RouteProps & AnalyticsProps & DispatchProps

class SettingsRoute extends React.Component<Props> {
  render () {
    const { history, clearAll } = this.props

    return (
      <div className={settings}>
        <div className={panicButtonHolder}>
          <div className={panicButton} onClick={clearAll}>
            این اپ را حذف کن
          </div>
        </div>
        <div className={buttons}>
          <button className={settingsButton} onClick={() => history.push(`/settings/categories`)}>
            مدیریت موضوعات
            <i className={`mdi mdi-chevron-left ${buttonIcon}`} />
          </button>
          <button className={settingsButton} onClick={() => history.push(`/settings/media`)}>
            تنظیم‌های صدا
            <i className={`mdi mdi-chevron-left ${buttonIcon}`} />
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  clearAll: () => dispatch(clearAll()),
})

const withRedux = connect(null, mapDispatchToProps)

const withAnalytics = analytics<Props>({
  state: 'Settings',
  title: 'Settings',
})

export default compose(
  withRedux,
  withAnalytics,
)(SettingsRoute)
