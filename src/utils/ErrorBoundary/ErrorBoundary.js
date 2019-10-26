import React, { Component } from 'react'

import { Link } from '@reach/router'

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', error, info) //eslint-disable-line
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/"> Click here</Link>
          to go to the homepage or wait five seconds
        </h1>
      )
    }
    return this.props.children
  }
}
