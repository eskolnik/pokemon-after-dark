import React, { Component } from 'react';
import CapturePhaseBenches from './CapturePhaseBenches';
import CapturePhaseWildArea from './CapturePhaseWildArea';

class CapturePhaseBoard extends Component {
  constructor(props) {
    super(props);
    this.state={
      benches: [
        {player: "Ezra Skolnik", slots: ["a", "b", "c", "d", "e", "f"]},
        {player: "Christina Koller", slots: ["a", "b", "c", "d", "e", "f"]},
      ]
    }
  }

  render() {
    return (
      <div className="capture-phase-board" >
        <CapturePhaseWildArea />
        <CapturePhaseBenches benches={this.state.benches}/>
      </div>
    );
  }
};

export default CapturePhaseBoard;
