
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import * as moment from 'moment'

import { momentLocale } from 'labels'

import './globalStyle.scss'

import App from './containers/App'
import { start } from 'helpers/psiphon'
import 'helpers/pushNotifications'

const rootElement = document.getElementById('app')

moment.locale(momentLocale)

start().then(() => {
  let render = (Component, cb?) => {
    ReactDOM.render(
      <Component />,
      rootElement,
      cb,
    )
  }

  if (module.hot) {
    render = Component => {
      ReactDOM.render(
        <AppContainer>
          <Component />
        </AppContainer>,
        rootElement,
      )
    }

    module.hot.accept('./containers/App', () => {
      const NextApp = require('./containers/App').default
      render(NextApp)
    })
  }

  render(App, () => {
    setTimeout(() => {
      const { splashscreen } = navigator
      if (splashscreen) {
        splashscreen.hide()
      }
    }, 3000)
  })
}).catch(console.error)
