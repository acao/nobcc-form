import React from 'react'
import InputMask from 'react-input-mask'

export const renderInput = ({ input, label, type, meta: { touched, error }, mask, maskChar, ...custom }) => (
  <div className="form-item field">
    <label className="title" htmlFor={input.name}>{label}</label>
    <div className={`form-item field ${(touched && error) ? 'error' : ''}`}>
      {mask? (
        <InputMask className="field-element" {...input} {...custom} mask={mask} maskChar={maskChar}/>
      ) : (
          <input className="field-element" placeholder={label} type={type}  {...input}  {...custom}   />
      )}

      {touched && error && <label style={{overflow: 'scroll-x'}}className="field-error">{error}</label>}
    </div>
  </div>
)
