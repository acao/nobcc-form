import React, { Component } from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from 'redux-form'
import Card  from 'react-credit-card'
import { renderInput } from '../components/Fields'
import { push } from 'react-router-redux'
import invariant from 'invariant'
import './card.css'

const ccRegex = new RegExp(/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/)

const validateCC = (values) => {
  const errors = {}
  if (!values.number) {
    errors.number = 'Credit Card Number is Required'
  }
  if (!values.cvc || values.cvc.toString().length !== 3) {
    errors.cvc = 'Please supply a three digit CVC'
  }
  if (values.expiry && !values.expiry.length === 4) {
    errors.number = 'Please supply a valid expiration date'
  }
  if (values.number && !values.number.match(ccRegex)){
    errors.number = 'Please supply a valid credit card number'
  }

  return errors
}

const normalizeCC = (value) => {
  return value.replace(/-/g, '')
}

const blockStyle = { display: 'table-cell', width: '50%'}

class CreditCardForm extends Component {
  constructor(props, state) {
    super(props, state)
    this.state = {
      cvc: false
    }

    this.toggleCVCOn = this.toggleCVC.bind(this, true)
    this.toggleCVCOff = this.toggleCVC.bind(this, false)
  }
  componentWillMount()   {
    if (!this.props.signupForm || !this.props.signupForm.values) {
        this.props.dispatch(push('/profile'))
    }
  }
  toggleCVC(state = false) {
    this.setState({ cvc: state })
  }
  render() {
    const { signupForm, onSubmit, pristine, submitting} = this.props;
    let initialValues = { name: '', cvc: '', number: '', expiry: '' }
    let hasValues = false
    let displayName
    if (signupForm && signupForm.values) {
      hasValues = true
      const { billingName, firstName, lastName } = signupForm.values
      displayName = billingName ? billingName : `${firstName} ${lastName}`
      initialValues = {
        ...signupForm.values,
        name: displayName
      }
      console.log(initialValues)
    }
    return (
      <div style={{display: "table"}}>
        <div style={blockStyle}>
          <Card
            style={{
              backgroundColor: "#272727",
              margin: '0 auto',
              padding: 12
            }}
            focused = {this.state.cvc ? 'cvc' : 'name'}
            {...initialValues}
          />
        </div>
        <form className="form-wrapper field-list" onSubmit={onSubmit} style={blockStyle}>
          <div className="field-list">
            <Field
              onFocus={this.toggleCVCOff}
              name="billingName"
              component={renderInput}
              type="text"
              label="Billing Name on Card"
              value={displayName}
            />
            <Field
              onFocus={this.toggleCVCOff}
              normalize={normalizeCC}
              name="number"
              mask="9999-9999-9999-9999"
              maskChar="_"
              component={renderInput}
              type="text"
              maxLength="16"
              label="Number on Card"
            />
            <div>
              <span style={{ display: 'inline-block'}}>
                <Field
                  onFocus={this.toggleCVCOff}
                  name="expiry"
                  maxLength="5"
                  mask="99/99"
                  placeholder="12/16"
                  component={renderInput}
                  type="text"
                  label="Expiration Date"
                  />
              </span>
              <span style={{ display: 'inline-block', width: 50}}>
                <Field
                  onFocus={this.toggleCVCOn}
                  className="field-element"
                  name="cvc"
                  maxLength="3"
                  component={renderInput}
                  type="text"
                  label="CVC"
                  placeholder="123"
                />
              </span>
            </div>
            <button
              disabled={pristine || submitting}
              className="button sqs-system-button sqs-editable-button"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    )
  }
}

CreditCardForm = reduxForm({
  form: 'signupForm',           // <------ same form name
  validate: validateCC,
  destroyOnUnmount: false       // <------ validate all fields
})(CreditCardForm)

CreditCardForm = connect(
  state => {
    return {
      signupForm: state.form.signupForm // pull initial values from account reducer
    }
  }
)(CreditCardForm)

class CreditCardStep extends Component {
  constructor(props, state) {
    super(props, state)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e, ccInfo) {
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <CreditCardForm  handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default connect()(CreditCardStep)
