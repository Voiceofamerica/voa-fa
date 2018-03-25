
import * as React from 'react'
import { compose } from 'redux'
import { History } from 'history'
import * as moment from 'moment'
import { match } from 'react-router'
import { graphql, ChildProps, QueryOpts } from 'react-apollo'
import { connect, Dispatch } from 'react-redux'

import Ticket from '@voiceofamerica/voa-shared/components/Ticket'

import Loader from 'components/Loader'
import playMedia from 'redux-store/thunks/playMediaFromPsiphon'

// import { programsScreenLabels } from 'labels'
import { ProgramVideosQuery, ProgramVideosQueryVariables } from 'helpers/graphql-types'
import { mapImageUrl } from 'helpers/image'
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

  renderContent () {
    const { data } = this.props

    return (
      data.program && data.program.map(item => (
        <div key={item.id}>
          <Ticket
            onPress={() => this.playVideo(item, item.image && item.image.url)}
            title={item.programTitle}
            imageUrl={item.image && item.image.url}
            minorText={moment(item.date).format('lll')}
          />
        </div>
      ))
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

    const content = data.program && data.program.length ? this.renderContent() : this.renderEmpty()

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
    props: ({ data }) => {
      if (!data.loading && !data.error) {
        data.program = data.program.filter(c => c && c.url).map(c => {
          return {
            ...c,
            image: c.image && {
              ...c.image,
              url: mapImageUrl(c.image.url, 'w100'),
            },
          }
        })
      }

      return { data }
    },
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
