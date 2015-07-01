import React from 'react'
import './index.css'

class Page extends React.Component {
  render () {
    return (
      <div>Ohai!</div>
    )
  }
}

React.render(<Page />, document.getElementById('app'))
