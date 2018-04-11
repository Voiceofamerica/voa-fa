
import * as React from 'react'
import { compose } from 'redux'
import { History } from 'history'
import * as moment from 'moment'
import { graphql, ChildProps } from 'react-apollo'
import { connect, Dispatch } from 'react-redux'
import { List, ListRowProps } from 'react-virtualized'

import Ticket from '@voiceofamerica/voa-shared/components/Ticket'
import TopNav, { CenterText } from '@voiceofamerica/voa-shared/components/TopNav'
import ThemeProvider from '@voiceofamerica/voa-shared/components/ThemeProvider'

import Loader from 'components/Loader'
import playMedia from 'redux-store/thunks/playMediaFromPsiphon'

import { ProgramAudioQuery } from 'helpers/graphql-types'
import { programsScreenLabels } from 'labels'

import TopNavTheme from './TopNavTheme'
import * as Query from './Audio.graphql'
import { programContent, emptyContent } from './ProgramsScreen.scss'

interface OwnProps {
  history: History
}

interface DispatchProps {
  playMedia: (mediaUrl: string, mediaTitle: string, mediaDescription: string, imageUrl: string) => void
}

type QueryProps = ChildProps<OwnProps, ProgramAudioQuery>
type Props = QueryProps & DispatchProps

class AudioPrograms extends React.Component<Props> {
  playAudio (item: ProgramAudioQuery['content'][0]['audio'], imageUrl: string) {
    this.props.playMedia(
      item.url,
      item.audioTitle,
      item.audioDescription,
      imageUrl,
    )
  }

  renderVirtualContent () {
    const { data: { content } } = this.props
    const rowHeight = 105

    return (
      <List
        height={window.innerHeight - 150}
        rowHeight={rowHeight}
        rowCount={content.length}
        width={window.innerWidth}
        rowRenderer={this.renderRow}
      />
    )
  }

  renderRow = ({ index, isScrolling, key, style }: ListRowProps) => {
    const { data: { content } } = this.props

    const { audio, image, pubDate } = content[index]

    return (
      <div key={key} style={style} dir='rtl'>
        <Ticket
            onPress={() => this.playAudio(audio, image && image.tiny)}
            title={audio.audioTitle}
            imageUrl={image && image.tiny}
            minorText={moment(pubDate).format('lll')}
          suppressImage={isScrolling}
        />
      </div>
    )
  }

  renderEmpty () {
    return (
      <div className={emptyContent}>
        {programsScreenLabels.empty}
      </div>
    )
  }

  render () {
    const { data } = this.props

    const content = data.content && data.content.length ? this.renderVirtualContent() : this.renderEmpty()

    return (
      <div className={programContent}>
        <ThemeProvider value={TopNavTheme}>
          <TopNav rtl style={{ zIndex: 12 }}>
            <CenterText>
              {programsScreenLabels.audio}
            </CenterText>
          </TopNav>
        </ThemeProvider>
        <Loader data={data}>
          {content}
        </Loader>
      </div>
    )
  }
}

const withQuery = graphql<QueryProps, ProgramAudioQuery>(
  Query,
)

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => {
  return {
    playMedia: (mediaUrl, mediaTitle, mediaDescription, imageUrl) =>
      dispatch(playMedia({ mediaUrl, mediaTitle, mediaDescription, isVideo: false, imageUrl })),
  }
}

const withRedux = connect(null, mapDispatchToProps)

export default compose(
  withQuery,
  withRedux,
)(AudioPrograms)
