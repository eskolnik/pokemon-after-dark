import React from 'react';

const CaptureButton = (props) => {
  let ballImage = <img src={`/images/${props.icon}.png`} />

  return(
    <div className="capture-button">
      {ballImage}
      <div className="capture-button-text">
        {props.text}
      </div>
    </div>
  )
}

export default CaptureButton;
