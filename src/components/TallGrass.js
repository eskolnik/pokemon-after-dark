import React, { Component } from 'react';

const TallGrass = (props) => {
  let wildPokemonImage = (
    <div id="wild-pokemon-image" className="wild-pokemon">
      {props.wildPokemon}
    </div>
  )
  return(
    <div className="tall-grass small-10 small-offset-1 columns">
      <div className="row">
        <div className="small-4 small-offset-4 columns">
          {wildPokemonImage}
        </div>
      </div>
    </div>
  )
}

export default TallGrass;
