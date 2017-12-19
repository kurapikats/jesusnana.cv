import React from 'react'
import Loadable from 'react-loadable'

import Spinner from '/imports/ui/components/common/Spinner.jsx'

const LoadingSpinner = importComponent => Loadable({
  loader: () => importComponent,
  render(loaded, props) {
    const Component = loaded.default
    return <Component {...props} />
  },
  loading() {
    return <Spinner />
  },
})


export default LoadingSpinner
