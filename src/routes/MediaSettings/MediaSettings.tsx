
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { connect, Dispatch } from 'react-redux'

import BottomNav, { IconItem } from '@voiceofamerica/voa-shared/components/BottomNav'

import setMediaPlaybackRate from 'redux-store/actions/setMediaPlaybackRate'
import AppState from 'types/AppState'

import { mediaSettings, topNav, buttons, settingsButton, items, item, active } from './MediaSettings.scss'

const data = {
  speed: [
    {
      description: 'سرعت معمولی',
      value: 1,
    },
    {
      description: 'سرعت ۱.۵ برابر',
      value: 1.5,
    },
    {
      description: 'سرعت دو برابر',
      value: 2,
    },
  ],
}

interface StateProps {
  mediaPlaybackRate: number
}

interface DispatchProps {
  setPlaybackRate: (speed: number) => void
}

type OwnProps = RouteComponentProps<void>

type Props = OwnProps & StateProps & DispatchProps

class MediaSettingsBase extends React.Component<Props> {
  render () {
    const { history, mediaPlaybackRate, setPlaybackRate } = this.props

    return (
      <div className={mediaSettings}>
        <div className={topNav}>تنظیم‌های ویدپو</div>
        <div className={buttons}>
          <div className={settingsButton}>
            گزینه پخش دوباره
            <div className={items}>
              {
                data.speed.map(spd => (
                  <div
                    className={`${item} ${spd.value === mediaPlaybackRate ? active : ''}`}
                    onClick={() => setPlaybackRate(spd.value)}
                  >{spd.description}</div>
                ))
              }
            </div>
          </div>
        </div>
        <BottomNav>
          <IconItem onClick={() => history.goBack()}>
            <i className={`mdi mdi-arrow-left`} />
          </IconItem>
        </BottomNav>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  mediaPlaybackRate: state.settings.mediaPlaybackRate,
})

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => ({
  setPlaybackRate: (mediaPlaybackRate: number) =>
    dispatch(setMediaPlaybackRate({ mediaPlaybackRate })),
})

export default connect(mapStateToProps, mapDispatchToProps)(MediaSettingsBase)
