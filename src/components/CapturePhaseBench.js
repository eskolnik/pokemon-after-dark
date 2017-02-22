import React, { Component } from 'react';

class CapturePhaseBench extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let slots = this.props.slots.map((slot) => {
      return(
        <div className="small-2 columns">
          <div className="capture-bench-pokemon">
            {slot}
          </div>
        </div>);
    })

    return(
      <div className="capture-phase-bench">
        <div className="row">
          <div className="small-2 columns">
            <div className="capture-bench-player" />
          </div>
          <div className="small-10 columns">
            <div className="row capture-phase-bench-slots">
              {slots}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CapturePhaseBench;
