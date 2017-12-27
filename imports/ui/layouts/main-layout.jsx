import React, { Component } from 'react'
import AccountsUIWrapper from '../components/common/AccountsUIWrapper.jsx'

class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
        <AccountsUIWrapper />
        <a href="/">Home</a><br />
        <a href="/about">About</a>
        <br />
        {this.props.contents}
      </div>
    )
  }
}

export default MainLayout
