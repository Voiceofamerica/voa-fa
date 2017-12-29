import * as React from 'react'

import { errorBoundary, content, retryButton } from './ErrorBoundary.scss'

interface Props {
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
  }

  componentDidCatch (error, info) {
    // Display fallback UI
    this.setState({ hasError: true })
    console.error(error)
  }

  render () {
    const { children } = this.props

    if (this.state.hasError) {
      return (
        <div className={errorBoundary}>
          <div className={content}>
            اشکالی ایجاد شده است
          </div>
          <div className={retryButton} onClick={() => this.setState({ hasError: false })}>
            دوباره تلاش کنید
          </div>
        </div>
      )
    }

    return children as any
  }
}
