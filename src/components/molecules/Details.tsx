import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  const [pokemon, setPokemon] = useState<Details | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(pokemonUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (isMounted) {
          setPokemon(data);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPokemon();

    return () => {
      isMounted = false;
    };
  }, [pokemonUrl]);

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
