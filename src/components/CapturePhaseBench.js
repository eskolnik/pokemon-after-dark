import React, { Component } from 'react';
import CapturePhasePokemon from './CapturePhasePokemon';


class CapturePhaseBench extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let slots = this.props.slots.map((slot) => {
      return(
        <CapturePhasePokemon name={slot} />
      );
    })

    let splitName = this.props.player.split(" ")
    let playerName = splitName[0][0]+splitName[1][0]

    return(
      <div className="capture-phase-bench">
        <div className="capture-bench-player">
          <div className="capture-bench-player-text">
            {playerName}
          </div>
        </div>
        <div className="capture-phase-bench-slots">
          {slots}
        </div>
      </div>
    )
  }
}

export default CapturePhaseBench;
