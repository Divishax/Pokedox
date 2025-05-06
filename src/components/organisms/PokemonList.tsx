import { useEffect, useState } from "react";

interface Pokemon {
    name: string;
    url: string;
}

const PokemonList: React.FC = () => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");
            const data = await response.json();
            setPokemon(data.results);
        };

        fetchPokemon();

    }, []);

    return (
        <div> 
            <h1>Pokemon list ...</h1>
            <ul>
                {pokemon.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonList;