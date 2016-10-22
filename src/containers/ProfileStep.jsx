import React from 'react'
import { Field } from 'react-redux'

import { renderInput } from '../components/Fields'
import WizardStep from '../components/WizardStep'
import config from '../config.js'
console.log(config)

const ProfileStep = (props) => (
  <WizardStep {...props} {...config.donationWizard.steps.profile}>
    <input name="formType" value={props.formType} type="hidden"/>
    <Field name="firstName" component={renderInput} type="text" label="First Name"/>
    <Field name="lastName" component={renderInput} type="text" label="Last Name"/>
    <Field name="email" component={renderInput} type="email" label="Email"/>
  </WizardStep>
)

export default ProfileStep
