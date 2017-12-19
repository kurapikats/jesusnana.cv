import React from 'react'
import { mount } from 'react-mounter'
import { FlowRouter } from 'meteor/kadira:flow-router'

// Import needed templates
import MainLayout from '/imports/ui/layouts/main-layout.jsx'
import NotFound from '/imports/ui/pages/not-found/not-found.jsx'
import ContainerHome from '/imports/ui/pages/home/ContainerHome.js'
import ContainerAbout from '/imports/ui/pages/about/ContainerAbout.js'

FlowRouter.route('/', {
  name: 'Home',
  action() {
    mount(MainLayout, { contents: <ContainerHome /> })
  },
})

FlowRouter.route('/about', {
  name: 'About',
  action() {
    mount(MainLayout, { contents: <ContainerAbout /> })
  },
})

FlowRouter.notFound = {
  name: 'PageNotFound',
  action() {
    mount(NotFound, { contents: <NotFound /> })
  },
}
