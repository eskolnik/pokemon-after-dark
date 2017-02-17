import React, { Component } from 'react';
import CaptureButton from './CaptureButton';

const CapturePhaseMenu = (props) => {
  return(
    <div className="capture-menu">
      <div className="row">
        <div className="small-1 columns"/>
        <CaptureButton text={"Poke Ball"} icon={"pokeball"} />
        <CaptureButton text={"Great Ball"} icon={"greatball"} />
      </div>
      <div className="row">
        <div className="small-1 columns"/>
        <CaptureButton text={"Ultra Ball"} icon={"ultraball"} />
        <CaptureButton text={"Master Ball"} icon={"masterball"} />
      </div>
    </div>
  )
}

export default CapturePhaseMenu;
