import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { push } from 'react-router-redux'
import { renderInput } from '../components/Fields'

const validateProfile = (values) => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}


const ProfileForm = reduxForm({
  form: 'signupForm',           // <------ same form name
  validate: validateProfile,
  destroyOnUnmount: false       // <------ validate all fields
})((props) => {
  const { onSubmit, pristine, submitting } = props
  return (
      <form className="form-wrapper" onSubmit={onSubmit}>
        <div className="field-list">
          <input className="field-element" name="formType" value={props.formType} type="hidden"/>
          <Field className="field-element" name="firstName" component={renderInput} type="text" label="First Name"/>
          <Field className="field-element" name="lastName" component={renderInput} type="text" label="Last Name"/>
          <Field className="field-element" name="email" component={renderInput} type="email" label="Email"/>
          <button
            disabled={pristine || submitting}
            className="button sqs-system-button sqs-editable-button"
            type="submit"
          >
            Next&nbsp;>
          </button>
        </div>
      </form>
  )
})

class ProfileStep extends Component {
  constructor(props, state) {
    super(props, state)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(push('/credit-card'))
  }
  render() {
    return (
      <div id="form-step-billing">
        <h2>Contact Information</h2>
        <div> <ProfileForm onSubmit={this.handleSubmit} /></div>
      </div>
    )
  }
}

export default connect()(ProfileStep)
