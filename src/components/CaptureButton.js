import React, { Component } from 'react';

const CaptureButton = (props) => {
  let captureIcons = {
    "pokeball": "circle-o",
    "greatball": "dot-circle-o",
    "ultraball": "bullseye",
    "masterball": "circle"
  }
  let iconClass=`ball-icon fa fa-2x fa-${captureIcons[props.icon]}`
  // let buttonClass= props.capture ? "capture-button" : "run-button"
  let buttonClass = "capture-button"

  return(
    <div className="small-5 columns">
      <div className={buttonClass}>
        <div className="row">
          <div className="small-3 columns">
            <i className={iconClass} aria-hidden="true"></i>
          </div>
          <div className="capture-button-text small-9 columns">
            {props.text}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaptureButton;
