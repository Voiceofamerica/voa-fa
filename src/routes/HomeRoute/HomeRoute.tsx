
import * as React from 'react'
import { compose } from 'redux'
import { RouteComponentProps } from 'react-router'
import { graphql, ChildProps } from 'react-apollo'

import { StaticDefaultList } from '@voiceofamerica/voa-shared/components/DefaultList'
import { fromArticleList } from '@voiceofamerica/voa-shared/helpers/itemListHelper'

import { homeRoute, row, content, searchButton } from './HomeRoute.scss'
import * as Query from './HomeRoute.graphql'
import { HomeRouteQuery, HomeRouteQueryVariables } from 'helpers/graphql-types'
import analytics, { AnalyticsProps } from '@voiceofamerica/voa-shared/helpers/analyticsHelper'

import Loader from 'components/Loader'
import PullToRefresh from 'components/PullToRefresh'
import { graphqlAudience, homeLabels } from 'labels'

type QueryProps = ChildProps<RouteComponentProps<void>, HomeRouteQuery>

type Props = QueryProps & AnalyticsProps

interface State {
}

class HomeRouteBase extends React.Component<Props, State> {
  state: State = {
  }

  render () {
    const { data } = this.props

    return (
      <div className={homeRoute}>
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
          <StaticDefaultList
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
  state: 'Home',
  title: 'Home',
  skip: data.loading,
}))

const withHomeQuery = graphql(
  Query,
  {
    options: {
      variables: {
        source: graphqlAudience,
      } as HomeRouteQueryVariables,
    },
  },
)

export default compose(
  withHomeQuery,
  withAnalytics,
)(HomeRouteBase)
