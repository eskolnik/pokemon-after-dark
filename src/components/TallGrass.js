import React, { Component } from 'react';

const TallGrass = (props) => {
  let wildPokemonImage = (
    <div id="wild-pokemon-image" className="wild-pokemon">
      {props.wildPokemon}
    </div>
  )
  return(
    <div className="tall-grass small-10 small-offset-1 columns">
      {wildPokemonImage}
    </div>
  )
}

export default TallGrass;
