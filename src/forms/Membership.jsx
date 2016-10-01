import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import { push } from 'react-router-redux'

const validateMembership = (profile) => {
  return true
}

@reduxForm({
  form: 'signupForm',           // <------ same form name
  fields: [/* all fields */],
  validate: validateMembership,       // <------ validate all fields
  destroyOnUnmount: false,
})
class CreditCardForm extends Component {
  constructor(props, state) {
    super(props, state)
  }
  handleSubmit() {
      this.props.dispatch(push("profile"))
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text"/>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text"/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      )
  }
}

export default CreditCardForm
