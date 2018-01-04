
import * as React from 'react'
import { Route, RouteProps } from 'react-router'
import { connect, Dispatch } from 'react-redux'

import TopNav, { TopNavItem } from '@voiceofamerica/voa-shared/components/TopNav'

import toggleMediaDrawer from 'redux-store/actions/toggleMediaDrawer'

import ErrorBoundary from 'components/ErrorBoundary'
import DefaultBottomNav from 'containers/DefaultBottomNav'
import AppState from 'types/AppState'
import Category from 'types/Category'

interface StateProps {
  categories: Category[]
}

interface DispatchProps {
  toggleMediaPlayer: () => void
}

type Props = StateProps & RouteProps & DispatchProps

function MainLayout ({ component: Component, categories, ...rest }: Props) {
  return (
    <Route {...rest} render={props => {
      function replace (route: string) {
        props.history.replace(route)
      }

      const { category: categoryIdStr } = props.match.params
      const isHeadlines = categoryIdStr === null || categoryIdStr === undefined
      const categoryId = isHeadlines ? 1 : parseInt(categoryIdStr, 10)

      return (
        <div>
          <TopNav>
            <TopNavItem selected={isHeadlines} onClick={() => replace('/')}>
              سرخط خبرها
            </TopNavItem>
            {
              categories.map((category) => (
                <TopNavItem key={category.id} selected={categoryId === category.id} onClick={() => replace(`/articles/${category.id}`)}>
                  { category.name }
                </TopNavItem>
              ))
            }
          </TopNav>

          <ErrorBoundary>
            <Component {...props as any} />
          </ErrorBoundary>

          <DefaultBottomNav history={props.history} />
        </div>
      )
    }} />
  )
}

const mapStateToProps = ({ settings: { categories } }: AppState): StateProps => ({
  categories,
})

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  toggleMediaPlayer: () => dispatch(toggleMediaDrawer({})),
})

const withRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default withRedux(MainLayout)
