
import * as React from 'react'
import { History } from 'history'
import * as moment from 'moment'
import { graphql, ChildProps } from 'react-apollo'

import Ticket from '@voiceofamerica/voa-shared/components/Ticket'

import Loader from 'components/Loader'

// import { programsScreenLabels } from 'labels'
import { ProgramClipsQuery } from 'helpers/graphql-types'
import { mapImageUrl } from 'helpers/image'
import * as Query from './Clips.graphql'

import { programContent } from './ProgramsScreen.scss'

interface OwnProps {
  history: History
}

type Props = ChildProps<OwnProps, ProgramClipsQuery>

class ClipPrograms extends React.Component<Props> {
  goTo (route: string) {
    const { history } = this.props
    history.push(route)
  }

  goToArticle (id: number) {
    this.goTo(`/article/${id}`)
  }
  render () {
    const { data } = this.props

    return (
      <div className={programContent}>
        <Loader data={data}>
          {
            data.content && data.content.map(item => (
              <div key={item.id}>
                <Ticket
                  onPress={() => this.goToArticle(item.id)}
                  title={item.title}
                  imageUrl={item.image && item.image.url}
                  minorText={moment(item.pubDate).format('lll')}
                />
              </div>
            ))
          }
        </Loader>
      </div>
    )
  }
}

const withQuery = graphql<Props, ProgramClipsQuery>(
  Query,
  {
    props: ({ data }) => {
      if (!data.loading && !data.error) {
        data.content = data.content.filter(c => c).map(c => {
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
  },
)

export default withQuery(ClipPrograms)
