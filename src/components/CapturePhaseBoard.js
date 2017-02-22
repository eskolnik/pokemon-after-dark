import React, { Component } from 'react';
import CapturePhaseBenches from './CapturePhaseBenches';
import CapturePhaseWildArea from './CapturePhaseWildArea';

class CapturePhaseBoard extends Component {
  constructor(props) {
    super(props);
    this.state={
      benches: [
        {player: "Ezra", slots: ["a", "b", "c", "d", "e", "f"]},
        {player: "Christina", slots: ["a", "b", "c", "d", "e", "f"]},
      ]
    }
  }

  render() {
    return (
      <div className="row" >
        <CapturePhaseWildArea />
        <CapturePhaseBenches benches={this.state.benches}/>
      </div>
    );
  }
};

export default CapturePhaseBoard;
