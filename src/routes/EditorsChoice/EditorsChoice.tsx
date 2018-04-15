
import * as React from 'react'
import { compose } from 'redux'
import { RouteComponentProps } from 'react-router'
import { graphql, ChildProps } from 'react-apollo'

import MixedList from '@voiceofamerica/voa-shared/components/MixedList'
import { fromArticleList } from '@voiceofamerica/voa-shared/helpers/itemList'

import { editorsChoice, row, content, searchButton } from './EditorsChoice.scss'
import * as Query from './EditorsChoiceRoute.graphql'
import { EditorsChoiceRouteQuery } from 'helpers/graphql-types'
import analytics, { AnalyticsProps } from 'helpers/analytics'

import Loader from 'components/Loader'
import PullToRefresh from 'components/PullToRefresh'
import { homeLabels } from 'labels'

type QueryProps = ChildProps<RouteComponentProps<void>, EditorsChoiceRouteQuery>

type Props = QueryProps & AnalyticsProps

interface State {
}

class EditorsChoiceBase extends React.Component<Props, State> {
  state: State = {
  }

  render () {
    const { data } = this.props

    return (
      <div className={editorsChoice}>
        <Loader data={data} hasContent={data.content && data.content.length > 0}>
          { this.renderContent() }
        </Loader>
      </div>
    )
  }

  private renderSearchButton = () => {
    return (
      <div className={row}>
        <button className={searchButton} onClick={() => this.goTo('/search')}>
          {homeLabels.search}
        </button>
      </div>
    )
  }

  private renderContent = () => {
    const { data } = this.props

    return (
      <div className={content}>
        <PullToRefresh data={data}>
          { this.renderSearchButton() }
          <MixedList.Static
            items={fromArticleList(data.content)}
            onItemClick={this.goToArticle}
          />
        </PullToRefresh>
      </div>
    )
  }

  private goTo = (route: string) => {
    const { history } = this.props
    history.push(route)
  }

  private goToArticle = (id: number) => {
    this.goTo(`/article/${id}`)
  }
}

const withAnalytics = analytics<QueryProps>(({ data }) => ({
  state: 'Editor\'s Choice',
  title: 'Editor\'s Choice',
  skip: data.loading,
}))

const withEditorsChoiceQuery = graphql(
  Query,
)

export default compose(
  withEditorsChoiceQuery,
  withAnalytics,
)(EditorsChoiceBase)
