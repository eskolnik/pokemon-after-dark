import React, { Component } from 'react';

const TallGrass = (props) => {

  return(
    <div className="tall-grass small-6 columns">
      <div className="row">
        <div className="wild-pokemon small-6 offset-3 columns">
          {props.wildPokemon}
          </div> 
      </div>
    </div>
  )
}

export default TallGrass;
