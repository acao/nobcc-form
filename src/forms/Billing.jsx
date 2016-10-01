import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"

const validateBilling = (profile) => {
  return true
}

@reduxForm({
  form: 'signupForm',           // <------ same form name
  fields: [/* all fields */],
  validate: validateBilling,       // <------ validate all fields
  destroyOnUnmount: false
})
class BillingForm extends Component {
  constructor(props, state) {
    super(props, state)
  }
  handleSubmit() {
    this.props.dispatch(push("/cc"))
  }
  render() {
    return (
        <form className="form-wrapper field-list" onSubmit={this.props.handleSubmit}>
          <div className="form-item">
            <label htmlFor="firstName">First Name</label>
            <Field className="field-element" name="firstName" component="input" type="text"/>
          </div>
          <div className="form-item">
            <label htmlFor="lastName">Last Name</label>
            <Field className="field-element" name="lastName" component="input" type="text"/>
          </div>
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <Field className="field-element" name="email" component="input" type="email"/>
          </div>
          <button className="button sqs-system-button sqs-editable-button" type="submit">Submit</button>
        </form>
      )
  }
}

export default BillingForm
