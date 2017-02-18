import React, { Component } from 'react';
import TallGrass from './TallGrass';
import CapturePhaseMenu from './CapturePhaseMenu';

class CapturePhaseWildArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wild-container small-6 columns">
        <div className="wild-area">
          <div className="row">
            <TallGrass wildPokemon={"POKEMONS"} />
          </div>
          <div className="row">
            <CapturePhaseMenu />
          </div>
        </div>
      </div>
    );
  }
};

export default CapturePhaseWildArea;
