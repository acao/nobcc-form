import React, { Component } from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import "./wizard.css"

const Wizard = ({ children, location }) => (
  <div>
    <ReactCSSTransitionGroup
      component="div"
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      transitionAppear={true}
      transitionAppearTimeout={500}
    >
      {React.cloneElement(children, {
        key: location.pathname
      })}
    </ReactCSSTransitionGroup>
  </div>
)
export default Wizard
