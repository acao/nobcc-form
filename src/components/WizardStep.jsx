import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { push } from 'react-router-redux'
import { renderInput } from '../components/Fields'


const WizardStepForm = reduxForm({
  form: 'signupForm',           // <------ same form name
  destroyOnUnmount: false       // <------ validate all fields
})((props) => {
  const { onSubmit, pristine, submitting, children, validate, formConfig } = props
  console.log(formConfig  )
  return (
      <form className="form-wrapper" onSubmit={onSubmit} {...formConfig.form} >
        <div className="field-list">
          {children}
          <button
            disabled={pristine || submitting}
            className="button sqs-system-button sqs-editable-button"
            type="submit"
          >
            <span dangerouslySetInnerHTML={{ __html: (formConfig.submitText || 'Next&nbsp;>') }} />
          </button>
        </div>
      </form>
  )
})

class WizardStep extends Component {
  constructor(props, state) {
    super(props, state)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(push(this.props.nextStep || '/'))
    if (this.props.afterSubmit) {
      this.props.afterSubmit(this.props)
    }
  }
  render() {
    return (
      <div id="form-step">
        <h2>{this.props.title}</h2>
        <div>
          <WizardStepForm formConfig={this.props}>
            {this.props.children}
          </WizardStepForm>
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    signupForm: state.form.signupForm // pull initial values from account reducer
  }
})(WizardStep)
console.log(WizardStep)
