import React, { Component } from 'react';
import TallGrass from './TallGrass';
import CapturePhaseBenches from './CapturePhaseBenches';

class CapturePhaseBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" >
        <TallGrass wildPokemon={"POKEMONS"} />
        <CapturePhaseBenches />
      </div>
    );
  }
};

export default CapturePhaseBoard;
