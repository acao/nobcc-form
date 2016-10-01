import React, { Component } from "react"
import MembershipForm from '../forms/Membership'

const membershipSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

class MembershipStep extends Component {
  constructor(props, state) {
    super(props, state)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(membershipInfo) {

  }
  render() {
    <div id="form-step-membership">
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
    </div>
  }
}

export default MembershipStep
