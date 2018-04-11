
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import TopNav, { TopNavItem, StaticItem } from '@voiceofamerica/voa-shared/components/TopNav'
import ThemeProvider from '@voiceofamerica/voa-shared/components/ThemeProvider'

import analytics, { AnalyticsProps } from 'helpers/analytics'
import ErrorBoundary from 'components/ErrorBoundary'
import Category from 'types/Category'
import { programsScreenLabels } from 'labels'

import TopNavTheme from './TopNavTheme'
import Params from './Params'
import LiveVideoPrograms from './LiveVideoPrograms'
import VideoPrograms from './VideoPrograms'
import AudioPrograms from './AudioPrograms'
import { programsScreen, programTypeNav, typeItem, active } from './ProgramsScreen.scss'

type ProgramType = 'live' | 'video' | 'audio'

const LIVE: ProgramType = 'live'
const VIDEO: ProgramType = 'video'
const AUDIO: ProgramType = 'audio'

const PROGRAM_ZONES: Category[] = [
  {
    id: 0,
    name: programsScreenLabels.all,
  },
  {
    id: 1565,
    name: 'اخبار شامگاهی',
  },
  {
    id: 1566,
    name: 'افق نو',
  },
  {
    id: 1567,
    name: 'ساعت خبر',
  },
  {
    id: 1568,
    name: 'روی خط',
  },
  {
    id: 1569,
    name: 'شباهنگ',
  },
  {
    id: 1570,
    name: 'اخبار شبانگاهی',
  },
  {
    id: 1868,
    name: 'صفحه آخر',
  },
  {
    id: 1573,
    name: 'سيمای آمریکا',
  },
  {
    id: 4070,
    name: 'تاپ تن',
  },
  {
    id: 4068,
    name: 'سرمایه',
  },
  {
    id: 4071,
    name: 'اکران',
  },
  {
    id: 4073,
    name: 'چشم انداز',
  },
  {
    id: 4135,
    name: 'نقش قلم',
  },
  // { chit-chat - no zone id found
  //   id: 0,
  //   name: 'چیت چت',
  // },
  {
    id: 4531,
    name: 'تبلت',
  },
  {
    id: 4761,
    name: 'فرارو',
  },
  {
    id: 3826,
    name: 'گزارش هفته',
  },
  {
    id: 4303,
    name: 'صدای شما',
  },
  {
    id: 4072,
    name: 'روزنه',
  },
  // { special-programs - no zone id found
  //   id: 0,
  //   name: 'ویژه برنامه ها',
  // },
  {
    id: 5024,
    name: 'برش هایی از صفحه آخر',
  },
  // 5398 - با گرتا ون ساسترن - With Greta Van Sisteren
  // 4547 - گزارش هفته - Weekly report
  // Strange (mpd) - 166645
]

interface Props extends RouteComponentProps<Params>, AnalyticsProps {
}

class ProgramsScreen extends React.Component<Props> {
  setProgramType = (programType: ProgramType) => {
    const { history, match } = this.props
    const { zone } = match.params

    if (zone) {
      history.replace(`/programs/${programType}/${zone}`)
    } else {
      history.replace(`/programs/${programType}`)
    }
  }

  setZoneId = (zoneId: number) => {
    const { history, match } = this.props
    const { type = VIDEO } = match.params
    history.replace(`/programs/${type}/${zoneId}`)
  }

  renderPrograms () {
    const { history, match } = this.props
    const { type = VIDEO } = match.params
    if (type === VIDEO) {
      return <VideoPrograms history={history} match={match} />
    } else if (type === AUDIO) {
      return <AudioPrograms history={history} />
    } else if (type === LIVE) {
      return <LiveVideoPrograms history={history} />
    } else {
      throw new Error(`Invalid programType ${type}`)
    }
  }

  renderProgramTypes () {
    const { type = VIDEO } = this.props.match.params

    return (
      <div className={programTypeNav}>
        <div className={type === VIDEO ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(VIDEO)}>
          {programsScreenLabels.videos}
        </div>
        <div className={type === AUDIO ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(AUDIO)}>
          {programsScreenLabels.audio}
        </div>
        <div className={type === LIVE ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(LIVE)}>
          {programsScreenLabels.liveHeader}
        </div>
      </div>
    )
  }

  renderTopNav () {
    const { zone, type = VIDEO } = this.props.match.params

    if (type !== VIDEO) {
      return null
    }

    return (
      <ThemeProvider value={TopNavTheme}>
        <TopNav rtl>
          <StaticItem />
          {
            PROGRAM_ZONES.map(({ id, name }, idx) => {
              const selected = zone ? parseInt(zone, 10) === id : idx === 0

              return (
                <TopNavItem
                  key={id}
                  selected={selected}
                  onClick={() => this.setZoneId(id)}
                >
                  {name}
                </TopNavItem>
              )
            })
          }
          <TopNavItem />
        </TopNav>
      </ThemeProvider>
    )
  }

  render () {
    return (
      <div className={programsScreen}>
        {this.renderTopNav()}
        <ErrorBoundary>
          {this.renderPrograms()}
        </ErrorBoundary>
        {this.renderProgramTypes()}
      </div>
    )
  }
}

const withAnalytics = analytics<Props>({
  state: 'Programs',
  title: 'Programs',
})

export default withAnalytics(ProgramsScreen)
