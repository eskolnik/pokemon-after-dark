import React from 'react';
import CaptureButton from './CaptureButton';

const CapturePhaseMenu = (props) => {
  return(
    <div className="capture-menu columns">
      <div className="row">
        <div className="medium-6 columns">
          <CaptureButton text={"Pokeball"} icon={"pokeball"} />
          <CaptureButton text={"Ultra Ball"} icon={"ultraball"} />
        </div>
        <div className="medium-6 columns">
          <CaptureButton text={"Great Ball"} icon={"greatball"} />
          <CaptureButton text={"Master Ball"} icon={"masterball"} />
        </div>
      </div>
      <div className="row">
        <div className="small-4 small-centered columns">
          <div className="capture-button run-button">
            <div className="capture-button-text">
              RUN
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CapturePhaseMenu;
