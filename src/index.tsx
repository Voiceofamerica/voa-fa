
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import * as moment from 'moment'

import './globalStyle.scss'

import App from './containers/App'
import { start } from 'helpers/psiphon'

const rootElement = document.getElementById('app')

moment.locale('fa')

start().then(() => {
  const afsm = (window as any).AndroidFullScreen
  afsm && afsm.immersiveMode()

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
      const splash = (navigator as any).splashscreen
      if (splash) {
        splash.hide()
      }
    }, 3000)
  })
}).catch(console.error)

document.addEventListener(
  'backbutton',
  (ev) => { ev.preventDefault() },
  false,
)
