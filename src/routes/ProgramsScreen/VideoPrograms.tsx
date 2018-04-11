
import * as React from 'react'
import { compose } from 'redux'
import { History } from 'history'
import * as moment from 'moment'
import { match } from 'react-router'
import { graphql, ChildProps, QueryOpts } from 'react-apollo'
import { connect, Dispatch } from 'react-redux'
import { List, ListRowProps } from 'react-virtualized'

import Ticket from '@voiceofamerica/voa-shared/components/Ticket'

import Loader from 'components/Loader'
import playMedia from 'redux-store/thunks/playMediaFromPsiphon'

// import { programsScreenLabels } from 'labels'
import { ProgramVideosQuery, ProgramVideosQueryVariables } from 'helpers/graphql-types'
import { programsScreenLabels } from 'labels'

import Params from './Params'
import * as Query from './Videos.graphql'
import { programContent, emptyContent } from './ProgramsScreen.scss'

interface OwnProps {
  history: History
  match: match<Params>
}

interface DispatchProps {
  playMedia: (mediaUrl: string, mediaTitle: string, mediaDescription: string, imageUrl: string) => void
}

type QueryProps = ChildProps<OwnProps, ProgramVideosQuery>
type Props = QueryProps & DispatchProps

class ClipPrograms extends React.Component<Props> {

  playVideo (item: ProgramVideosQuery['program'][0], imageUrl: string) {
    this.props.playMedia(
      item.url,
      item.programTitle,
      item.programDescription,
      imageUrl,
    )
  }

  renderVirtualContent () {
    const { data: { program } } = this.props
    const rowHeight = 105

    return (
      <List
        height={window.innerHeight - 150}
        rowHeight={rowHeight}
        rowCount={program.length}
        width={window.innerWidth}
        rowRenderer={this.renderRow}
      />
    )
  }

  renderRow = ({ index, isScrolling, key, style }: ListRowProps) => {
    const { data: { program } } = this.props

    const item = program[index]

    return (
      <div key={key} style={style} dir='rtl'>
        <Ticket
          onPress={() => this.playVideo(item, item.image && item.image.tiny)}
          title={item.programTitle}
          imageUrl={item.image && item.image.tiny}
          minorText={moment(item.date).format('lll')}
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

    const content = data.program && data.program.length ? this.renderVirtualContent() : this.renderEmpty()

    return (
      <div className={programContent}>
        <Loader data={data}>
          {content}
        </Loader>
      </div>
    )
  }
}

const withQuery = graphql<QueryProps, ProgramVideosQuery>(
  Query,
  {
    options: (ownProps: OwnProps): QueryOpts<ProgramVideosQueryVariables> => ({
      variables: {
        zone: parseInt(ownProps.match.params.zone || '0', 10),
      },
    }),
  },
)

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => {
  return {
    playMedia: (mediaUrl, mediaTitle, mediaDescription, imageUrl) =>
      dispatch(playMedia({ mediaUrl, mediaTitle, mediaDescription, imageUrl, isVideo: true })),
  }
}

const withRedux = connect(null, mapDispatchToProps)

export default compose(
  withQuery,
  withRedux,
)(ClipPrograms)
