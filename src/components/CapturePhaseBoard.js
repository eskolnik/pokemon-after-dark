import React, { Component } from 'react';
import CapturePhaseBenches from './CapturePhaseBenches';
import CapturePhaseWildArea from './CapturePhaseWildArea';

class CapturePhaseBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" >
        <CapturePhaseWildArea />
        <CapturePhaseBenches />
      </div>
    );
  }
};

export default CapturePhaseBoard;
