
import * as React from 'react'
import { compose } from 'redux'
import { History } from 'history'
import { graphql, ChildProps } from 'react-apollo'
import { connect, Dispatch } from 'react-redux'

import TicketList from '@voiceofamerica/voa-shared/components/TicketList'
import { fromAudioArticleList } from '@voiceofamerica/voa-shared/helpers/itemListHelper'
import TopNav, { CenterText } from '@voiceofamerica/voa-shared/components/TopNav'
import ThemeProvider from '@voiceofamerica/voa-shared/components/ThemeProvider'

import Loader from 'components/Loader'
import playMedia from 'redux-store/thunks/playMediaFromPsiphon'

import { ProgramAudioQuery, ProgramAudioQueryVariables } from 'helpers/graphql-types'
import { graphqlAudience, programsScreenLabels } from 'labels'

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
  render () {
    const { data } = this.props

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
          <TicketList
            items={fromAudioArticleList(data.content)}
            onItemClick={this.playAudio}
            emptyContent={this.renderEmpty()}
          />
        </Loader>
      </div>
    )
  }

  private renderEmpty = () => {
    return (
      <div className={emptyContent}>
        {programsScreenLabels.empty}
      </div>
    )
  }

  private playAudio = (id: number) => {
    const { data: { content } } = this.props
    const article = content.find(item => item.id === id)
    const { url, audioTitle, audioDescription } = article.audio
    this.props.playMedia(
      url,
      audioTitle,
      audioDescription,
      article.image && article.image.hero,
    )
  }
}

const withQuery = graphql<QueryProps, ProgramAudioQuery>(
  Query,
  {
    options: {
      variables: {
        source: graphqlAudience,
      } as ProgramAudioQueryVariables,
    },
  },
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
