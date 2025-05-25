import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";

import { PokemonDetails } from "../../constants/types";
import { API_BASE_URL } from "../../constants/constants";

const Details: React.FC = () => {
  const { name } = useParams();
  const pokemonUrl = `${API_BASE_URL}/pokemon/${name}`;
  const { data: pokemon, loading, error } = useFetchData<PokemonDetails>(pokemonUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pokemon) return <p>No Pokémon found.</p>;

  const { id, sprites, types, abilities, stats } = pokemon;
  const imageUrl =
    sprites?.front_default ||
    sprites?.other["official-artwork"]?.front_default ||
    "/placeholder.png"; // Provide a default placeholder

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={imageUrl} alt={pokemon.name} />
      <p>ID: {id}</p>
      <p>Types: {types.map((t) => t.type.name).join(", ")}</p>
      <p>Abilities: {abilities.map((a) => a.ability.name).join(", ")}</p>
      <p>
        Stats: {stats.map((s) => `${s.stat.name}: ${s.base_stat}`).join(", ")}
      </p>
    </div>
  );
};

export default Details;
