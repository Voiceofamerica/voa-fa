
import * as React from 'react'
import { compose } from 'redux'
import { History } from 'history'
import { graphql, ChildProps } from 'react-apollo'
import { connect, Dispatch } from 'react-redux'
import ResilientImage from '@voiceofamerica/voa-shared/components/ResilientImage'
import SvgIcon from '@voiceofamerica/voa-shared/components/SvgIcon'
import TopNav, { CenterText } from '@voiceofamerica/voa-shared/components/TopNav'
import ThemeProvider from '@voiceofamerica/voa-shared/components/ThemeProvider'

import Loader from 'components/Loader'
import playMedia from 'redux-store/thunks/playMediaFromPsiphon'

import { graphqlAudience, programsScreenLabels } from 'labels'
import { ProgramLiveVideoQuery, ProgramLiveVideoQueryVariables } from 'helpers/graphql-types'
import { isIos } from 'helpers/platform'

import TopNavTheme from './TopNavTheme'
import * as Query from './LiveVideo.graphql'
import { programContent, iconCircle, liveBlock, liveText, playAudio } from './ProgramsScreen.scss'

interface OwnProps {
  history: History
}

interface DispatchProps {
  playMedia: (mediaUrl: string, mediaTitle: string, mediaDescription: string, isVideo: boolean, imageUrl: string) => void
}

type QueryProps = ChildProps<OwnProps, ProgramLiveVideoQuery>
type Props = QueryProps & DispatchProps

class ClipPrograms extends React.Component<Props> {
  playVideo (item: ProgramLiveVideoQuery['live'][0]) {
    if (!item.url) {
      return
    }

    this.props.playMedia(
      item.url,
      item.programTitle,
      item.programDescription,
      true,
      item.image && item.image.tiny,
    )
  }

  playAudio (item: ProgramLiveVideoQuery['live'][0], audioUrl: string) {
    if (!audioUrl) {
      return
    }

    this.props.playMedia(
      audioUrl,
      item.programTitle,
      item.programDescription,
      false,
      item.image && item.image.tiny,
    )
  }

  renderLiveContent () {
    const { data } = this.props

    if (!data || !data.live || !data.live.length) {
      return null
    }

    const program = data.live[0]
    const audioUrl = data.audio[0] && data.audio[0].url

    return (
      <div>
        <ResilientImage src={program.image.hero} onClick={() => this.playVideo(program)}>
          <div className={iconCircle}>
            <SvgIcon src={require('svg/video.svg')} />
          </div>
          <div className={liveBlock}>
            {programsScreenLabels.live}
          </div>
        </ResilientImage>
        {
          audioUrl && !isIos()
          ? <div className={playAudio} onClick={() => this.playAudio(program, audioUrl)}>
              {programsScreenLabels.playAudio}
              <SvgIcon src={require('svg/audio.svg')} style={{ margin: 5 }} />
            </div>
          : null
        }
        <div className={liveText}>
          {program.programDescription}
        </div>
      </div>
    )
  }

  render () {
    const { data } = this.props

    return (
      <div className={programContent}>
        <ThemeProvider value={TopNavTheme}>
          <TopNav rtl style={{ zIndex: 12 }}>
            <CenterText>
              {programsScreenLabels.liveHeader}
            </CenterText>
          </TopNav>
        </ThemeProvider>
        <Loader data={data}>
          {this.renderLiveContent()}
        </Loader>
      </div>
    )
  }
}

const withQuery = graphql<QueryProps, ProgramLiveVideoQuery>(
  Query,
  {
    options: {
      variables: {
        source: graphqlAudience,
      } as ProgramLiveVideoQueryVariables,
      fetchPolicy: 'network-only',
    },
  },
)

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => {
  return {
    playMedia: (mediaUrl, mediaTitle, mediaDescription, isVideo, imageUrl) =>
      dispatch(playMedia({ mediaUrl, mediaTitle, mediaDescription, isVideo, imageUrl })),
  }
}

const withRedux = connect<{}, DispatchProps, OwnProps>(null, mapDispatchToProps)

export default compose(
  withRedux,
  withQuery,
)(ClipPrograms)
