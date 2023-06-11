import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  const pokemonToDisplay = pokemons.map((pokemon) => (
    <PokemonCard
      key={pokemon.id}
      name={pokemon.name}
      hp={pokemon.hp}
      sprites={pokemon.sprites}
    />
  ));

  return <Card.Group itemsPerRow={6}>{pokemonToDisplay}</Card.Group>;
}

export default PokemonCollection;
