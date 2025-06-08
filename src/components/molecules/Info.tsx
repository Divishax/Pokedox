import React from "react";
import { PokemonDetails } from "../../constants/types";

interface Props {
  pokemon: PokemonDetails;
  description?: string;
  gender: string;
  eggGroups: string;
  weaknesses: string[];
}

const PokemonInfo: React.FC<Props> = ({ pokemon, description, gender, eggGroups, weaknesses }) => (
  <div className="ml-6">
    <h2 className="text-2xl font-bold uppercase">{pokemon.name}</h2>
    <p className="text-sm text-gray-600">ID: {pokemon.id}</p>
    <p className="mt-2 text-gray-700">{description}</p>
    <div className="mt-4 space-y-1">
      <p><strong>Height:</strong> {pokemon.height}</p>
      <p><strong>Weight:</strong> {pokemon.weight}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Egg Groups:</strong> {eggGroups}</p>
      <p><strong>Abilities:</strong> {pokemon.abilities.map((a) => a.ability.name).join(", ")}</p>
      <p><strong>Types:</strong> {pokemon.types.map((t) => t.type.name).join(", ")}</p>
      <p><strong>Weak Against:</strong> {weaknesses.join(", ")}</p>
    </div>
  </div>
);

export default PokemonInfo;
