import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Pokemon {
  name: string;
  url: string;
}

const List: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [nextUrl, setNextUrl] = useState<string | null>(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [prevUrl, setPrevUrl] = useState(null);

  const fetchPokemons = async (url: string | null) => {
    if (!url) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPokemons(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons(nextUrl);
  }, []);

  const handleNextPage = () => {
    if (nextUrl) {
      fetchPokemons(nextUrl);
    }
  };

  const handlePrevPage = () => {
    if (prevUrl) {
      fetchPokemons(prevUrl);
    }
  };

  if (loading) return <p>Loading Pokemons ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>Pokédex</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
          // <Details key={index} pokemonUrl={pokemon.url} />
        ))}
      </ul>
      <button onClick={handlePrevPage} disabled={!prevUrl}>
        Previous
      </button>
      <button onClick={handleNextPage} disabled={!nextUrl}>
        Next
      </button>
    </>
  );
};

export default List;
