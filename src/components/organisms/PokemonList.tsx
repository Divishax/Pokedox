import axios from "axios";
import { useEffect, useState } from "react";

interface Pokemon {
    name: string;
    // url: string;
}

const PokemonList: React.FC = () => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");
                setPokemon(response.data.results);
            }
            catch (err) {
                setError("Failed to fetch Pokemon data");
            }
            finally {
                setLoading(false);
            }
        };

        fetchPokemon();

    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div> 
            <h1>Pokemon list</h1>
            <ul>
                {pokemon.map((p, index) => (
                    <li key={index}>{p.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonList;