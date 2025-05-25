import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";

interface Details {
  name: string;
  id: number;
  sprites: {
    front_default: string | null;
    other: {
      "official-artwork": {
        front_default: string | null;
      };
    };
  };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

const Details: React.FC = () => {
  const { name } = useParams();
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const { data: pokemon, loading, error } = useFetchData<Details>(pokemonUrl);

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
