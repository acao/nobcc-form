import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import { routerActions } from 'react-router-redux'

const validateProfile = (values) => {
  const errors = {};
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
  return errors;
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className="field-element" {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

@reduxForm({
  form: 'signupForm',           // <------ same form name
  fields: [/* all fields */],
  validate: validateProfile       // <------ validate all fields
})
class ProfileForm extends Component {
  constructor(props, state) {
    super(props, state)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    this.props.dispatch(routerActions.push('/billing'))
    //e.preventDefault()
  }
  render() {
    return (
      <form className="form-wrapper" onSubmit={this.handleSubmit}>
        <div className="field-list">
          <div className="form-item field">
            <label className="title" htmlFor="firstName">First Name</label>
            <Field className="field-element" name="firstName" component={renderField} type="text"/>
          </div>
          <div className="form-item field">
            <label className="title" htmlFor="lastName">Last Name</label>
            <Field  name="lastName" component={renderField} type="text"/>
          </div>
          <div className="form-item field email required">
            <label className="title" htmlFor="email">Email</label>
            <Field className="field-element" name="email" component={renderField} type="email"/>
          </div>
          <button className="button sqs-system-button sqs-editable-button" type="submit">Submit</button>
        </div>
      </form>
      )
  }
}

export default ProfileForm
