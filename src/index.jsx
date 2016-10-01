import React from 'react'
import { render } from 'react-dom'
import { DonationRoutes } from './Routes'

const donationForm = document.querySelector('#donation-form')
const membershipForm = document.querySelector('#membership-form')

function renderApp() {
  if (__DEV__) {
    try {
      render(<DonationRoutes />, (donationForm || membershipForm))
    }
    catch(e) {
      const RedBox = require('redbox-react').default
      render(<RedBox error={e} />, (donationForm || membershipForm))
    }
  }
  else {
    render(<DonationRoutes />, (donationForm || membershipForm))
  }
}

renderApp()
