import React from 'react'
import ErrorMessage from './ErrorMessage'

export default class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {error: null, info: null}
  }

  componentDidCatch (error, info) {
    this.setState({error, info})
    console.error(error)
    console.info(info)
  }

  render () {
    const {error} = this.state

    return error
      ? <ErrorMessage>{String(error)}</ErrorMessage>
      : this.props.children
  }
}
