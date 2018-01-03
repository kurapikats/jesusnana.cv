import React, { Component } from 'react'
import NavBar from '../components/navbar/NavBar.jsx'
import SideNav from '../components/sidenav/SideNav.jsx'

class MainLayout extends Component {
  componentDidMount() {
    $('.button-sidenav').sideNav({
      edge: 'right',
      closeOnClick: true,
      draggable: true,
    })
  }

  render() {
    return (
      <div className="main-layout">
        <NavBar />
        <SideNav />
        {this.props.contents}
      </div>
    )
  }
}

export default MainLayout
