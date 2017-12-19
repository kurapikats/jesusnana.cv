import React, { Component } from 'react'

class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
        <a href="/">Home</a><br />
        <a href="/about">About</a>
        <br />
        {this.props.contents}
      </div>
    )
  }
}

export default MainLayout
