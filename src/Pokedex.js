import React from "react";
import Pokecard from "./Pokecard";
import './App.css';

/** Index of Pokemon: show individual cards. */

function Pokedex(props) {
  let winMessage = null;
  if (props.isWinner) {
    winMessage = <p className="dexwinner">THIS HAND WINS!</p>;
  }

  return (
    <div className="dex">
      <h2 className="dextitle">Pokedex</h2>
      <div className="dexcards">
        {props.pokemon.map(p => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4>Total experience: {props.exp}</h4>
      {winMessage}
    </div>
  );
}

export default Pokedex;
