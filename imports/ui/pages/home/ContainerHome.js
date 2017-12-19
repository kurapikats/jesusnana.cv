import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import LoadingSpinner from '/imports/ui/components/common/LoadingSpinner.jsx'

export default withTracker(() => ({
  currentUser: Meteor,
  name: 'Onin',
}))(LoadingSpinner(import('./Home.jsx')))

