import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'

// Containers
import Wizard from './containers/Wizard'
import ProfileStep from './containers/ProfileStep'
import BillingStep from './containers/BillingStep'
import CreditCardStep from './containers/CreditCardStep'
import DonationAmountStep from './containers/DonationAmountStep'
// import MembershipStep from './containers/MembershipStep'

const history = syncHistoryWithStore(hashHistory, store)

class DonationRoutes extends Component {
  constructor(props, state) {
    super(props, state)
  }
  render() {
    return (
      <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Wizard}>
              <IndexRedirect to="/profile" />
              <Route path="profile" component={ProfileStep} />
              <Route path="credit-card" component={CreditCardStep} />
            </Route>
          </Router>
      </Provider>
    )
  }
}
class MembershipRoutes extends Component {
  constructor(props, state) {
    super(props, state)
  }
  render() {
    return (
      <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={<Wizard formType="membership" />}>
              <IndexRoute component={ProfileStep} />
            </Route>
          </Router>
      </Provider>
    )
  }
}
export {
  DonationRoutes,
  MembershipRoutes
}
