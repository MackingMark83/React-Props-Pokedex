import React from 'react';
import './App.css';

const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';


/** Individual Pokemon card. */

function Pokecard(props) {
  let imgSrc = `${POKE_API}${props.id}.png`;

  return (
      <div className="card">
        <div className="cardtitle">{ props.name }</div>
        <img className="cardimage" src={imgSrc} />
        <div className="carddata">Type: {props.type}</div>
        <div className="carddata">EXP: {props.exp}</div>
      </div>
  );
}

export default Pokecard;
