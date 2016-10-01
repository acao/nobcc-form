import React, { Component } from "react"
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { push } from 'react-router-redux'
import { renderInput } from '../components/Fields'

const validateBilling = (values) => {
  const errors = {}
  if (!values.firstName) {
    errors.username = 'Required'
  }
  if (!values.lastName) {
    errors.username = 'Required'
  }
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const BillingForm = reduxForm({
  form: 'signupForm',           // <------ same form name
  validate: validateBilling,
  destroyOnUnmount: false       // <------ validate all fields
})((props) => {
  const { onSubmit, pristine, submitting } = props
  return (
    <form className="form-wrapper field-list" onSubmit={onSubmit}>
    <div className="field-list">
      <Field className="field-element" name="address1" component={renderInput} type="text" label="Street Address Line 1"/>
      <Field className="field-element" name="address2" component={renderInput} type="text" label="Street Address Line 2"/>
      <Field className="field-element" name="city" component={renderInput} type="text" label="City"/>
      <Field className="field-element" name="zip" component={renderInput} type="text" label="Zip"/>
      <button
        disabled={pristine || submitting}
        className="button sqs-system-button sqs-editable-button"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
)})

class BillingStep extends Component {
  constructor(props, state) {
    super(props, state)
  }
  handleSubmit() {

  }
  render() {
    return (
      <div id="form-step-billing">
        <h2>Billing Information</h2>
        <div> <BillingForm onSubmit={this.handleSubmit}/></div>
      </div>
    )
  }
}

export default connect()(BillingStep)
