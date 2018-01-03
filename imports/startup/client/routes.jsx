import React from 'react'
import { mount } from 'react-mounter'
import { FlowRouter } from 'meteor/kadira:flow-router'

// Import needed templates
import MainLayout from '/imports/ui/layouts/main-layout.jsx'
import ContainerHome from '/imports/ui/pages/home/ContainerHome.js'

FlowRouter.route('/', {
  name: 'Home',
  action() {
    mount(MainLayout, { contents: <ContainerHome /> })
  },
})
