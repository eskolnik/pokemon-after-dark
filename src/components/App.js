import React, { Component } from 'react';
import CapturePhaseBoard from './CapturePhaseBoard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div>
          <CapturePhaseBoard />
        </div>
      </div>
    );
  };
}

export default App;
