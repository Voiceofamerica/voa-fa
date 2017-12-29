
import * as React from 'react'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import HomeRoute from 'routes/HomeRoute'
import CategoryRoute from 'routes/CategoryRoute'
import ArticleRoute from 'routes/ArticleRoute'
import Settings from 'routes/Settings'
import LiveStream from 'routes/LiveStream'
import BreakingNews from 'routes/BreakingNews'
import CategorySettings from 'routes/CategorySettings'
import MediaSettings from 'routes/MediaSettings'
import Search from 'routes/Search'

import HeadingLayout from './layouts/HeadingLayout'
import MainLayout from './layouts/MainLayout'

import history from './history'

export default () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path='/article/:id' component={ArticleRoute}/>
      <Route path='/settings/categories' component={CategorySettings}/>
      <Route path='/settings/media' component={MediaSettings}/>
      <Route path='/search/:zoneId/:query' component={Search}/>
      <Route path='/search/:zoneId' component={Search}/>
      <Route path='/search' component={Search}/>
      <HeadingLayout path='/settings' component={Settings} heading='تنظیمات من' />
      <HeadingLayout path='/liveStream' component={LiveStream} heading='پخش زنده '/>
      <HeadingLayout path='/breakingNews' component={BreakingNews} heading='خبر فوری'/>
      <MainLayout path='/articles/:category' component={CategoryRoute}/>
      <MainLayout path='/' component={HomeRoute}/>
    </Switch>
  </ConnectedRouter>
)
