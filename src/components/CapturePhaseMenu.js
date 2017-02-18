import React, { Component } from 'react';
import CaptureButton from './CaptureButton';

const CapturePhaseMenu = (props) => {
  return(
    <div className="capture-menu small-10 small-offset-1 columns end">
      <div className="row">
        <CaptureButton text={"Poke Ball"} icon={"pokeball"} />
        <CaptureButton text={"Great Ball"} icon={"greatball"} />
      </div>
      <div className="row">
        <div className="capture-button-middle small-4 small-offset-4  end columns">
          <div id="run-button">RUN</div>
        </div>
      </div>
      <div className="row">
        <CaptureButton text={"Ultra Ball"} icon={"ultraball"} />
        <CaptureButton text={"Master Ball"} icon={"masterball"} />
      </div>
    </div>
  )
}

export default CapturePhaseMenu;
