import React from 'react'
import { Field } from 'react-redux'
import { renderInput } from '../components/Fields'
import WizardStep from '../components/WizardStep'
import config from '../config.js'

const MembershipSelector = ({ input, meta: { touched, error }, ...custom }) => (
  <div className="form-item field">
    {colors.map(val => <input {...input} value={val} key={val} {...custom}></input>)}
    {touched && error && <span>{error}</span>}
  </div>
)
function getSelections({ label, value }, input, key) {
  return (
    <div key={key} style={{margin: 6}}>
      <label>
        <input
          style={{margin: 6}}
          type="radio"
          {...input}
          value={value}
          key={value}
        />
        {`${label} - $${value/100}.00`}
      </label>
    </div>
  )
}
const DonationSelector = ({ input, meta: { touched, error } }) => (
  <div className="form-item field">
    {config.donationLevels.map((selection, key) => getSelections(selection, input, key))}
    {touched && error && <span>{error}</span>}
  </div>
)

const DonationAmountStep = (props) => (
  <WizardStep {...props} {...config.donationWizard.steps.donationAmount}>
  {console.log(props, config.donationWizard.steps.donationAmount)}
    {props.formType === 'donation' ? (
      <Field className="form-item field" name="amount" component={DonationSelector} />
    ) : (
      <Field name="amount" component={MembershipSelector} />
    )}
  </WizardStep>
)

export default DonationAmountStep
