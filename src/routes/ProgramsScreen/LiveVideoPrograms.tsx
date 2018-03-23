
import * as React from 'react'
import { compose } from 'redux'
import { History } from 'history'
import { graphql, ChildProps } from 'react-apollo'
import { connect, Dispatch } from 'react-redux'
import ResilientImage from '@voiceofamerica/voa-shared/components/ResilientImage'
import SvgIcon from '@voiceofamerica/voa-shared/components/SvgIcon'
import TopNav, { CenterText } from '@voiceofamerica/voa-shared/components/TopNav'

import Loader from 'components/Loader'
import playMedia from 'redux-store/thunks/playMediaFromPsiphon'

import { programsScreenLabels } from 'labels'
import { ProgramLiveVideoQuery } from 'helpers/graphql-types'
import { mapImageUrl } from 'helpers/image'

import * as Query from './LiveVideo.graphql'
import { programContent, iconCircle, liveBlock, liveText } from './ProgramsScreen.scss'

interface OwnProps {
  history: History
}

interface DispatchProps {
  playMedia: (mediaUrl: string, mediaTitle: string, mediaDescription: string, isVideo: boolean) => void
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
    )
  }

  renderLiveContent () {
    const { data } = this.props

    if (!data || !data.live || !data.live.length) {
      return null
    }

    const program = data.live[0]

    return (
      <div>
        <ResilientImage src={program.image.url} onClick={() => this.playVideo(program)}>
          <div className={iconCircle}>
            <SvgIcon src={require('svg/video.svg')} />
          </div>
          <div className={liveBlock}>
            {programsScreenLabels.live}
          </div>
        </ResilientImage>
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
        <TopNav>
          <CenterText>
            {programsScreenLabels.liveHeader}
          </CenterText>
        </TopNav>
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
    props: ({ data }) => {
      if (data && !data.loading && !data.error) {
        data.live = data.live.map(c => {
          return {
            ...c,
            image: c.image && {
              ...c.image,
              url: mapImageUrl(c.image.url, 'w500'),
            },
          }
        })
      }

      return { data }
    },
    options: {
      fetchPolicy: 'network-only',
    },
  },
)

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => {
  return {
    playMedia: (mediaUrl, mediaTitle, mediaDescription, isVideo) =>
      dispatch(playMedia({ mediaUrl, mediaTitle, mediaDescription, isVideo })),
  }
}

const withRedux = connect<{}, DispatchProps, OwnProps>(null, mapDispatchToProps)

export default compose(
  withRedux,
  withQuery,
)(ClipPrograms)
