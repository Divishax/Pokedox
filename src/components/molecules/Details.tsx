import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { PokemonDetails } from "../../constants/types";
import { API_BASE_URL } from "../../constants/constants";
import DataLoader from "../atoms/DataLoader";

const Details: React.FC = () => {
  const { name } = useParams();
  const pokemonUrl = `${API_BASE_URL}/pokemon/${name}`;
  const {
    data: pokemon,
    loading,
    error,
  } = useFetchData<PokemonDetails>(pokemonUrl);

  return (
    <DataLoader loading={loading} error={error} data={pokemon}>
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img
            src={
              pokemon.sprites?.front_default ||
              pokemon.sprites?.other["official-artwork"]?.front_default ||
              "/placeholder.png"
            }
            alt={pokemon.name}
          />
          <p>ID: {pokemon.id}</p>
          <p>Types: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
          <p>
            Abilities: {pokemon.abilities.map((a) => a.ability.name).join(", ")}
          </p>
          <p>
            Stats:{" "}
            {pokemon.stats
              .map((s) => `${s.stat.name}: ${s.base_stat}`)
              .join(", ")}
          </p>
        </div>
      )}
    </DataLoader>
  );
};

export default Details;
