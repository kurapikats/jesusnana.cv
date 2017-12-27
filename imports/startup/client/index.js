import { Accounts } from 'meteor/accounts-base'

import './routes.jsx'

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
})
