import React, { Component } from 'react';
import CapturePhaseBench from './CapturePhaseBench';

const CapturePhaseBenches = (props) => {
  let benches = props.benches.map((bench) => {
    return( 
      <CapturePhaseBench
        player={bench.player}
        slots={bench.slots}
        />
    )
  })
  return(
    <div className="capture-phase-benches small-6 columns">
      {benches}
    </div>
  )
}

export default CapturePhaseBenches;
